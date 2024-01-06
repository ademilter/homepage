import { format, parseISO } from "date-fns";
import { groupBy } from "lodash";
import { ILink } from "@/types";

export function bookmarkGroupByWeekNumber(data: [] | object) {
  return groupBy(data, (bookmark: ILink) =>
    format(parseISO(bookmark.created), "w", { weekStartsOn: 1 }),
  );
}

export const formatter = Intl.NumberFormat("tr", { notation: "compact" });
