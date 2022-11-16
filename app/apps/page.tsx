import type { IApp } from "@/types/index";
import Container from "@/components/container";
import Title from "@/components/title";
import Apps from "@/components/apps";

export const revalidate = 86400; // 60*60*24 = 86400

async function fetchData() {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Apps`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  );
  return res.json();
}

export default async function AppsPage() {
  const data = await fetchData();

  const apps: IApp[] = data.records.map((r) => {
    return { id: r.id, createdTime: r.createdTime, ...r.fields };
  });

  return (
    <Container>
      <Title>
        Uzun süredir kullandığım ve memnun kaldığım uygulamaların listesi.
      </Title>

      <Apps data={apps} />
    </Container>
  );
}
