import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  className?: string;
};

function PageTitle({ children, className, ...props }: Props) {
  return (
    <p className={cn('text-2xl text-highlight', className)} {...props}>
      {children}
    </p>
  );
}

export default PageTitle;
