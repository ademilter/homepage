"use client";

import React, { useEffect, useState } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
  const [value, setValue] = useState(0);

  async function getData() {
    const response = await fetch("/api/pageview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    });
    const data = await response.json();
    setValue(data.view);
  }

  useEffect(() => {
    if (!slug) return;
    getData();
  }, [slug]);

  return value;
};
