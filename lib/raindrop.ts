import type { IBookmark } from "@/types/index";
import { format, parseISO } from "date-fns";
import groupBy from "lodash.groupby";

export default class Raindrop {
  private collectionId: number = 15611214;
  private perPage: number = 50;
  public createdAt: string; // ISO date format

  constructor({ createdAt }: { createdAt: string }) {
    this.createdAt = createdAt;
  }

  private async fetchData(page: number = 0): Promise<IBookmark[]> {
    const request = () => {
      const url = [
        `https://api.raindrop.io/rest/v1/raindrops/${this.collectionId}`,
        `?perpage=${this.perPage}`,
        `&page=${page}`,
        `&search=created:>${this.createdAt}`,
        `&sort=-created`,
      ]
        .filter((o) => o)
        .join("");

      return fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
        },
      });
    };

    const res = await request();
    const data = await res.json();

    if (data.items.length === this.perPage) {
      return data.items.concat(await this.fetchData(page + 1));
    } else {
      return data.items;
    }
  }

  public async getBookmarks(): Promise<IBookmark[]> {
    return this.fetchData();
  }

  // response : { [key: string]: IBookmark[] }
  public async getBookmarksGroupByWeekNumber(): Promise<{
    [key: string]: IBookmark[];
  }> {
    const bookmarks: IBookmark[] = await this.fetchData();

    const data = bookmarks.map((bookmark: IBookmark) => {
      const { domain, excerpt, link, title, _id, type, created, ...rest } =
        bookmark;
      return { domain, excerpt, link, title, _id, type, created };
    });

    return groupBy(data, (bookmark: IBookmark) => {
      const dateISO = parseISO(bookmark.created);
      const week = format(dateISO, "I"); // ISO Week of Year (1-53)
      const month = format(dateISO, "M"); // Month (1-12)
      if (month === "1" && ["52", "53"].includes(week)) return 0;
      return week;
    });
  }
}
