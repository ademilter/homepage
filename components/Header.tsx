import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";

const MENU = {
  "/": "Giriş",
  "/photos": "Fotoğraf",
  "/desk": "Masam",
  "/bookmarks": "Yer imleri",
};

function Header() {
  const { pathname } = useRouter();

  return (
    <header>
      <div className="c-small">
        <nav className="py-6 space-x-1 border-b border-gray-200 dark:border-gray-800">
          {Object.keys(MENU).map((path) => {
            const name = MENU[path];
            const isActive = path === pathname;
            return (
              <Link key={path} href={path}>
                <a
                  className={cx(
                    "px-2 py-1 rounded",
                    isActive && "text-white bg-gray-100 dark:bg-gray-800"
                  )}
                >
                  {name}
                </a>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
