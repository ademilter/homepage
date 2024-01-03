"use client";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import IconArrowDropDown from "./icons/arrow-drop-down";
import cx from "@/lib/cx";
import Container from "./container";
import { useSelectedLayoutSegment } from "next/navigation";

const MENU = {
  "/": "Hakkımda",
  "/videos": "Eğitimler",
  "/photos": "Fotoğraflar",
  "/post": "Yazılar",
  "/tools": "Ekipman",
  "/bookmarks": "Feyz",
};

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const segment = useSelectedLayoutSegment();
  const path = segment ? `/${segment}` : "/";

  useEffect(() => {
    setIsNavOpen(false);
  }, [segment]);

  return (
    <header className="">
      <Container>
        <nav
          className={cx(
            isNavOpen ? "flex" : "hidden",
            "flex-col gap-4 sm:!flex sm:flex-row",
          )}
        >
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
            className="flex select-none items-center sm:hidden"
            onClick={() => {
              setIsNavOpen(true);
            }}
          >
            <span>{MENU[path]}</span>
            <IconArrowDropDown className="opacity-50" />
          </button>
        )}
      </Container>
    </header>
  );
}
