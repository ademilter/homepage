import PageTransition from "@/components/page-transition";
import AppCard from "@/components/app-card";
import Head from "next/head";
import { getTable } from "@/lib/airtables";
import { useState } from "react";
import Segmented from "@/components/segmented";
import type { IApp } from "@/types/index";
import Container from "@/components/container";
import Title from "@/components/title";

export default function AppsPage({ data }) {
  const [selectedTab, setSelectedTab] = useState("iOS");

  const os = [...new Set(data.flatMap((tool: IApp) => tool.os) as string[])];

  return (
    <PageTransition>
      <Head>
        <title>Uygulamalar - Adem ilter</title>
      </Head>

      <Container>
        <Title>
          Uzun süredir kullandığım ve memnun kaldığım uygulamaların listesi.
        </Title>

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
      </Container>
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
