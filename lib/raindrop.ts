import { Bookmark } from 'types/Bookmark';

const getBookmark = async (page = 0) => {
  const query = [
    `https://api.raindrop.io/rest/v1/raindrops/0`,
    `?perpage=50`,
    `&page=${page}`,
    `&search=[{"key":"tag","val":"history"}]`,
    `&sort=-created`,
  ].join('');

  const res = await fetch(query, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
    },
  });
  const data = await res.json();
  let bookmarks: [Bookmark] = data.items;

  if (bookmarks.length > 0) {
    return bookmarks.concat(await getBookmark(page + 1));
  } else {
    return bookmarks;
  }
};

export { getBookmark };
