import NextImage from "next/image";
import cx from "@/lib/cx";

function Photo({
  alt_description,
  links,
  urls,
  description,
  width,
  height,
}: {
  alt_description: string;
  links: { html: string };
  urls: { raw: string };
  description: string;
  width: number;
  height: number;
}) {
  return (
    <figure>
      <a
        href={links.html}
        className={cx(
          "block overflow-hidden rounded-lg",
          "saturate-50 transition-all duration-700",
          "hover:scale-105 hover:saturate-100",
        )}
      >
        <NextImage
          src={`${urls.raw}&q=90&w=800`}
          alt={alt_description || description}
          width={width}
          height={height}
          quality={100}
        />
      </a>
    </figure>
  );
}

function Photos({ data }: { data: any[] }) {
  return (
    <div className="grid items-end gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 md:gap-y-20 lg:grid-cols-4">
      {data.map((item: any) => {
        return <Photo key={item.id} {...item} />;
      })}
    </div>
  );
}

export default Photos;
