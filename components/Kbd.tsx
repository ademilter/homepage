import classNames from 'classnames';
import * as React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Kbd({ className, children }: Props) {
  return (
    <kbd
      className={classNames(
        'px-1 py-0.5 inline-flex items-center justify-center select-none',
        'text-xs font-medium rounded',
        'text-gray-500 bg-gray-200',
        'dark:text-gray-400 dark:bg-gray-700',
        className
      )}
    >
      {children}
    </kbd>
  );
}
