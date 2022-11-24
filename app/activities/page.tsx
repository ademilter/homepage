import Container from "@/components/container";
import Title from "@/components/title";
import Raindrop from "@/lib/raindrop";
import ALink from "@/components/link";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { tr } from "date-fns/locale";
import { ILink } from "@/types/index";

export const revalidate = 7200; // 60*60*3

async function fetchData() {
  const raindrop = new Raindrop();

  return raindrop.multipleRaindrops({
    id: 29255874,
  });
}

export default async function ActivitiesPage() {
  const data: ILink[] = await fetchData();

  return (
    <Container>
      <Title>-</Title>

      <div className="mt-10 divide-y divide-zinc-100 dark:divide-zinc-800">
        {data.map((activity) => (
          <article key={activity._id} className="py-4 flex items-center">
            <div className="w-40">
              <img
                className="w-full block"
                src={activity.cover}
                alt={activity.title}
              />
            </div>
            <div>
              <h3 className="shine font-semibold">
                <ALink href={activity.link}>{activity.title}</ALink>
              </h3>

              <div className="mt-1 flex items-center space-x-2">
                <span>{activity.domain}</span>
                <span>•</span>
                <span>
                  {formatDistanceToNowStrict(parseISO(activity.created), {
                    addSuffix: true,
                    locale: tr,
                  })}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
