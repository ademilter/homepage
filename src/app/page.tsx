import NextImage from "next/image";
import Social from "@/components/social";
import Title from "@/components/title";
import Container from "@/components/container";
import NextLink from "next/link";

export default function Index() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <Title>
            <b className="font-semibold">Merhaba, Ben Adem 👋</b>
            <br />
            İstanbul'da yaşayan bir Ürün Tasarımcısıyım.
          </Title>

          <p className="text-xl">
            (Bence) en büyük özelliğim; üzerinde çalıştığım işin her noktasında
            "NEDEN" sorusunu onlarca kez sorup, gereksiz kalabalıktan soyutlayıp
            kullanışlı ve sade ürünler tasarlamak.
          </p>

          <p className="text-xl">
            Fotoğraf çekmeyi, kaykay sürmeyi ve doğada olmayı seviyorum.
          </p>

          <p className="text-xl">
            Bu konularda soruların varsa veya ürünün hakkında konuşmak istersen{" "}
            <NextLink href={`/meet`} className="underline">
              müsait günlerime göz atabilirsin.
            </NextLink>
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
