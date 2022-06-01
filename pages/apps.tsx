import PageTransition from "components/page-transition";
import AppCard from "components/app-card";
import PageTitle from "components/page-title";
import Head from "next/head";
import { getTable } from "lib/airtables";
import { useState } from "react";
import cx from "classnames";

enum OS_TYPES {
  IOS = "ios",
  MACOS = "macos",
}

const OS_LABEL = {
  [OS_TYPES.IOS]: "iOS",
  [OS_TYPES.MACOS]: "macOS",
};

function PhotosPage({ data }) {
  const [os, setOs] = useState(OS_TYPES.IOS);

  return (
    <PageTransition>
      <Head>
        <title>Uygulamalar - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>
          Uzun süredir kullandığım ve memnun kaldığım uygulamaların listesi.
        </PageTitle>
      </div>

      <div className="c-small mt-20">
        <div className="flex items-center overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800">
          {Object.keys(OS_TYPES).map((key) => {
            const osType = OS_TYPES[key];
            const isActive = osType === os;
            return (
              <div
                className={cx(
                  "flex h-10 grow items-center justify-center",
                  isActive
                    ? "bg-white text-zinc-50 dark:bg-zinc-600"
                    : "bg-zinc-200 dark:bg-zinc-800"
                )}
                key={osType}
                onClick={() => setOs(osType)}
              >
                {OS_LABEL[osType]}
                {isActive && " ✓"}
              </div>
            );
          })}
        </div>

        <div className="mt-10 divide-y divide-zinc-100 dark:divide-zinc-800">
          {data
            .filter((item) => item.os.includes(os))
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

export default PhotosPage;
