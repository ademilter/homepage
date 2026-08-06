import { Social, SocialButton } from "@/components/social";
import Container from "@/components/container";
import { SOCIAL } from "@/lib/const";

export default function Index() {
  return (
    <>
      <Container className="space-y-8">
        <header>
          <h1 className="font-display text-4xl font-semibold">Adem ilter</h1>
          <h2 className="font-display text-mute text-4xl">
            Dijital Ürün Tasarımcı <a href="https://upstash.com">Upstash</a>
          </h2>
        </header>

        <p>
          Bana göre en büyük gücüm, çalıştığım projelerin her aşamasında bıkmadan "neden?" 
          diye sorabilmek; böylece karmaşadan arındırıp geriye sade ve işlevsel çözümler bırakabilmek.
        </p>

        <p>
          Son zamanlarda tüm merakımı marangozluğa ve ahşabın dünyasını keşfetmeye verdim. 
          Doğada vakit geçirmeyi, dağları izlemeyi ve en çok da ailemle birlikte an biriktirmeyi seviyorum.
        </p>

        <Social>
          <SocialButton href={`mailto:${SOCIAL.email}`}>Mail</SocialButton>
          <SocialButton href={SOCIAL.instagram}>Instagram</SocialButton>
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
