import Image from "next/image";
import cx from "classnames";
import BaseLink from "@/components/link";
import { IAirtableImages, IApp } from "@/types/index";

export default function AppCard({ app }: { app: IApp }) {
  const { id, name, description, icon, url, free } = app;
  const photo: IAirtableImages = icon && icon[0];

  return (
    <BaseLink
      key={id}
      href={`${url}?ref=ademilter`}
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
          width={photo.thumbnails.large.width}
          height={photo.thumbnails.large.height}
        />
      </figure>

      <div className="grow">
        <h4 className="shine flex items-center gap-2 font-semibold">
          <span>{name}</span>
          {free && (
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium leading-none text-emerald-600 dark:bg-emerald-900 dark:bg-opacity-20 dark:text-emerald-700">
              Ücretsiz
            </span>
          )}
        </h4>

        <p className="mt-1">{description}</p>
      </div>
    </BaseLink>
  );
}
