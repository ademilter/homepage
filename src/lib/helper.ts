import { format, parseISO } from "date-fns";
import { groupBy } from "lodash";
import { ILink } from "@/types";

export function bookmarkGroupByWeekNumber(data: [] | object) {
  return groupBy(data, (bookmark: ILink) =>
    format(parseISO(bookmark.created), "w"),
  );
}
