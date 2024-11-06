import { Social, SocialButton } from "@/components/social";
import Container from "@/components/container";
import { SOCIAL } from "@/lib/const";
import { IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

export default function Index() {
  return (
    <>
      <Container className="space-y-8">
        <header>
          <h1 className="font-display text-2xl font-semibold">Adem İlter</h1>
          <h2 className="font-display text-mute text-2xl">
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
          fotoğraf çekmeyi seviyorum.
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

        <Social>
          <SocialButton
            href={`mailto:${SOCIAL.email}`}
            className="bg-default w-auto px-4 text-white"
          >
            Email
          </SocialButton>

          <SocialButton href={SOCIAL.instagram}>
            <IconBrandInstagram stroke={1.5} size={24} />
          </SocialButton>

          <SocialButton href={SOCIAL.twitter}>
            <IconBrandX stroke={1.5} size={24} />
          </SocialButton>
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
