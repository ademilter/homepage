import Link from "next/link";
import { useEffect, useState } from "react";
import Text from "./text";
import { useRouter } from "next/router";
import { AnimateSharedLayout, motion } from "framer-motion";
import cx from "classnames";
import IconArrowDropDown from "./icons/arrow-drop-down";

const MENU = {
  "/": "Anasayfa",
  "/videos": "Eğitimler",
  "/post": "Yazılar",
  "/photos": "Fotoğraflar",
  "/tools": "Ekipmanlar",
  "/apps": "Uygulamalar",
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
    <AnimateSharedLayout>
      <motion.header
        className={cx(
          isNavOpen ? "-mt-10 bg-zinc-50 py-10 dark:bg-zinc-800" : ""
        )}
      >
        <div className="c-small">
          {/* Navigation */}
          <motion.nav
            layout
            initial="hidden"
            animate={isNavOpen ? "visible" : "hidden"}
            variants={{
              visible: {
                height: "auto",

                transition: {
                  delayChildren: 0.1,
                  staggerChildren: 0.05,
                  duration: 0.4,
                },
              },
              hidden: {
                height: 0,
              },
            }}
            className={cx(
              "flex flex-col space-y-4 text-xl",
              isNavOpen ? "pointer-events-auto" : "pointer-events-none"
            )}
          >
            {Object.keys(MENU).map((path) => {
              const isActive = path === pathName;

              return (
                <motion.span
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 10,
                      transition: { duration: 0 },
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  key={path}
                >
                  <Link href={path}>
                    <a className="">
                      <Text dim={isActive ? 2 : undefined}>
                        {MENU[path]}{" "}
                        {isActive && <Text size="small">(mevcut sayfa)</Text>}
                      </Text>
                    </a>
                  </Link>
                </motion.span>
              );
            })}
          </motion.nav>

          {/* Active page */}
          {!isNavOpen && (
            <button
              type="button"
              className="flex select-none items-center"
              onClick={() => {
                setIsNavOpen(true);
              }}
            >
              <Text dim={2} className="">
                {MENU[pathName]}
              </Text>
              <IconArrowDropDown className="opacity-50" />
            </button>
          )}
        </div>
      </motion.header>
    </AnimateSharedLayout>
  );
}

export default Header;
