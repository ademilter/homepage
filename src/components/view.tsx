"use client";

import React, { useEffect, useState } from "react";
import { formatter } from "@/lib/helper";

export const ReportView: React.FC<{ slug: string; incr?: boolean }> = ({
  slug,
  incr = false,
}) => {
  const [value, setValue] = useState(0);

  async function getData() {
    const response = await fetch("/api/pageview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug, incr }),
    });
    const data = await response.json();
    setValue(data.view);
  }

  useEffect(() => {
    if (!slug) return;
    getData();
  }, [slug]);

  return formatter.format(value);
};
