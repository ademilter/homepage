import NextLink from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import IconArrowDropDown from "./icons/arrow-drop-down";
import cx from "classnames";
import Container from "./container";

const MENU = {
  "/": "Hakkımda",
  "/videos": "Eğitimler",
  "/photos": "Fotoğraflar",
  "/post": "Yazılar",
  "/bookmarks": "Yer İmleri",
};

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  const { pathname } = useRouter();
  const clearSlash = pathname.split("/")[1];
  const pathName = clearSlash ? `/${clearSlash}` : "/";

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsNavOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeStart);
    };
  }, []);

  return (
    <header className="">
      <Container>
        <nav
          className={cx(
            isNavOpen ? "flex" : "hidden",
            "flex-col gap-3 sm:!flex sm:flex-row"
          )}
        >
          {Object.keys(MENU).map((path) => {
            const isActive = path === pathName;
            return (
              <span key={path}>
                <NextLink href={path} className={cx(isActive ? "shine" : "")}>
                  {MENU[path]}
                </NextLink>
              </span>
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
            <span>{MENU[pathName]}</span>
            <IconArrowDropDown className="opacity-50" />
          </button>
        )}
      </Container>
    </header>
  );
}

export default Header;
