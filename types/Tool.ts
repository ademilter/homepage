export type IAirtableImages = {
  id: string;
  filename: string; // "compare_airpods_pro__e9uzt0mzviem_large_2x.png"
  url: string;
  width: number;
  height: number;
  size: number;
  type: "image/png";
  thumbnails: {
    full: {
      url: string;
      width: number;
      height: number;
    };
    large: {
      url: string;
      width: number;
      height: number;
    };
    small: {
      url: string;
      width: number;
      height: number;
    };
  };
};

export type ITool = {
  Id: string; // "recFoyzP7v567KhqU"
  name: string; // "BeoPlay H9"
  brand: string; // "Bang&Olufsen"
  category: string[]; // ["workspace", "living"]
  rating: 1 | 2 | 3 | 4 | 5; // 4
  comment?: string; // lorem ipsum
  url?: string; // "https://www.bang-olufsen.com/en/us/headphones/beoplay-h9?variant=beoplay-h9-3-matte-black"
  wtf?: string; // "Kulaklık"
  images?: IAirtableImages;
};
