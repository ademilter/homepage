import { useRouter } from 'next/router';
import IconMenu from 'components/icons/menu';
import { useKBar, VisualState } from 'kbar';

const MENU = {
  '/': 'Giriş',
  '/photos': 'Fotoğraf',
  '/videos': 'Eğitim',
  '/desk': 'Masam',
  '/bookmarks': 'Yer imleri',
  '/moodboard': 'Moodboard',
};

function Header() {
  const { query } = useKBar();
  const router = useRouter();
  const splitPath = router.pathname.split('/');
  const pathname = splitPath.length > 2 ? `/${splitPath[1]}` : router.pathname;
  const activePage = MENU[pathname];

  return (
    <header className="pt-6">
      <div className="c-small text-lg">
        <button
          type="button"
          className="flex items-center"
          onClick={() => {
            query.setVisualState((vs) =>
              [VisualState.animatingOut, VisualState.hidden].includes(vs)
                ? VisualState.animatingIn
                : VisualState.animatingOut
            );
          }}
        >
          <IconMenu />
          <span className="ml-2">{activePage}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
