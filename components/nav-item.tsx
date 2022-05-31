import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";

function NavItem({ href, children }) {
  const { pathname } = useRouter();
  const clearPathname = pathname.split("/")[1];

  const isActive = href === `/${clearPathname}`;

  return (
    <Link href={href}>
      <a
        className={cx(
          "rounded px-3 py-1",
          "hover:bg-zinc-100 dark:hover:bg-zinc-800",
          isActive && "text-zinc-900 dark:text-white"
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default NavItem;
