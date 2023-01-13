import { format, parseISO } from "date-fns";
import groupBy from "lodash-es/groupBy";
import { ILink } from "@/types/index";

const bookmarkGroupByWeekNumber = (data) => {
  return groupBy(data, (bookmark: ILink) =>
    format(parseISO(bookmark.created), "w")
  );
};

export default bookmarkGroupByWeekNumber;
