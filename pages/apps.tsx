import PageTransition from "components/page-transition";
import AppCard from "components/app-card";
import PageTitle from "components/page-title";
import Head from "next/head";
import { getTable } from "lib/airtables";
import { useState } from "react";
import cx from "classnames";
import { motion } from "framer-motion";

enum OS_TYPES {
  IOS = "ios",
  MACOS = "macos",
}

const OS_LABEL = {
  [OS_TYPES.IOS]: "iOS",
  [OS_TYPES.MACOS]: "macOS",
};

export default function AppsPage({ data }) {
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

        <div className="mt-10 flex items-center rounded-full bg-zinc-100 p-1 dark:bg-zinc-800">
          {Object.keys(OS_TYPES).map((key) => {
            const osType = OS_TYPES[key];
            const isActive = osType === os;
            return (
              <button
                key={osType}
                onClick={() => setOs(osType)}
                className="relative grow rounded-full bg-transparent py-1 px-4"
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
                <span className="relative z-10">{OS_LABEL[osType]}</span>
              </button>
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
