import { Social, SocialButton } from "@/components/social";
import Container from "@/components/container";
import { SOCIAL } from "@/lib/const";

export default function Index() {
  return (
    <>
      <Container className="space-y-8">
        <header>
          <h1 className="font-display text-2xl font-semibold">Adem İlter</h1>
          <h2 className="font-display text-mute text-2xl">
            Product Designer at <a href="https://upstash.com">Upstash</a>
          </h2>
        </header>

        <p>
          I believe my greatest strength is my ability to repeatedly ask “why?”
          at every stage of the projects I work on, stripping away unnecessary
          clutter and designing functional and simple products.
        </p>

        <p>
          Outside of work, I enjoy camping, photography, and inventing things
          using 3D printing.
        </p>

        <Social>
          <SocialButton href={`mailto:${SOCIAL.email}`}>Mail</SocialButton>
          <SocialButton href={SOCIAL.instagram}>Instagram</SocialButton>
          <SocialButton href={SOCIAL.twitter}>Twitter</SocialButton>
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
