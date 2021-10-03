import * as React from 'react';
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
} from 'kbar';
import { useRouter } from 'next/router';
import KbarItem from './KbarItem';
import Kbd from './Kbd';
import { useTheme } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

export default function Kbar({ children }: Props) {
  const { push } = useRouter();
  const { setTheme } = useTheme();

  const actions = [
    {
      id: 'home',
      name: 'Anasayfa',
      shortcut: [],
      keywords: '',
      perform: () => push('/'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: 'photos',
      name: 'Fotoğraflar',
      shortcut: [],
      keywords: '',
      perform: () => push('/photos'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
    },
    {
      id: 'videos',
      name: 'Eğitimler',
      shortcut: [],
      keywords: '',
      perform: () => push('/videos'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
    },
    {
      id: 'desk',
      name: 'Ekipmanlar',
      shortcut: [],
      keywords: '',
      perform: () => push('/desk'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <circle cx="12" cy="14" r="4" />
          <line x1="12" y1="6" x2="12.01" y2="6" />
        </svg>
      ),
    },
    {
      id: 'bookmarks',
      name: 'Yer İmleri',
      shortcut: [],
      keywords: '',
      perform: () => push('/bookmarks'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      id: 'moodboard',
      name: 'Moodoard',
      shortcut: [],
      keywords: '',
      perform: () => push('/moodboard'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      id: 'theme',
      name: 'Theme...',
      shortcut: [],
      keywords: 'theme',
      // perform: () => setTheme('light'),
      children: ['theme-light', 'theme-dark'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ),
    },
    {
      id: 'theme-light',
      name: 'Light',
      shortcut: [],
      keywords: 'theme',
      perform: () => setTheme('light'),
      parent: 'theme',
    },
    {
      id: 'theme-dark',
      name: 'Dark',
      shortcut: [],
      keywords: 'theme',
      perform: () => setTheme('dark'),
      parent: 'theme',
    },
  ];

  return (
    <KBarProvider
      actions={actions}
      options={{
        animations: {
          enterMs: 200,
          exitMs: 100,
        },
      }}
    >
      <KBarPortal>
        <KBarPositioner
          className="bg-white bg-opacity-80
          dark:bg-black dark:bg-opacity-80"
        >
          <KBarAnimator className="w-full max-w-[440px] mt-6">
            <div
              className="bg-white p-4 rounded-lg shadow-2xl
              dark:bg-gray-900"
            >
              {/* SEARCH */}
              <div className="relative">
                <KBarSearch
                  className="w-full block border-0 text-lg p-3 focus:outline-none bg-transparent"
                  placeholder="Ne aramıştın?"
                />
                <Kbd className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  ESC
                </Kbd>
              </div>

              {/* RESULT */}
              <KBarResults
                className="border-0 border-t border-solid border-gray-200 pt-4 mt-2
                dark:border-gray-800"
                onRender={(action, handlers, state) => (
                  <KbarItem action={action} handlers={handlers} state={state} />
                )}
              />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {children}
    </KBarProvider>
  );
}
