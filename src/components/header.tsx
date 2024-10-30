"use client";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import IconArrowDropDown from "./icons/arrow-drop-down";
import cx from "@/lib/cx";
import Container from "./container";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

export const MENU = {
  "/": "Hakkımda",
  // "/photos": "Fotoğraflar",
  // "/post": "Yazılar",
  "/tools": "Ekipman",
  "/bookmarks": "Feyz",
  // "/designer": "Tasarımcılar",
};

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const path = segment ? `/${segment}` : "/";

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <header>
      <Container>
        <nav className={cx(isNavOpen ? "flex" : "hidden", "flex-col gap-4")}>
          {Object.entries(MENU).map(([key, value]) => {
            const isActive = key === path;
            return (
              <NextLink
                key={key}
                href={key}
                className={cx(
                  "grow no-underline hover:opacity-100",
                  isActive ? "font-semibold" : "opacity-60",
                )}
              >
                {value}
              </NextLink>
            );
          })}
        </nav>

        {!isNavOpen && (
          <button
            type="button"
            className="flex items-center opacity-60 select-none"
            onClick={() => {
              setIsNavOpen(true);
            }}
          >
            <span>{MENU[path as keyof typeof MENU]}</span>
            <IconArrowDropDown />
          </button>
        )}
      </Container>
    </header>
  );
}
