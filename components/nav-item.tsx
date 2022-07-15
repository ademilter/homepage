import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";
import Text from "./text";

function NavItem({ href, children }) {
  const { pathname } = useRouter();
  const clearPathname = pathname.split("/")[1];

  const isActive = href === `/${clearPathname}`;

  return (
    <Link href={href}>
      <a
        className={cx(
          "rounded-lg px-3 py-2 underline-offset-1",
          "hover:bg-zinc-100 dark:hover:bg-zinc-800",
          isActive
            ? "underline decoration-zinc-300 dark:decoration-zinc-600"
            : ""
        )}
      >
        <Text dim={isActive ? null : 2}>{children}</Text>
      </a>
    </Link>
  );
}

export default NavItem;
