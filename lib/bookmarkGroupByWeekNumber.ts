import { format, parseISO } from "date-fns";
import groupBy from "lodash.groupby";
import { ILink } from "@/types/index";

const bookmarkGroupByWeekNumber = (data) => {
  return groupBy(data, (bookmark: ILink) => {
    const dateISO = parseISO(bookmark.created);
    const week = format(dateISO, "I"); // ISO Week of Year (1-53)
    const month = format(dateISO, "M"); // Month (1-12)
    if (month === "1" && ["52", "53"].includes(week)) return 0;
    return week;
  });
};

export default bookmarkGroupByWeekNumber;
