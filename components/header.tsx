import NavItem from "./nav-item";
import Link from "next/link";
import { useEffect, useState } from "react";
import Text from "./text";
import { useRouter } from "next/router";
import { AnimateSharedLayout, motion, usePresence } from "framer-motion";
import cx from "classnames";

const MENU = {
  "/": "Home",
  "/videos": "Videos",
  "/photos": "Photos",
  "/tools": "Tools",
  "/apps": "Apps",
  "/bookmarks": "Bookmarks",
};

function Header() {
  const [showNav, setShowMenu] = useState(false);
  const [isPresent, safeToRemove] = usePresence();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setShowMenu(false);
    };

    router.events.on("routeChangeComplete", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeStart);
    };
  }, []);

  return (
    <AnimateSharedLayout>
      <header
        className={cx(
          "pt-10 pb-10 sm:pb-20",
          showNav ? "mb-10 bg-gray-50" : ""
        )}
      >
        <div className="c-small">
          <div className="flex items-center justify-between">
            {/* nav-mobile-toggle */}
            <button
              className="sm:hidden"
              type="button"
              onClick={() => setShowMenu(!showNav)}
            >
              <Text dim={1}>{showNav ? "x" : "Menu"}</Text>
            </button>

            {/* desktop nav */}
            <nav className="-ml-3 hidden sm:block">
              {Object.keys(MENU).map((path) => {
                return (
                  <NavItem key={path} href={path}>
                    {MENU[path]}
                  </NavItem>
                );
              })}
            </nav>
          </div>

          {/* nav-mobile */}
          <motion.nav
            layout
            initial="hidden"
            animate={showNav ? "visible" : "hidden"}
            variants={{
              visible: {
                height: "auto",
                transition: {
                  delayChildren: 0.1,
                  staggerChildren: 0.05,
                },
              },
              hidden: {
                height: 0,
              },
            }}
            onAnimationComplete={() => !isPresent && safeToRemove()}
            className={cx(
              "mt-4 flex flex-col space-y-4 text-xl sm:hidden",
              isPresent ? "flex" : "hidden"
            )}
          >
            {Object.keys(MENU).map((path) => {
              return (
                <motion.span
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 20,
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
                      <Text dim={1}>{MENU[path]}</Text>
                    </a>
                  </Link>
                </motion.span>
              );
            })}
          </motion.nav>
        </div>
      </header>
    </AnimateSharedLayout>
  );
}

export default Header;
