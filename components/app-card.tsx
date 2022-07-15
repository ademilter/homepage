import Image from "next/image";
import cx from "classnames";
import Text from "./text";

export default function AppCard({ Id, name, description, url, free, icon }) {
  return (
    <a
      key={Id}
      href={`${url}?ref=ademilter`}
      target="_blank"
      className={cx(
        "flex items-center gap-6 from-zinc-100 py-6 px-4 hover:bg-gradient-to-r dark:from-zinc-800"
      )}
    >
      <figure
        className={cx("flex h-16 w-16 shrink-0 items-center justify-center")}
      >
        <Image
          src={icon[0].thumbnails.large.url}
          alt={name}
          width={128}
          height={128}
          quality={100}
        />
      </figure>

      <div className="grow">
        <Text as="h4" className="flex items-center gap-2 font-semibold">
          <Text>{name}</Text>
          {free && (
            <Text className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium leading-none text-emerald-600 dark:bg-emerald-900 dark:bg-opacity-20 dark:text-emerald-700">
              Ücretsiz
            </Text>
          )}
        </Text>

        <Text as="p" dim={1} className="mt-1">
          {description}
        </Text>
      </div>
    </a>
  );
}
