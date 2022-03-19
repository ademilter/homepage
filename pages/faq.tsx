import PageTransition from "components/page-transition";
import PageTitle from "components/page-title";
import Head from "next/head";
import type { Faq } from "types/Faq";
import github from "lib/github";

function AmaPage({ discussions }: { discussions: Faq[] }) {
  return (
    <PageTransition>
      <Head>
        <title>FAQ - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>asd</PageTitle>
      </div>

      <div className="c-small mt-20">
        {discussions.map(({ cursor, node }: Faq) => {
          return (
            <div key={node.id}>
              <div dangerouslySetInnerHTML={{ __html: node.bodyHTML }} />
              <div dangerouslySetInnerHTML={{ __html: node.answer.bodyHTML }} />
            </div>
          );
        })}
      </div>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const discussions = await github();

  return {
    props: {
      discussions,
    },
  };
}

export default AmaPage;
