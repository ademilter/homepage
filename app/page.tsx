import NextImage from "next/image";
import Social from "@/components/social";
import { StyleLink } from "@/components/link";
import Title from "@/components/title";
import Container from "@/components/container";

export default function Index() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <Title>
            <b className="font-semibold">Merhaba, Ben Adem 👋</b>
            <br />
            İstanbul'da yaşayan bir Tasarımcıyım.
          </Title>

          <p className="text-xl">
            Şu anda <StyleLink href="https://upstash.com">Upstash</StyleLink>{" "}
            şirketinde serverless ürünler inşa ediyorum.
          </p>

          <p className="text-xl">
            Fotoğraf çekmeyi, kaykay sürmeyi ve doğa yürüyüşlerini çok
            seviyorum. Akıllıca tasarlanmış ürünler kullanmaktan keyif alıyorum.
            Son zamanlarda ahşap ürünler yapımına ilgim var 🪑
          </p>

          <p className="text-xl">
            Youtube kanalımda tasarım, frontend ve tecrübelerimi paylaştığım
            içerikler üretiyorum.
          </p>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </Container>

      <Container size="large" className="mt-20">
        <NextImage
          src="/photos/we.jpg"
          alt="Adem ilter ve çocukları"
          priority
          quality={100}
          width={3609}
          height={2404}
          className="rounded-lg saturate-0 transition-all duration-700 hover:saturate-100"
        />
      </Container>
    </>
  );
}
