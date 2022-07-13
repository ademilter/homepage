import PageTransition from "components/page-transition";
import PageTitle from "components/page-title";
import Head from "next/head";
import { getTable } from "lib/airtables";
import { ITool, IAirtableImages } from "types/Tool";
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
          {data
            .filter((tool: ITool) => {
              if (selectedCategory === "all") return true;
              return tool.category.includes(selectedCategory);
            })
            .map((tool: ITool) => {
              const photo: IAirtableImages = tool.images && tool.images[0];

              return (
                <article
                  key={tool.Id}
                  className="rounded bg-zinc-100 p-4 dark:bg-white dark:bg-opacity-10"
                >
                  <div className="aspect-square overflow-hidden rounded bg-zinc-100">
                    {photo && (
                      <img
                        src={photo.thumbnails.large.url}
                        className="h-full w-full bg-white object-contain"
                        alt=""
                      />
                    )}
                  </div>

                  <header className="mt-6">
                    <h5 className="text-sm opacity-60">
                      {tool.brand ? tool.brand : "-"}
                    </h5>
                    <h3 className="font-semibold dark:text-white">
                      {tool.name}
                    </h3>
                  </header>

                  <div className="mt-6 rounded bg-white p-3 text-sm dark:bg-zinc-800">
                    <span className="flex items-center gap-0.5">
                      <span>{tool.rating}</span>
                      <span className="opacity-50">/</span>
                      <span className="opacity-50">5</span>
                    </span>

                    <p className="mt-1">{tool.comment}</p>
                  </div>
                </article>
              );
            })}
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
