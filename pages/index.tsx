import PageTransition from "components/page-transition";
import Social from "components/social";
import Text from "components/text";
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
          <Text as="h1" size="pageTitle" className="font-semibold">
            Ben Adem ilter.
            <br />
            İstanbul'da yaşayan Dijital Ürün Tasarımcısıyım.
          </Text>

          <Text as="p" size="large" dim={1}>
            Tasarım araçları, front-end teknolojileri, sokak fotoğrafçılığı ve
            tipografi gibi konularla yakından ilgileniyorum.
          </Text>

          <Text as="p" size="large" dim={1}>
            Sektördeki eski teknoloji ve alışkanlıkları yenilerle değiştirmek
            için youtube kanalımda modern türkçe içerikler üretiyorum.
          </Text>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </div>

      <div className="c-large mt-20">
        <Photos data={photos} />
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
