import { ILink } from "@/types";

type Result = {
  result: boolean;
  count: number;
  collectionId: number;
  items: ILink[];
};

type LinkRequest = {
  perPage?: number;
  page?: number;
  sort?: "-created" | "created";
  search?: string;
};

export default class Raindrop {
  private readonly TOKEN: string = process.env.RAINDROP_CLIENT_SECRET!;
  private URL = "https://api.raindrop.io";

  public async getBookmark(linkRequest: LinkRequest): Promise<ILink[]> {
    let url = this.buildUrlWithParams(linkRequest);
    const response = await this.getHttpDataFromUrl(url);
    const data: Result = await response.json();

    if (data.items.length === linkRequest.perPage) {
      linkRequest.page && linkRequest.page++;
      return data.items.concat(await this.getBookmark(linkRequest));
    } else {
      return this.normalizeData(data.items);
    }
  }

  private getHttpDataFromUrl(url: URL) {
    return fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.TOKEN}`,
      },
      next: { revalidate: 3600 },
    });
  }

  private buildUrlWithParams({
    perPage = 50,
    page = 0,
    sort = "-created",
    search,
  }: LinkRequest): URL {
    let url = new URL(`/rest/v1/raindrops/15611214`, this.URL);

    url.searchParams.set("perpage", perPage.toString());
    url.searchParams.set("page", page.toString());
    url.searchParams.set("sort", sort);

    if (search) {
      url.searchParams.set("search", search);
    }

    return url;
  }

  private normalizeData(data: ILink[]) {
    return data.map((bookmark) => {
      const {
        _id,
        type,
        created,
        media,
        title,
        link,
        excerpt,
        domain,
        note,
        tags,
        cover,
      } = bookmark;
      return {
        _id,
        type,
        created,
        media,
        title,
        link,
        excerpt,
        domain,
        note,
        tags,
        cover,
      };
    });
  }
}
