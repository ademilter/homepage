import NavItem from "./nav-item";
import Link from "next/link";
import { useState } from "react";
import Text from "./text";

const MENU = {
  "/": "Giriş",
  "/videos": "Eğitim",
  "/photos": "Fotoğraf",
  "/tools": "Ekipman",
  "/apps": "Uygulama",
  "/bookmarks": "Yer İmi",
};

function Header() {
  const [showNav, setShowMenu] = useState(false);

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
        {showNav && (
          <nav className="mt-4 flex flex-col space-y-4 text-xl sm:hidden">
            {Object.keys(MENU).map((path) => {
              return (
                <Link key={path} href={path}>
                  <a className="">
                    <Text dim={1}>{MENU[path]}</Text>
                  </a>
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
