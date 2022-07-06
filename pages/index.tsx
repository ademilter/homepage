import PageTransition from "components/page-transition";
import Social from "components/social";
import dynamic from "next/dynamic";
import unsplash from "lib/unsplash";
import ms from "ms";

const Photos = dynamic(() => import("components/photos"), {
  ssr: false,
});

export default function HomePage({ photos }) {
  return (
    <PageTransition>
      <div className="c-small">
        <div className="space-y-6">
          <h1 className="text-highlight text-2xl font-bold">
            Ben Adem ilter.
            <br />
            İstanbul'da yaşayan Dijital Ürün Tasarımcısıyım.
          </h1>

          <p className="text-xl">
            Tasarım araçları, front-end teknolojileri, sokak fotoğrafçılığı ve
            tipografi gibi konularla yakından ilgileniyorum.
          </p>

          <p className="text-xl">
            Sektördeki eski teknoloji ve alışkanlıkları yenilerle değiştirmek
            için youtube kanalımda modern türkçe içerikler üretiyorum.
          </p>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </div>

      <div className="c-large mt-40">
        <Photos data={photos} />
        {/*<NextImage
          src="/photos/i-am.jpg"
          alt="Adem ilter"
          width={1433}
          height={1018}
          layout="responsive"
        />*/}
      </div>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const photos = await unsplash.getPhotos(12);

  return {
    props: {
      photos,
    },
    revalidate: ms("1d") / 1000,
  };
}
