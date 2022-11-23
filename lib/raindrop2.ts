import { IBookmark } from "@/types/index";

type InitData = { token?: string };

type Result = {
  result: boolean;
  count: number;
  collectionId: number;
  items: Link[];
};

// https://stackoverflow.com/a/39495173
type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;
type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type Link = {
  collectionId: number; // 15611214
  _id: number; // 254677638,
  title: string; // 'Figma to React – Convert Figma designs to React code',
  excerpt: string; // 'Convert Figma designs to React code (React Native and Next.js)',
  link: string; // 'https://figma-to-react.vercel.app/'
  domain: string; // 'figma-to-react.vercel.app',
  created: string; // '2021-03-28T01:37:53.050Z'
  tags: string[]; // [ 'history', 'frontend', 'figma', 'react' ],
  type: "link" | "article" | "video" | "document" | "audio"; // 'link',
  cover: string; // 'https://rdl.ink/render/https%3A%2F%2Ffigma-to-react.vercel.app%2F',
  note: string; // "";
  removed: boolean; // false;
  lastUpdate: string; // "2022-11-22T19:21:12.043Z";
  important: boolean; // false;
  sort: number; // 475927149;
  // collection: [Object];
  // creatorRef: [Object];
  // user: [Object];
  // media: [Array];
  // highlights: [];
};

export default class Raindrop2 {
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

  // https://api.raindrop.io/rest/v1/raindrops/{collectionId}
  public async multipleRaindrops({
    id,
    perPage = 50,
    page = 0,
    sort = "-created",
    search,
  }: {
    id: number;
    perPage?: IntRange<0, 51>;
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
  }): Promise<Link[]> {
    let url = new URL(`/rest/v1/raindrops/${id}`, this.url);
    this.mergeParams(url, {
      perpage: perPage?.toString(),
      page: page?.toString(),
      search,
      sort,
    });

    console.log(url.toString());

    const response = await this.fetch({ url });
    const data: Result = await response.json();

    if (data.items.length === perPage) {
      return data.items.concat(
        await this.multipleRaindrops({
          id,
          page: page + 1,
          perPage,
          sort,
          search,
        })
      );
    } else {
      return data.items;
    }
  }
}

// https://api.raindrop.io/rest/v1/collections
// https://api.raindrop.io/rest/v1/collection/{id}
// https://api.raindrop.io/rest/v1/user/stats
// https://api.raindrop.io/rest/v1/raindrop/{id}
// https://api.raindrop.io/rest/v1/tags/{collectionId}
// https://api.raindrop.io/rest/v1/raindrops/{collectionId}/filters
