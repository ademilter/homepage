import Image from "next/image";

export default function AppCard({ Id, name, description, url, free, icon }) {
  return (
    <a
      key={Id}
      href={`${url}?ref=ademilter`}
      target="_blank"
      className="flex items-center gap-10 rounded py-6 transition-all hover:bg-zinc-100 hover:px-6 dark:hover:bg-zinc-800"
    >
      <div className="grow">
        <h4 className="text-highlight flex items-center gap-2 text-lg font-semibold">
          <span>{name}</span>
          {free && (
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium leading-none text-emerald-600 dark:bg-emerald-900 dark:bg-opacity-20 dark:text-emerald-700">
              Ücretsiz
            </span>
          )}
        </h4>
        <p className="mt-2">{description}</p>
        {/*<div className="mt-2">
                  <a href={`${url}?ref=ademilter`} target="_blank">
                    → {url}
                  </a>
                </div>*/}
      </div>
      <div className="flex h-24 w-24 shrink-0 items-center justify-center">
        <Image
          src={icon[0].thumbnails.large.url}
          alt={name}
          width={128}
          height={128}
          quality={100}
        />
      </div>
    </a>
  );
}
