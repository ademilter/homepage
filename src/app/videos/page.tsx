import Container from "@/components/container";
import SubTitle from "@/components/subtitle";
import Videos from "@/lib/videos";
import VideoRow from "@/components/video-card";
import youtubeStats from "@/lib/youtube";
import MetricCard from "@/components/metric-card";
import { Metadata } from "next";
import ThankYou from "@/components/thank-you";
import { formatter } from "@/lib/helper";
import { SOCIAL } from "@/lib/const";
import { fetchSupporter } from "@/app/bookmarks/action";

export const metadata: Metadata = {
  title: "Eğitimler",
  description: `Frontend ve Tasarım alanında ürettiğim eğitim videolarının tam listesi. 
  Youtube üzerinden izledikten sonra buradan işaretleyebilir ve düzenli olarak takip edebilirsiniz.`,
};

export const revalidate = 86400; // 60*60*24

export default async function VideosPage() {
  const stats = await youtubeStats();
  const supporter = await fetchSupporter();

  return (
    <>
      <Container>
        <h1 className="text-xl sm:text-2xl">{metadata.description}</h1>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
          <MetricCard
            href={SOCIAL.youtube}
            data={formatter.format(stats.subscriberCount)}
          >
            Abone
          </MetricCard>
          <MetricCard
            href={SOCIAL.youtube}
            data={formatter.format(stats.viewCount)}
          >
            İzlenme
          </MetricCard>
        </div>

        <ThankYou className="mt-6" data={supporter} />
      </Container>

      <Container className="mt-12 sm:mt-20">
        <div className="space-y-12 sm:space-y-20">
          {Object.keys(Videos).map((catKey) => {
            const category = Videos[catKey];
            return (
              <div key={catKey}>
                <SubTitle className="">{catKey}</SubTitle>

                <div className="mt-4">
                  {category.map((video) => {
                    return <VideoRow key={video.title} {...video} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
