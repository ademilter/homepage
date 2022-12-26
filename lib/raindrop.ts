import { ILink } from "@/types/index";

type InitData = { token?: string };

type Result = {
  result: boolean;
  count: number;
  collectionId: number;
  items: ILink[];
};

export default class Raindrop {
  private readonly token: string = process.env.RAINDROP_ACCESS_TOKEN;
  private url = "https://api.raindrop.io";

  constructor(initData?: InitData) {
    this.token = initData?.token;
  }

  async fetch({
    url,
    options = {},
  }: {
    url: URL;
    options?: RequestInit;
  }): Promise<Response> {
    return fetch(url, {
      method: "GET",
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
        ...options?.headers,
      },
    });
  }

  private mergeParams(url, obj: Record<string, string>) {
    return Object.keys(obj)
      .filter((key) => obj[key] !== undefined)
      .forEach((key) => {
        url.searchParams.append(key, obj[key]);
      });
  }

  private normalizeData(data: ILink[]) {
    return data.map((bookmark) => {
      const { _id, type, created, title, link, excerpt, domain, tags, cover } =
        bookmark;
      return { _id, type, created, title, link, excerpt, domain, tags, cover };
    });
  }

  // https://api.raindrop.io/rest/v1/raindrops/{collectionId}
  public async multipleRaindrops({
    id,
    perPage = 50,
    page = 0,
    sort = "-created",
    search,
    allData = false,
  }: {
    id: number;
    perPage?: number;
    page?: number;
    sort?:
      | "-created"
      | "created"
      | "-sort"
      | "-title"
      | "title"
      | "-domain"
      | "domain";
    search?: string;
    allData?: boolean;
  }): Promise<ILink[]> {
    let url = new URL(`/rest/v1/raindrops/${id}`, this.url);
    this.mergeParams(url, {
      perpage: perPage?.toString(),
      page: page?.toString(),
      search,
      sort,
    });

    const response = await this.fetch({ url });
    const data: Result = await response.json();

    if (!allData) return this.normalizeData(data.items);

    if (data.items.length === perPage) {
      return data.items.concat(
        await this.multipleRaindrops({
          id,
          page: page + 1,
          perPage,
          sort,
          search,
          allData,
        })
      );
    } else {
      return this.normalizeData(data.items);
    }
  }
}

// https://api.raindrop.io/rest/v1/collections
// https://api.raindrop.io/rest/v1/collection/{id}
// https://api.raindrop.io/rest/v1/user/stats
// https://api.raindrop.io/rest/v1/raindrop/{id}
// https://api.raindrop.io/rest/v1/tags/{collectionId}
// https://api.raindrop.io/rest/v1/raindrops/{collectionId}/filters
