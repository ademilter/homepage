import "./page.css";

import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet",
  description: "We manage everything for you.",
};

export default function MeetLayout({ children }: { children: ReactNode }) {
  return children;
}
