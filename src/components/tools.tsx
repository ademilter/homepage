"use client";

import Segmented from "@/components/segmented";
import { useEffect, useState } from "react";
import { ITool } from "@/types";
import Tool from "@/components/tool-card";
import { groupBy } from "lodash";

export default function Tools({ data }: { data: ITool[] }) {
  const [selectedTab, setSelectedTab] = useState<string>();

  const groupByCategory = groupBy(data, (item) => {
    return item.fields.category;
  });
  const categories = Object.keys(groupByCategory).filter(
    (category) => category !== "undefined",
  );

  useEffect(() => {
    if (selectedTab) return;
    setSelectedTab(categories[0]);
  }, [categories]);

  return (
    <>
      <Segmented
        fullWidth
        data={categories}
        onChange={setSelectedTab}
        selected={selectedTab}
        buttonProps={{
          className: "capitalize",
        }}
      />

      <div className="mt-6 grid">
        {data
          .filter((tool: ITool) => {
            return (
              tool.fields.category &&
              tool.fields.category.includes(selectedTab || "")
            );
          })
          .map((tool: ITool) => {
            return <Tool key={tool.id} tool={tool} />;
          })}
      </div>
    </>
  );
}
