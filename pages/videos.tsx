import PageTransition from "components/page-transition";
import { meta } from "../site.config";
import MetricCard from "components/metric-card";
import PageTitle from "components/page-title";
import Head from "next/head";
import dynamic from "next/dynamic";
import youtube from "lib/youtube";
import ms from "ms";
import gumroad from "../lib/gumroad";

const VideoRow = dynamic(() => import("components/video-row"), {
  ssr: false,
});

const videos = {
  "Frontend 101": [
    {
      title: "Frontend Geliştiricinin Yol Haritası",
      url: "https://www.youtube.com/watch?v=yUf0flw0ka0&t=1s",
      itemsCount: -1,
    },
    {
      title: "Sıfırdan CSS Eğitim",
      url: "https://www.youtube.com/playlist?list=PLadt0EaV4m3BX9JaZbKS9B8076bruv93Y",
      itemsCount: 14,
    },
    {
      title: "User Agent & Display",
      url: "https://www.youtube.com/watch?v=0G1Q7wRjuTA",
      itemsCount: -1,
    },
    {
      title: "CSS Flexbox",
      url: "https://www.youtube.com/watch?v=_s15i3MoAyE",
      itemsCount: -1,
    },
    {
      title: "Position ve Z-index",
      url: "https://www.youtube.com/watch?v=_FLV6X0druY",
      itemsCount: -1,
    },
  ],
  "Frontend 102": [
    {
      title: "Booking Sitesini Yeniden Kodluyoruz",
      url: "https://www.youtube.com/playlist?list=PLadt0EaV4m3Ae9mBaQNylUKUaFK38F4EB",
      itemsCount: 5,
    },
    {
      title: "Kendi Web Sitemizi Yapalım",
      tags: ["nextjs", "tailwindcss", "auth0", "redis", "mdx"],
      url: "https://www.youtube.com/playlist?list=PLadt0EaV4m3CegrrLThwhYrlcz5rGbI8B",
      itemsCount: 7,
    },
    {
      title: "Vue ile Instagram Klonu",
      tags: ["nextjs", "tailwindcss", "auth0", "redis", "mdx"],
      url: "https://www.youtube.com/playlist?list=PLadt0EaV4m3AvmC3HzZ0Y2-u_Nunhj8qN",
      itemsCount: 6,
    },
    {
      title: "React ile Twitter Klonu",
      tags: ["nextjs", "css module", "storybook", "twitter api", "svgr"],
      url: "https://www.youtube.com/playlist?list=PLadt0EaV4m3AOZPbybHx0h2aEmw5ibZGx",
      itemsCount: 13,
    },
    {
      title: "JAMStack Nedir?",
      tags: [""],
      url: "https://www.youtube.com/playlist?list=PLadt0EaV4m3DlLQFigc2DBSi8VRi1EL2m",
      itemsCount: 2,
    },
    {
      title: "Vue Eklentisi Yazalım",
      tags: [""],
      url: "https://www.youtube.com/watch?v=fhu7pHj_Y3c&t=1156s",
      itemsCount: -1,
    },
    {
      title: "React Native ile Sözlük Uygulaması",
      tags: [""],
      url: "https://www.youtube.com/playlist?list=PLadt0EaV4m3CWiofBOml0r95OmhiM6I6v",
      itemsCount: 16,
    },
  ],
  "Frontend Araçları": [
    {
      title: "Tailwind CSS",
      url: "https://www.youtube.com/watch?v=YILRsDge4DU",
      itemsCount: -1,
    },
    {
      title: "Tailwind: Temel Kavramlar",
      url: "https://www.youtube.com/watch?v=zaayoppi8mo",
      itemsCount: -1,
    },
    {
      title: "Gulp",
      url: "https://www.youtube.com/watch?v=STxO9XQJ_lg",
      itemsCount: -1,
    },
    {
      title: "Storybook",
      url: "https://www.youtube.com/watch?v=BvxSX8BF_W0",
      itemsCount: -1,
    },
    {
      title: "PostCSS",
      url: "https://www.youtube.com/watch?v=GlSOsgfNWxs",
      itemsCount: -1,
    },
    {
      title: "Parcel",
      url: "https://www.youtube.com/watch?v=D2dDbhWNBII",
      itemsCount: -1,
    },
  ],
  "Frontend İpuçları": [
    {
      title: "İki Kutunun Yanyana Gelme Hikayesi",
      url: "https://www.youtube.com/watch?v=OaEtW_CSaPk",
      itemsCount: -1,
    },
    {
      title: "Details/Summary ile Açılır Kapanır Menüler",
      url: "https://www.youtube.com/watch?v=ZoeXTsTw9bM",
      itemsCount: -1,
    },
    {
      title: "Aspect-Ratio Kapsayıcı",
      url: "https://www.youtube.com/watch?v=UyLl_0R6AYE",
      itemsCount: -1,
    },
    {
      title: "Sayfa İçi Linkler İçin Boşluk (scroll-margin-top)",
      url: "https://www.youtube.com/watch?v=0wTb52nXowc",
      itemsCount: -1,
    },
  ],
  Design: [
    {
      title: "Sketch Öğreniyorum",
      url: "https://www.youtube.com/playlist?list=PLadt0EaV4m3C9SJKy_649nRtBBFDhN8Nt",
      itemsCount: 3,
    },
    {
      title: "Figma Eğitimi",
      url: "https://www.youtube.com/playlist?list=PLadt0EaV4m3BvRYFQxa4w9BWKfrzqC_p6",
      itemsCount: 12,
    },
    {
      title: "Webflow ile Site Yapıyoruz",
      url: "https://www.youtube.com/playlist?list=PLadt0EaV4m3BvRYFQxa4w9BWKfrzqC_p6",
      itemsCount: 3,
    },
  ],
  "Katıldığım Konferanslar": [
    {
      title: "30 Dakikada CSS",
      url: "https://www.youtube.com/watch?v=u2r7AzU-vJ8",
      itemsCount: -1,
    },
    {
      title: "CSS'in Gücü Adına",
      url: "https://www.youtube.com/watch?v=dY3glcudCew",
      itemsCount: -1,
    },
    {
      title: "Tasarıma Üflenen Kutsal Ruh: Front-End",
      url: "https://www.youtube.com/watch?v=Rl-ez7ZSJ4Q",
      itemsCount: -1,
    },
  ],
};

function VideosPage({ youtubeStats, gumroadStats }) {
  return (
    <PageTransition>
      <Head>
        <title>Videos - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>
          Frontend ve Tasarım alanında ürettiğim eğitim videolarının tam
          listesi. Youtube üzerinden izledikten sonra buradan işaretleyebilir ve
          düzenli olarak takip edebilirsiniz.
        </PageTitle>

        <div className="mt-10">
          <a
            className="gumroad-button"
            data-gumroad-single-product="true"
            href="https://ademilter.gumroad.com/l/icerikler-icin-tesekkurler"
          >
            Teşekkürler -
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          <MetricCard
            href={meta.social.youtube}
            data={youtubeStats.subscriberCount}
          >
            Subscribers
          </MetricCard>
          <MetricCard href={meta.social.youtube} data={youtubeStats.viewCount}>
            Views
          </MetricCard>
          <MetricCard data={gumroadStats.sales_usd_cents / 100} prefix="$">
            Thanks ({gumroadStats.sales_count})
          </MetricCard>
        </div>
      </div>

      <div className="c-small mt-20">
        <div className="space-y-10">
          {Object.keys(videos).map((catKey) => {
            const category = videos[catKey];
            return (
              <div key={catKey}>
                <header className="py-4">
                  <h2 className="text-2xl text-gray-400 dark:text-gray-500">
                    {catKey}
                  </h2>
                </header>
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  {category.map((video) => {
                    return <VideoRow key={video.title} {...video} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const youtubeStats = await youtube();
  const gumroadStats = await gumroad();

  return {
    props: {
      youtubeStats,
      gumroadStats,
    },
    revalidate: ms("1d") / 1000,
  };
}

export default VideosPage;
