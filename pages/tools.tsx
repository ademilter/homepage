import PageTransition from "components/page-transition";
import PageTitle from "components/page-title";
import Head from "next/head";
import { getTable } from "lib/airtables";
import { Tool } from "types/Tool";

export default function ToolsPage({ data }) {
  console.log(data);
  return (
    <PageTransition>
      <Head>
        <title>Araçlar - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>
          Uzun süredir kullandığım ve memnun kaldığım uygulamaların listesi.
        </PageTitle>
      </div>

      <div className="c-large mt-20">
        <div className="grid items-end gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-10 lg:grid-cols-4">
          {data.map((tool: Tool) => (
            <div
              key={tool.Id}
              className="rounded border border-zinc-100 p-4 dark:border-zinc-800"
            >
              <h5 className="opacity-50">{tool.brand}</h5>
              <h4 className="font-semibold text-white">{tool.name}</h4>
              {/*<div>{tool.wtf}</div>*/}
              <div className="flex items-center gap-0.5">
                <span>{tool.rating}</span>
                <span className="opacity-50">/</span>
                <span className="opacity-50">5</span>
              </div>
            </div>
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
