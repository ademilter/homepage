import PageTransition from "components/page-transition";
import PageTitle from "components/page-title";
import FaqCard from "components/faq-card";
import Head from "next/head";
import type { Issue } from "types/GithubIssue";
import github from "lib/github";

function FaqPage({ issues }: { issues: Issue[] }) {
  return (
    <PageTransition>
      <Head>
        <title>FAQ - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>asd</PageTitle>
      </div>

      <div className="c-small mt-20">
        {issues.map((issue) => (
          <FaqCard key={issue.id} {...issue} />
        ))}
      </div>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const issues = await github();

  return {
    props: {
      issues,
    },
  };
}

export default FaqPage;
