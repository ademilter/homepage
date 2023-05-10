import { ILink } from "@/types";

type Result = {
  result: boolean;
  count: number;
  collectionId: number;
  items: ILink[];
};

export default class Raindrop {
  private readonly token: string = process.env.RAINDROP_CLIENT_SECRET!;
  private url = "https://api.raindrop.io";

  private normalizeData(data: ILink[]) {
    return data.map((bookmark) => {
      const { _id, type, created, title, link, excerpt, domain, tags, cover } =
        bookmark;
      return { _id, type, created, title, link, excerpt, domain, tags, cover };
    });
  }

  public async getBookmark({
    perPage = 50,
    page = 0,
    sort = "-created",
    search,
  }: {
    perPage?: number;
    page?: number;
    sort?: "-created" | "created";
    search?: string;
  }): Promise<ILink[]> {
    let url = new URL(`/rest/v1/raindrops/15611214`, this.url);

    url.searchParams.set("perpage", perPage.toString());
    url.searchParams.set("page", page.toString());
    url.searchParams.set("sort", sort);
    search && url.searchParams.set("search", search);

    const response = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      next: { revalidate: 7200 },
    });
    const data: Result = await response.json();

    if (data.items.length === perPage) {
      return data.items.concat(
        await this.getBookmark({
          page: page + 1,
          perPage,
          sort,
          search,
        })
      );
    } else {
      return this.normalizeData(data.items);
    }
  }
}
