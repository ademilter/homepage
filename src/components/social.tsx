import { IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import { SOCIAL } from "@/lib/const";
import React from "react";
import cx from "@/lib/cx";

function SocialButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? "_self" : "_blank"}
      className={cx(
        "flex size-9 items-center justify-center px-2",
        "bg-default/20 rounded-xl !no-underline",
        "hover:!bg-default hover:!text-white",
        className,
      )}
    >
      {children}
    </a>
  );
}

export default function Social() {
  return (
    <div className="inline-flex items-center gap-2">
      <SocialButton
        href={`mailto:${SOCIAL.email}`}
        className="bg-default w-auto px-4 text-white"
      >
        Email
      </SocialButton>

      <SocialButton href={SOCIAL.instagram}>
        <IconBrandInstagram stroke={1.5} size={21} />
      </SocialButton>

      <SocialButton href={SOCIAL.twitter}>
        <IconBrandX stroke={1.5} size={20} />
      </SocialButton>
    </div>
  );
}
