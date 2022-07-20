import PageTransition from "components/page-transition";
import Tool from "components/tool-card";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { getTable } from "lib/airtables";
import type { ITool } from "types/index";
import { useState } from "react";
import Text from "components/text";
import Segmented from "components/segmented";

export default function ToolsPage({ data }) {
  const defaultFilter: string = "all";
  const [selectedTab, setSelectedTab] = useState<string>(defaultFilter);

  const categories = [
    ...new Set(data.flatMap((tool: ITool) => tool.category) as string[]),
  ];

  return (
    <PageTransition>
      <Head>
        <title>Araçlar - Adem ilter</title>
      </Head>

      <div className="c-small">
        <Text as="h2" size="pageTitle">
          Gün içinde ve çalışma hayatında sürekli kullandığım araçların listesi.
          Bana yaşattıkları deneyim üzerinden puan ve yorumumu ekledim.
        </Text>

        <Segmented
          className="mt-10"
          fullWidth
          data={[defaultFilter, ...categories]}
          onChange={setSelectedTab}
          selected={selectedTab}
          buttonProps={{
            className: "capitalize",
          }}
        />
      </div>

      <div className="c-large mt-20">
        <div className="grid items-start gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          <AnimatePresence>
            {data
              .filter((tool: ITool) => {
                if (selectedTab === defaultFilter) return true;
                return tool.category.includes(selectedTab);
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
