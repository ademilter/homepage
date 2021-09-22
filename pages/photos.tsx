import unsplash from 'lib/unsplash';
import PageTransition from 'components/page-transition';
import dynamic from 'next/dynamic';
import SiteConfig from '../site.config';
import MetricCard from 'components/metric-card';
import PageTitle from 'components/page-title';
import Head from 'next/head';

const Photos = dynamic(() => import('components/photos'), {
  ssr: false,
});

function PhotosPage({ photos, stats }) {
  return (
    <PageTransition>
      <Head>
        <title>Photos - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>
          Fotoğraf çekmek etrafımdaki şeyleri daha iyi görmemi sağlıyor. Çevrem
          hakkında farkındalığı, detayları görebilmemi ve doğru anı
          yakalabilmeyi öğretiyor.
        </PageTitle>

        <div className="grid grid-cols-2 gap-10 mt-10">
          <MetricCard
            href={SiteConfig.social.unsplash}
            data={stats.views.total}
          >
            Unsplash Views
          </MetricCard>
          <MetricCard
            href={SiteConfig.social.unsplash}
            data={stats.downloads.total}
          >
            Unsplash Downloads
          </MetricCard>
        </div>
      </div>

      <div className="c-large mt-20">
        <Photos data={photos} />
      </div>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const photos = await unsplash.getPhotos();
  const stats = await unsplash.getStats();

  return {
    props: {
      photos,
      stats,
    },
    revalidate: 86400,
  };
}

export default PhotosPage;
