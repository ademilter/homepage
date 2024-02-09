class Unsplash {
  private readonly BASE_URL: string =
    "https://api.unsplash.com/users/ademilter";
  private readonly CLIENT_ID: string = `client_id=${process.env.UNSPLASH_ACCESS_KEY}`;

  async getData(url: string) {
    const res = await fetch(url, { method: "GET" });
    return await res.json();
  }

  getStats() {
    const url = this.buildUrl("statistics");
    return this.getData(url);
  }

  getPhotos(numPhotos = 50) {
    const url = this.buildUrl("photos", `per_page=${numPhotos}&`);
    return this.getData(url);
  }

  private buildUrl(path: string, parameters?: string): string {
    return `${this.BASE_URL}/${path}?${parameters ?? ""}${this.CLIENT_ID}`;
  }
}

export default new Unsplash();
