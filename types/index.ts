import React from "react";

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

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

export type IApp = {
  Id: string;
  name: string;
  description: string;
  os: string[]; // ["iOS", "macOS"]
  free: boolean;
  icon: IAirtableImages;
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

export type IBookmark = {
  collectionId: number; // 15611214
  _id: number; // 254677638,
  title: string; // 'Figma to React – Convert Figma designs to React code',
  excerpt: string; // 'Convert Figma designs to React code (React Native and Next.js)',
  link: string; // 'https://figma-to-react.vercel.app/'
  domain: string; // 'figma-to-react.vercel.app',
  created: string; // '2021-03-28T01:37:53.050Z'
  tags: [string]; // [ 'history', 'frontend', 'figma', 'react' ],
  type: "link" | "article" | "video" | "document" | "audio"; // 'link',
  cover: string; // 'https://rdl.ink/render/https%3A%2F%2Ffigma-to-react.vercel.app%2F',
};
