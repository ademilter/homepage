import NavItem from "./nav-item";
import Link from "next/link";
import { useEffect } from "react";
import Text from "./text";
import { useRouter } from "next/router";
import { AnimateSharedLayout, motion, useCycle } from "framer-motion";
import cx from "classnames";
import MenuToggle from "./mobile-nav-toggle";

const MENU = {
  "/": "Home",
  "/videos": "Videos",
  "/photos": "Photos",
  "/tools": "Tools",
  "/apps": "Apps",
  "/bookmarks": "Bookmarks",
};

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      toggleOpen();
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
          "pt-10 pb-10 sm:mb-0 sm:bg-transparent sm:pb-20",
          isOpen ? "mb-10 bg-gray-50" : ""
        )}
      >
        <div className="c-small">
          <div className="flex items-center justify-between">
            {/* nav-mobile-toggle */}
            <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />

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
            animate={isOpen ? "visible" : "hidden"}
            variants={{
              visible: {
                height: "auto",
                marginTop: 20,
                transition: {
                  delayChildren: 0.1,
                  staggerChildren: 0.05,
                },
              },
              hidden: {
                height: 0,
                marginTop: 0,
              },
            }}
            className={cx("flex flex-col space-y-4 text-xl sm:hidden")}
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
                      <Text dim={2}>{MENU[path]}</Text>
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
