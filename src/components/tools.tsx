"use client";

import Segmented from "@/components/segmented";
import { useState, useEffect } from "react";
import { ITool } from "@/types";
import Tool from "@/components/tool-card";
import { AnimatePresence } from "framer-motion";
import Container from "@/components/container";
import { uniq } from "lodash";

export default function Tools({ data }: { data: ITool[] }) {
  const [selectedTab, setSelectedTab] = useState<string>();

  const categories = uniq(
    data.flatMap((tool: ITool) => tool.fields.category) as string[],
  );

  useEffect(() => {
    if (selectedTab) return;
    setSelectedTab(categories[0]);
  }, [categories]);

  return (
    <>
      <Container className="mt-10">
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

      <Container size="large" className="mt-20">
        <div className="grid items-start gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          <AnimatePresence>
            {data
              .filter((tool: ITool) => {
                return tool.fields.category.includes(selectedTab || "");
              })
              .map((tool: ITool) => {
                return <Tool key={tool.id} tool={tool} />;
              })}
          </AnimatePresence>
        </div>
      </Container>
    </>
  );
}
