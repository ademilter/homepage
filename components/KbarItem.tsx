import classNames from 'classnames';
import * as React from 'react';
import Kbd from './Kbd';

export default function KbarItem({ action, handlers, state }) {
  const active = state.index === state.activeIndex;

  return (
    <div
      className={classNames(
        'flex items-center rounded p-3 text-gray-600 cursor-pointer transition-all',
        active && 'bg-gray-100 text-gray-900',
        'dark:text-gray-500',
        active && 'dark:bg-gray-700 dark:text-gray-50'
      )}
      {...handlers}
    >
      {action.icon}
      <span className="ml-3">{action.name}</span>
      {action.shortcut?.length > 0 && (
        <span className="ml-auto space-x-1">
          {action.shortcut.map((sc) => (
            <Kbd key={sc}>{sc}</Kbd>
          ))}
        </span>
      )}
      {active && (
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
          className="ml-auto opacity-30"
        >
          <polyline points="9 10 4 15 9 20" />
          <path d="M20 4v7a4 4 0 0 1-4 4H4" />
        </svg>
      )}
    </div>
  );
}
