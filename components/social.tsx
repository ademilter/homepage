import Link from "@/components/link";
import IconTwitter from "@/components/icons/twitter";
import IconYoutube from "@/components/icons/youtube";
import IconGithub from "@/components/icons/github";
import IconInstagram from "@/components/icons/instagram";
import { SOCIAL } from "@/lib/const";

function SocialButton({ href, children }) {
  return (
    <Link
      href={href}
      blank
      className="
      flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors
      hover:bg-indigo-100 hover:text-indigo-900
      dark:bg-zinc-700 dark:text-zinc-200
      dark:hover:bg-indigo-800 dark:hover:text-indigo-100"
    >
      {children}
    </Link>
  );
}

export default function Social() {
  return (
    <div className="flex items-center space-x-3">
      <SocialButton href={`mailto:${SOCIAL.email}`}>
        <span className="mx-2 font-medium">Email</span>
      </SocialButton>

      <SocialButton href={SOCIAL.instagram}>
        <IconInstagram />
      </SocialButton>

      <SocialButton href={SOCIAL.twitter}>
        <IconTwitter />
      </SocialButton>

      <SocialButton href={SOCIAL.youtube}>
        <IconYoutube />
      </SocialButton>

      <SocialButton href={SOCIAL.github}>
        <IconGithub />
      </SocialButton>
    </div>
  );
}
