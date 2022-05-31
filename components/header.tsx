import { useTheme } from "next-themes";
import NavItem from "./nav-item";
import Link from "next/link";
import { useState, useEffect } from "react";

const MENU = {
  "/": "Giriş",
  "/videos": "Eğitim",
  "/photos": "Fotoğraf",
  // "/notes": "Notlar",
  "/apps": "Uygulama",
  "/bookmarks": "Yer İmi",
};

function Header() {
  const [showNav, setShowMenu] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="pt-10 pb-20">
      <div className="c-small">
        <div className="flex items-center justify-between">
          {/* nav-mobile-toggle */}
          <button
            className="sm:hidden"
            type="button"
            onClick={() => setShowMenu(!showNav)}
          >
            <span>{showNav ? "x" : "Menü"}</span>
          </button>
          {/* desktop nav */}
          <nav className="hidden sm:block">
            {Object.keys(MENU).map((path) => {
              return (
                <NavItem key={path} href={path}>
                  {MENU[path]}
                </NavItem>
              );
            })}
          </nav>

          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {resolvedTheme === "dark" ? "🌝" : "🌚"}
          </button>
        </div>

        {/* nav-mobile */}
        {showNav && (
          <nav className="flex flex-col sm:hidden">
            {Object.keys(MENU).map((path) => {
              return (
                <Link key={path} href={path}>
                  <a className="">{MENU[path]}</a>
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
