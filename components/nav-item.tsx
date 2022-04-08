import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";

function NavItem({ href, children }) {
  const { pathname } = useRouter();
  const isActive = href === pathname;

  return (
    <Link href={href}>
      <a
        className={cx(
          "px-2 py-1 rounded",
          isActive &&
            "text-zinc-900 bg-zinc-100 dark:text-white dark:bg-zinc-800"
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default NavItem;
