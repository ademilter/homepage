import Social from "@/components/social";
import Container from "@/components/container";

export default function Index() {
  return (
    <>
      <Container>
        <div className="space-y-8">
          <header>
            <h1 className="font-semibold">Adem İlter</h1>
            <h2 className="font-semibold">
              Product Designer at <a href="https://upstash.com">Upstash</a>
              <br />
              Istanbul, TURKEY
            </h2>
          </header>

          <p>
            Bence en büyük özelliğim;
            <br /> Üzerinde çalıştığım işlerin her noktasında <b>neden</b>{" "}
            sorusunu onlarca kez sorup, gereksiz kalabalıktan soyutlayıp,
            kullanışlı ve sade ürünler tasarlayabilmek.
          </p>

          <p>
            İşim dışındaki zamanlarda; yeni yerler keşfetmeyi, kamp yapmayı ve
            fotoğraf çekmeyi çok seviyorum.
          </p>

          <p>
            Bu konularda soruların varsa veya kendi ürünün hakkında konuşmak
            istersen{" "}
            <a
              href="https://superpeer.com/adem/-/hey?s=d"
              target="_blank"
              className="underline"
            >
              müsait günlerime
            </a>{" "}
            bakabilirsin.
          </p>

          <Social />
        </div>
      </Container>

      <Container size="large" className="mt-10 sm:mt-24">
        <img
          src="/photos/we.jpg"
          alt="Adem ilter, çocukları ile beraber bir ormanda oturmuş göle doğru bakıyorlar"
          className="rounded-xl sm:rounded-4xl"
        />
      </Container>
    </>
  );
}
