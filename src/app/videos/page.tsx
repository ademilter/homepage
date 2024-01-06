import Container from "@/components/container";
import SubTitle from "@/components/subtitle";
import Videos from "@/lib/videos";
import VideoRow from "@/components/video-card";
import youtubeStats from "@/lib/youtube";
import MetricCard from "@/components/metric-card";
import { Metadata } from "next";
import ThankYou from "@/components/thank-you";

export const metadata: Metadata = {
  title: "Eğitimler",
  description: `Frontend ve Tasarım alanında ürettiğim eğitim videolarının tam listesi. 
  Youtube üzerinden izledikten sonra buradan işaretleyebilir ve düzenli olarak takip edebilirsiniz.`,
};

export const revalidate = 86400; // 60*60*24

export default async function VideosPage() {
  const stats = await youtubeStats();

  return (
    <>
      <Container>
        <h1 className="text-2xl">{metadata.description}</h1>

        <p className="mt-10">
          <ThankYou />
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <MetricCard
            href={"youtube"}
            data={Number(stats.subscriberCount).toLocaleString()}
          >
            Abone
          </MetricCard>
          <MetricCard
            href={"youtube"}
            data={Number(stats.viewCount).toLocaleString()}
          >
            İzlenme
          </MetricCard>
        </div>
      </Container>

      <Container className="mt-20">
        <div className="space-y-20">
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
