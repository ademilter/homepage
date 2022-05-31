import PageTransition from "components/page-transition";
import AppCard from "components/app-card";
import PageTitle from "components/page-title";
import Head from "next/head";
import { getTable } from "lib/airtables";

function PhotosPage({ data }) {
  console.log(data);

  return (
    <PageTransition>
      <Head>
        <title>Uygulamalar - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>Uygulamalar</PageTitle>
      </div>

      <div className="c-small mt-20">
        <div className="mt-6 divide-y divide-zinc-100 dark:divide-zinc-800">
          {data.map((item) => (
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
