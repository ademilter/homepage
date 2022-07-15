import { IAirtableImages } from "./Tool";

export type IApp = {
  Id: string;
  name: string;
  description: string;
  os: string[]; // ["iOS", "macOS"]
  free: boolean;
  icon: IAirtableImages;
};
