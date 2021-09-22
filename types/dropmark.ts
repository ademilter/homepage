export type Dropmark = {
  id: number;
  collection_id: number;
  name: string;
  description: string | null;
  type: 'image';
  created_at: string;
  content: string;
  size: number;
  mime: 'image/png';
  url: string;
  short_url: string;
  thumbnails: {
    mini: string;
    small: string;
    cropped: string;
    uncropped: string;
    large: string;
  };
  metadata: {
    height: number;
    width: number;
  };
};
