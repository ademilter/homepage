"use client";

import { Fragment } from "react";

export default function BookmarkFooter() {
  return (
    <p className="border-t border-dashed border-zinc-200 pt-4">
      Önceki yıllara ait listeler; <br />
      {["2021", "2022", "2023", "2024"].reverse().map((year) => (
        <Fragment key={year}>
          <a href={`/bookmarks/${year}`} className="font-semibold">
            {year}
          </a>
          {", "}
        </Fragment>
      ))}
    </p>
  );
}
