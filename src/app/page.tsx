import NextImage from "next/image";
import Social from "@/components/social";
import Container from "@/components/container";
import NextLink from "next/link";

export default function Index() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="grid font-display text-xl sm:text-2xl">
            <b>Adem İlter</b>
            <span className="opacity-60">Product Designer</span>
            <span className="opacity-60">Istanbul, TURKEY</span>
          </h1>

          <p className="text-xl">
            Bence en büyük özelliğim;
            <br /> Üzerinde çalıştığım işlerin her noktasında <b>NEDEN</b>{" "}
            sorusunu onlarca kez sorup, gereksiz kalabalıktan soyutlayıp,
            kullanışlı ve sade ürünler tasarlayabilmek.
          </p>

          <p className="text-xl">
            İşim dışındaki zamanlarda; fotoğraf çekmeyi, kaykay sürmeyi ve
            doğada olmayı seviyorum.
          </p>

          <p className="text-xl">
            Bu konularda soruların varsa veya ürünün hakkında konuşmak istersen{" "}
            <NextLink href={`/meet`} className="underline">
              müsait günlerime bakabilirsin.
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
          className="rounded-3xl"
        />
      </Container>
    </>
  );
}
