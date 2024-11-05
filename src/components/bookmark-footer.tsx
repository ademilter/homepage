"use client";

import { Fragment } from "react";

export default function BookmarkFooter() {
  return (
    <p>
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
