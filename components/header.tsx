import { useTheme } from "next-themes";
import NavItem from "./nav-item";
import { useState, useEffect } from "react";

const MENU = {
  "/": "Giriş",
  "/videos": "Eğitimler",
  "/photos": "Fotoğraflar",
  // "/notes": "Notlar",
  "/apps": "Uygulamalar",
  "/bookmarks": "Yer İmleri",
};

function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header>
      <div className="c-small">
        <div className="space-x-1 border-b border-zinc-100 py-6 dark:border-zinc-800">
          <nav>
            {Object.keys(MENU).map((path) => {
              return (
                <NavItem key={path} href={path}>
                  {MENU[path]}
                </NavItem>
              );
            })}
            <button
              className="c-small"
              onClick={() => {
                if (theme === "system") setTheme("light");
                if (theme === "light") setTheme("dark");
                if (theme === "dark") setTheme("system");
              }}
            >
              {theme === "system" && "🌻"}
              {theme === "light" && "🌚"}
              {theme === "dark" && "🌝"}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
