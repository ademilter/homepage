import NextImage from "next/image";
import PageTransition from "components/page-transition";
import Social from "components/social";
import Text from "components/text";
import A from "components/a";
import dynamic from "next/dynamic";
import unsplash from "lib/unsplash";
import ms from "ms";

const Photos = dynamic(() => import("components/photos"), {
  ssr: false,
});

export default function HomePage({ photos }) {
  return (
    <PageTransition>
      <div className="c-small">
        <div className="space-y-6">
          <Text as="h1" size="pageTitle">
            Merhaba, Ben Adem 👋
            <br />
            İstanbul'da yaşayan bir Tasarımcıyım.
          </Text>

          <Text as="p" size="large" dim={1}>
            Şu anda{" "}
            <A
              className="underline decoration-zinc-500"
              href="https://upstash.com"
            >
              Upstash
            </A>{" "}
            şirketinde serverless ürünler inşa ediyorum.
          </Text>

          <Text as="p" size="large" dim={1}>
            Fotoğraf çekmeyi, kaykay sürmeyi ve doğa yürüyüşlerini çok
            seviyorum. Akıllıca tasarlanmış ürünler kullanmaktan keyif alıyorum.
            Son zamanlarda ahşap ürünler yapımına ilgim var 🪑
          </Text>

          <Text as="p" size="large" dim={1}>
            Youtube kanalımda tasarım, frontend ve tecrübelerimi paylaştığım
            içerikler üretiyorum.
          </Text>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </div>

      <div className="c-large mt-20">
        <NextImage
          src="/photos/we.jpg"
          alt="Adem ilter ve çocukları"
          quality={100}
          width={3609}
          height={2404}
          layout="responsive"
          className="rounded-lg saturate-0 transition-all duration-700 hover:saturate-100"
        />
      </div>
    </PageTransition>
  );
}
