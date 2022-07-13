import PageTransition from "components/page-transition";
import PageTitle from "components/page-title";
import Tool from "components/tool-card";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { getTable } from "lib/airtables";
import { ITool } from "types/Tool";
import { useState } from "react";
import cx from "classnames";

export default function ToolsPage({ data }) {
  const defaultFilter: string = "all";
  const [selectedCategory, setSelectedCategory] =
    useState<string>(defaultFilter);

  const categories = [
    ...new Set(data.flatMap((tool: ITool) => tool.category) as string[]),
  ];

  return (
    <PageTransition>
      <Head>
        <title>Araçlar - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>
          Gün içinde ve çalışma hayatında sürekli kullandığım araçların listesi.
          Bana yaşattıkları deneyim üzerinden puan ve yorumumu ekledim.
        </PageTitle>

        <div className="b mt-10 inline-flex items-center rounded-full bg-zinc-100 p-1 dark:bg-zinc-800">
          {["all", ...categories].map((category) => {
            return (
              <button
                key={category}
                className={cx(
                  "rounded-full py-1 px-4 capitalize transition",
                  category === selectedCategory
                    ? "bg-white dark:bg-zinc-900 dark:text-zinc-100 "
                    : "dark:hover:bg-zinc-800"
                )}
                onClick={() => {
                  setSelectedCategory(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="c-large mt-20">
        <div className="grid items-start gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-10 lg:grid-cols-4">
          <AnimatePresence>
            {data
              .filter((tool: ITool) => {
                if (selectedCategory === "all") return true;
                return tool.category.includes(selectedCategory);
              })
              .map((tool: ITool) => {
                return <Tool key={tool.Id} tool={tool} />;
              })}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const data = await getTable("Tools");

  return {
    props: {
      data,
    },
  };
}
