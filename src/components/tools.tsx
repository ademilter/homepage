"use client";

import Segmented from "@/components/segmented";
import { useEffect, useState } from "react";
import Tool1 from "@/components/tool-card";
import { groupBy } from "lodash";
import { allTools, Tool } from "@content";

export default function Tools() {
  const [selectedTab, setSelectedTab] = useState<string>();

  const groupByCategory = groupBy(allTools, (o) => {
    return o.category;
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
        {allTools
          .filter((tool: Tool) => {
            return tool.category && tool.category.includes(selectedTab || "");
          })
          .map((tool: Tool) => {
            return <Tool1 key={tool._meta.fileName} tool={tool} />;
          })}
      </div>
    </>
  );
}
