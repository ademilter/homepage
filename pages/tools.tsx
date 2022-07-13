import PageTransition from "components/page-transition";
import PageTitle from "components/page-title";
import Head from "next/head";
import { getTable } from "lib/airtables";
import { Tool } from "types/Tool";
import { useState } from "react";

const defaultFilter: string = "all";

export default function ToolsPage({ data }) {
  console.log(data);
  const [category, setCategory] = useState<string>(defaultFilter);

  const categories = [
    ...new Set(data.flatMap((tool: Tool) => tool.category) as string[]),
  ];

  return (
    <PageTransition>
      <Head>
        <title>Araçlar - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>
          Uzun süredir kullandığım ve memnun kaldığım uygulamaların listesi.
        </PageTitle>
        <div className="mt-4 flex items-center gap-2">
          {["all", ...categories].map((category) => {
            return (
              <button
                key={category}
                className="rounded border p-2"
                onClick={() => {
                  setCategory(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="c-large mt-20">
        <div className="grid items-end gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-10 lg:grid-cols-4">
          {data
            .filter((tool: Tool) => {
              if (category === "all") return true;
              return tool.category.includes(category);
            })
            .map((tool: Tool) => (
              <article
                key={tool.Id}
                className="rounded border border-zinc-100 p-4 dark:border-zinc-800"
              >
                <header>
                  <h5 className="opacity-50">{tool.brand}</h5>
                  <h3 className="font-semibold dark:text-white">{tool.name}</h3>
                </header>

                <div className="mt-4 rounded bg-zinc-100 p-2">
                  <span className="flex items-center gap-0.5">
                    <span>{tool.rating}</span>
                    <span className="opacity-50">/</span>
                    <span className="opacity-50">5</span>
                  </span>
                  <p>{tool.comment}</p>
                </div>
              </article>
            ))}
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
