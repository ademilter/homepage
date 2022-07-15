import PageTransition from "components/page-transition";
import PageTitle from "components/page-title";
import Tool from "components/tool-card";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
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

        <div className="mt-10 flex items-center rounded-full bg-zinc-100 p-1 dark:bg-zinc-800">
          {["all", ...categories].map((category) => {
            const isActive = category === selectedCategory;
            return (
              <button
                key={category}
                className="relative grow rounded-full bg-transparent py-1 px-4 capitalize"
                onClick={() => {
                  setSelectedCategory(category);
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="bg"
                    className="absolute left-0 top-0 h-full w-full rounded-full bg-white dark:bg-zinc-900 dark:text-zinc-100"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 50,
                      mass: 2,
                    }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="c-large mt-20">
        <div className="grid items-start gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
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
