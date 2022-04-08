import type { IBookmark } from "types/Bookmark";
import { format, parseISO } from "date-fns";
import groupBy from "lodash.groupby";

export default class Raindrop {
  public collectionId: number = 15611214;
  public perPage: number = 50;
  public created: string; // ISO date

  constructor(created) {
    this.created = created;
  }

  private getGeneratePath(page: number): string {
    return [
      `https://api.raindrop.io/rest/v1/raindrops/0`,
      `?perpage=${this.perPage}`,
      `&page=${page}`,
      `&collectionId=${this.collectionId}`,
      `&search=created:>${this.created}`,
      `&sort=-created`,
    ].join("");
  }

  public async getBookmarks(page: number = 0): Promise<IBookmark[]> {
    console.log(this.getGeneratePath(page));
    const res = await fetch(this.getGeneratePath(page), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
      },
    });

    const data = await res.json();

    if (data.items.length === this.perPage) {
      return data.items.concat(await this.getBookmarks(page + 1));
    } else {
      return data.items;
    }
  }

  public async getBookmarksGroupByWeek(): Promise<{
    data: IBookmark[];
    year: string;
  }> {
    const bookmarks: IBookmark[] = await this.getBookmarks();

    return groupBy(bookmarks, (bookmark: IBookmark) => {
      const dateISO = parseISO(bookmark.created);
      const week = format(dateISO, "I"); // ISO Week of Year (1-53)
      const month = format(dateISO, "M"); // Month (1-12)
      if (month === "1" && ["52", "53"].includes(week)) return 0;
      return week;
    });
  }
}
