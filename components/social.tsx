import { meta } from "../site.config";
import A from "components/a";
import IconTwitter from "components/icons/twitter";
import IconYoutube from "components/icons/youtube";
import IconGithub from "components/icons/github";
import IconInstagram from "components/icons/instagram";

function SocialButton({ href, children }) {
  return (
    <A
      href={href}
      blank
      className="
      flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 transition-colors
      hover:bg-opacity-75
      dark:bg-zinc-700 dark:text-zinc-200"
    >
      {children}
    </A>
  );
}

function Social() {
  const { twitter, youtube, github, instagram } = meta.social;

  return (
    <div className="flex items-center space-x-3">
      <SocialButton href={"mailto:" + meta.author.email}>
        <span className="mx-2 font-semibold">Eposta</span>
      </SocialButton>

      <SocialButton href={twitter}>
        <IconTwitter />
      </SocialButton>

      <SocialButton href={youtube}>
        <IconYoutube />
      </SocialButton>

      <SocialButton href={github}>
        <IconGithub />
      </SocialButton>

      <SocialButton href={instagram}>
        <IconInstagram />
      </SocialButton>
    </div>
  );
}

export default Social;
