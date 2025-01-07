import { Social, SocialButton } from "@/components/social";
import Container from "@/components/container";
import { SOCIAL } from "@/lib/const";

export default function Index() {
  return (
    <>
      <Container className="space-y-8">
        <header>
          <h1 className="font-display text-2xl font-semibold md:text-3xl">
            Adem İlter
          </h1>
          <h2 className="font-display text-mute text-2xl md:text-3xl">
            Product Designer at <a href="https://upstash.com">Upstash</a>
            <br />
            Istanbul, TURKEY
          </h2>
        </header>

        <p>
          Bence en büyük özelliğim;
          <br /> Üzerinde çalıştığım işlerin her noktasında neden sorusunu
          onlarca kez sorup, gereksiz kalabalıktan soyutlayıp, kullanışlı ve
          sade ürünler tasarlayabilmek.
        </p>

        <p>
          İşim dışındaki zamanlarda; yeni yerler keşfetmeyi, kamp yapmayı ve
          fotoğraf çekmeyi seviyorum.
        </p>

        <Social>
          <SocialButton href={`mailto:${SOCIAL.email}`}>Email</SocialButton>,{" "}
          <SocialButton href={SOCIAL.instagram}>Instagram</SocialButton>,{" "}
          <SocialButton href={SOCIAL.twitter}>Twitter</SocialButton>,{" "}
          <SocialButton href={SOCIAL.raindrop}>Bookmarks</SocialButton>
        </Social>
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
