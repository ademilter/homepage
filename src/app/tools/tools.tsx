"use client";

import Segmented from "@/components/segmented";
import { useEffect, useState } from "react";
import ToolCard from "@/components/tool-card";
import { groupBy } from "lodash";
import { allTools, Tool } from "@content";
import Container from "@/components/container";

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
      <Container className="mt-8 sm:mt-10">
        <Segmented
          fullWidth
          data={categories}
          onChange={setSelectedTab}
          selected={selectedTab}
          buttonProps={{
            className: "capitalize",
          }}
        />
      </Container>

      <Container size="medium" className="mt-8 space-y-10 sm:mt-10">
        <div className="grid">
          {allTools
            .filter((tool: Tool) => {
              return tool.category && tool.category.includes(selectedTab || "");
            })
            .map((tool: Tool) => {
              return <ToolCard key={tool._meta.fileName} tool={tool} />;
            })}
        </div>
      </Container>
    </>
  );
}
