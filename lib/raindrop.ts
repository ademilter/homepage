import { Bookmark } from "types/Bookmark";
import { format, getYear, parseISO } from "date-fns";
import groupBy from "lodash.groupby";

export const getBookmark = async (page = 0, year) => {
  const query = [
    `https://api.raindrop.io/rest/v1/raindrops/0`,
    `?perpage=50`,
    `&page=${page}`,
    `&search=[{ "key": "tag", "val": "history"}, { "key": "created", "val": "${year}" }]`,
    `&sort=-created`,
  ].join("");

  const res = await fetch(query, {
    method: "get",
    headers: {
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
    },
  });
  const data = await res.json();
  let bookmarks: [Bookmark] = data.items;

  if (bookmarks.length > 0) {
    return bookmarks.concat(await getBookmark(page + 1, year));
  } else {
    return bookmarks;
  }
};

export async function getBookmarkGroup(year = getYear(new Date())) {
  const data: [Bookmark] = await getBookmark(0, year);

  const dataGroupByDay = groupBy(data, (item: Bookmark) => {
    const dateISO = parseISO(item.created);
    const week = format(dateISO, "I");
    const month = format(dateISO, "M");

    if (month === "1" && ["52", "53"].includes(week)) return 0;
    return week;
  });

  const weeks = Object.keys(dataGroupByDay)
    .map((o) => parseInt(o))
    .reverse();

  return {
    data: dataGroupByDay,
    weeks,
    year,
  };
}
