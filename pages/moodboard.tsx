import PageTransition from 'components/page-transition';
import PageTitle from 'components/page-title';
import { GithubContent } from 'types/GithubContent';
import Head from 'next/head';

function MoodboardPage({ items }) {
  return (
    <PageTransition>
      <Head>
        <title>Moodboard - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>
          İyi tasarlanmış ürünleri incelemekten aşırı keyif alırım. Bu tür
          ürünlerde gördüğüm küçük ama tatlı detayların ekran görüntülerini
          toplayarak ilham olabilecek bir koleksiyon oluşturuyorum.
        </PageTitle>
      </div>

      <div className="c-large mt-20">
        <div className="grid sm:grid-cols-2 gap-8">
          {items.map((item: GithubContent) => {
            return (
              <div key={item.sha} className="mb-8">
                <img src={item.download_url} />
              </div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'https://api.github.com/repos/ademilter/homepage/contents/content/moodboard',
    {
      method: 'get',
      headers: {
        Authorization: 'token ' + process.env.GITHUB_ACCESS_KEY,
      },
    }
  );
  const items = await response.json();

  return {
    props: {
      items,
    },
    revalidate: 7200,
  };
}

export default MoodboardPage;
