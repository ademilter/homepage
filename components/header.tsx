import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import IconMenu from 'components/icons/menu';

const MENU = {
  '/': 'Giriş',
  '/photos': 'Fotoğraf',
  '/videos': 'Eğitim',
  // '/notes': 'Notlar',
  '/desk': 'Masam',
  '/bookmarks': 'Yer imleri',
  '/moodboard': 'Moodboard',
  // { name: 'Hakkımda', url: '/about' },
  // { name: 'S.S.S.', url: '/faq' },
  // { name: 'Alıntılar', url: '/quotes' },
};

function Header() {
  const [showNav, showNavSet] = useState(false);
  const router = useRouter();
  const splitPath = router.pathname.split('/');
  const pathname = splitPath.length > 2 ? `/${splitPath[1]}` : router.pathname;
  const activePage = MENU[pathname];

  useEffect(() => {
    showNavSet(false);
  }, [router.pathname]);

  return (
    <header className="pt-6">
      <div className="c-small text-lg">
        {showNav ? (
          <nav
            className="
            flex flex-col space-y-2
            md:space-y-0 md:space-x-4 md:flex-row"
          >
            {Object.keys(MENU).map((url) => {
              return (
                <Link key={url} href={url}>
                  <a>{MENU[url]}</a>
                </Link>
              );
            })}
          </nav>
        ) : (
          <button
            type="button"
            className="flex items-center"
            onClick={() => {
              showNavSet(true);
            }}
          >
            <IconMenu />
            <span className="ml-2">{activePage}</span>
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
