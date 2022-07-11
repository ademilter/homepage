import Image from "next/image";
import cx from "classnames";

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
      <div
        className={cx("flex h-16 w-16 shrink-0 items-center justify-center")}
      >
        <Image
          src={icon[0].thumbnails.large.url}
          alt={name}
          width={128}
          height={128}
          quality={100}
        />
      </div>
      <div className="grow">
        <h4 className="text-highlight flex items-center gap-2 text-lg font-semibold">
          <span>{name}</span>
          {free && (
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium leading-none text-emerald-600 dark:bg-emerald-900 dark:bg-opacity-20 dark:text-emerald-700">
              Ücretsiz
            </span>
          )}
        </h4>

        <p>{description}</p>
      </div>
    </a>
  );
}
