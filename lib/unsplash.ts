class Unsplash {
  private base_url: string;
  private client_id: string;

  constructor() {
    this.base_url = "https://api.unsplash.com/users/ademilter";
    this.client_id = `client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
  }

  async getData(url) {
    const res = await fetch(url, {
      method: "GET",
    });
    return await res.json();
  }

  getStats() {
    const url = [this.base_url, "/statistics?", this.client_id].join("");
    return this.getData(url);
  }

  getPhotos(per_page = 50) {
    const url = [
      this.base_url,
      `/photos?per_page=${per_page}&`,
      this.client_id,
    ].join("");
    return this.getData(url);
  }
}

export default new Unsplash();
