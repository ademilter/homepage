import unsplash from "@/lib/unsplash";
import PageTransition from "@/components/page-transition";
import dynamic from "next/dynamic";
import MetricCard from "@/components/metric-card";
import Title from "@/components/title";
import Container from "@/components/container";
import { META } from "@/lib/helper";

const Photos = dynamic(() => import("@/components/photos"), {
  ssr: false,
});

function PhotosPage({ photos, stats }) {
  return (
    <PageTransition
      title="Fotoğraflar"
      description="Fotoğraf çekmek etrafımdaki şeyleri daha iyi görmemi sağlıyor. Çevrem
          hakkında farkındalığı, detayları görebilmemi ve doğru anı
          yakalayabilmeyi öğretiyor."
    >
      <Container>
        <Title>
          Fotoğraf çekmek etrafımdaki şeyleri daha iyi görmemi sağlıyor. Çevrem
          hakkında farkındalığı, detayları görebilmemi ve doğru anı
          yakalayabilmeyi öğretiyor.
        </Title>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <MetricCard href={META.social.unsplash} data={stats.views.total}>
            Unsplash Views
          </MetricCard>
          <MetricCard href={META.social.unsplash} data={stats.downloads.total}>
            Unsplash Downloads
          </MetricCard>
        </div>
      </Container>

      <Container size="large" className="mt-20">
        <Photos data={photos} />
      </Container>
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
    revalidate: 60 * 60 * 24, // 1 day
  };
}

export default PhotosPage;
