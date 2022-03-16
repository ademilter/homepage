import { useLayoutEffect } from "react";
import NextImage from "next/image";
import Colcade from "colcade";
import A from "components/a";

function Photos({ data }) {
  useLayoutEffect(() => {
    const colc = new Colcade(`.photos`, {
      columns: `.photos-col`,
      items: `.photos-item`,
    });

    return () => {
      colc.destroy();
    };
  }, []);

  return (
    <div className="photos grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="photos-col photos-col--1" />
      <div className="photos-col photos-col--2" />
      <div className="photos-col photos-col--3" />

      {data.map((item) => {
        return (
          <div key={item.id} className="photos-item mb-8">
            <A href={item.links.html} blank>
              <NextImage
                src={item.urls.regular}
                alt={item.description}
                width={item.width}
                height={item.height}
                layout="responsive"
              />
            </A>
          </div>
        );
      })}
    </div>
  );
}

export default Photos;
