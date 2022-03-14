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
            "text-gray-900 bg-gray-100 dark:text-white dark:bg-gray-800"
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default NavItem;
