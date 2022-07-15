import PageTransition from "components/page-transition";
import AppCard from "components/app-card";
import Text from "components/text";
import Head from "next/head";
import { getTable } from "lib/airtables";
import { useState } from "react";
import Segmented from "components/segmented";
import { IApp } from "../types/App";

export default function AppsPage({ data }) {
  const [selectedTab, setSelectedTab] = useState("iOS");

  const os = [...new Set(data.flatMap((tool: IApp) => tool.os) as string[])];

  return (
    <PageTransition>
      <Head>
        <title>Uygulamalar - Adem ilter</title>
      </Head>

      <div className="c-small">
        <Text as="h2" size="pageTitle">
          Uzun süredir kullandığım ve memnun kaldığım uygulamaların listesi.
        </Text>

        <Segmented
          className="mt-10"
          fullWidth
          data={os}
          onChange={setSelectedTab}
          selected={selectedTab}
        />

        <div className="mt-10 divide-y divide-zinc-100 dark:divide-zinc-800">
          {data
            .filter((item) => item.os.includes(selectedTab))
            .map((item) => (
              <AppCard key={item.Id} {...item} />
            ))}
        </div>
      </div>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const data = await getTable("Apps");

  return {
    props: {
      data,
    },
  };
}
