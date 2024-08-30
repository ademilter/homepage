export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export type IAirtableImages = {
  id: string;
  filename: string;
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
  id: string;
  createdTime: string;
  fields: {
    name: string;
    description: string;
    icon: IAirtableImages;
    url: string;
    free: boolean;
    os: string[];
    draft: boolean;
  };
};

export type IActivity = {
  id: string;
  title: string;
  url: string;
  note: string;
  image: IAirtableImages;
};

export type ITool = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    comment: string;
    images: IAirtableImages[];
    url: string;
    wtf: string;
    favorite: boolean;
    category: string;
    brand: string;
    draft: boolean;
    order: number;
  };
};

export type ILink = {
  _id: number; // 254677638,
  type: "link" | "article" | "video" | "document" | "audio"; // 'link',
  created: string; // '2021-03-28T01:37:53.050Z'
  title: string; // 'Figma to React – Convert Figma designs to React code',
  link: string; // 'https://figma-to-react.vercel.app/'
  excerpt: string; // 'Convert Figma designs to React code (React Native and Next.js)',
  domain: string; // 'figma-to-react.vercel.app',
  tags: string[]; // [ 'history', 'frontend', 'figma', 'react' ],
  cover: string; // 'https://rdl.ink/render/https%3A%2F%2Ffigma-to-react.vercel.app%2F',
  media: { link: string; type: string }[]; // [Array];
  // collectionId: number; // 15611214
  note: string; // "";
  // removed: boolean; // false;
  // lastUpdate: string; // "2022-11-22T19:21:12.043Z";
  // important: boolean; // false;
  // sort: number; // 475927149;
  // collection: [Object];
  // creatorRef: [Object];
  // user: [Object];
  // highlights: [];
};

export type ISupporter = {
  support_id: number;
  support_visibility: number;
  supporter_name: string;
  support_coffees: number;
  support_note: string;
  transaction_id: string;
  support_created_on: string;
  // support_updated_on: string;
  // transfer_id: number;
  // support_coffee_price: string;
  // support_email: string;
  // is_refunded: null;
  // support_currency: string;
  // support_note_pinned: string;
  // referer: null;
  // country: string;
  // payer_email: string;
  // payment_platform: string;
  // payer_name: string;
};
