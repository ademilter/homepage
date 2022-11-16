import BaseLink from "@/components/link";
import Container from "@/components/container";
import Title from "@/components/title";
import SubTitle from "@/components/subtitle";
import Videos from "@/data/videos";
import VideoRow from "@/components/video-card";
import youtube from "@/lib/youtube";
import MetricCard from "@/components/metric-card";

export const revalidate = 86400; // 60*60*24 = 86400

export default async function VideosPage() {
  const data = await youtube();

  return (
    <>
      <Container>
        <Title>
          Frontend ve Tasarım alanında ürettiğim eğitim videolarının tam
          listesi. Youtube üzerinden izledikten sonra buradan işaretleyebilir ve
          düzenli olarak takip edebilirsiniz.
        </Title>

        <p className="mt-10">
          <BaseLink
            href="https://www.buymeacoffee.com/ademilter"
            className="flex items-center rounded-lg bg-indigo-50 py-5 px-6
            text-indigo-900 transition-colors
      hover:bg-indigo-100 hover:no-underline
      dark:bg-indigo-900 dark:text-indigo-100
      dark:hover:bg-indigo-800 dark:hover:text-indigo-50"
          >
            Ücretsiz olarak yayınladığım eğitimler için teşekkür etmek istersen
            kahve ısmarlayabilirsin 🙏
          </BaseLink>
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <MetricCard href={"youtube"} data={data.subscriberCount}>
            Youtube Abone
          </MetricCard>
          <MetricCard href={"youtube"} data={data.viewCount}>
            Youtube Görüntüleme
          </MetricCard>
        </div>
      </Container>

      <Container className="mt-20">
        <div className="space-y-10">
          {Object.keys(Videos).map((catKey) => {
            const category = Videos[catKey];
            return (
              <div key={catKey}>
                <SubTitle className="py-4">{catKey}</SubTitle>

                <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
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
