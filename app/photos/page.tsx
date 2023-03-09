import unsplash from "@/lib/unsplash";
import MetricCard from "@/components/metric-card";
import Title from "@/components/title";
import Container from "@/components/container";
import Photos from "@/components/photos";
import { SOCIAL } from "@/lib/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fotoğraflar",
  description:
    "Fotoğraf çekmek etrafımdaki şeyleri daha iyi görmemi sağlıyor. Çevrem hakkında farkındalığı, detayları görebilmemi ve doğru anı yakalayabilmeyi öğretiyor.",
};

export const revalidate = 86400; // 60*60*24

export default async function PhotosPage() {
  const photos = await unsplash.getPhotos();
  const stats = await unsplash.getStats();

  return (
    <>
      <Container>
        <Title>{metadata.description}</Title>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <MetricCard href={SOCIAL.unsplash} data={stats.views.total}>
            Unsplash Views
          </MetricCard>
          <MetricCard href={SOCIAL.unsplash} data={stats.downloads.total}>
            Unsplash Downloads
          </MetricCard>
        </div>
      </Container>

      <Container size="large" className="mt-20">
        <Photos data={photos} />
      </Container>
    </>
  );
}
