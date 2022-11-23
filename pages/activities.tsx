import PageTransition from "@/components/page-transition";
import Container from "@/components/container";
import Title from "@/components/title";
import Raindrop2, { Link } from "@/lib/raindrop2";

export default function AppsPage({ data }: { data: Link[] }) {
  console.log(data);
  return (
    <PageTransition title="Etkinlikler" description="-">
      <Container>
        <Title>
          Uzun süredir kullandığım ve memnun kaldığım uygulamaların listesi.
        </Title>

        {/*<div className="mt-10 divide-y divide-zinc-100 dark:divide-zinc-800">
          {data.map((activity) => (
            <div key={activity.id}>
              <div>{activity.title}</div>
              <div>{activity.note}</div>
            </div>
          ))}
        </div>*/}
      </Container>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const raindrop = new Raindrop2();

  const collection = await raindrop.multipleRaindrops({
    id: 15611214,
    perPage: 1,
  });

  return {
    props: {
      data: collection,
    },
    revalidate: 60 * 60 * 24,
  };
}
