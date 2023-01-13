import type { IApp } from "@/types/index";
import Container from "@/components/container";
import Title from "@/components/title";
import Apps from "@/components/apps";
import { ITool } from "@/types/index";

export const revalidate = 86400; // 60*60*24

async function fetchData() {
  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Apps`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  const dataFilterByStatus = data.records.filter((r: IApp) => !r.fields.draft);
  return dataFilterByStatus;
}

export default async function AppsPage() {
  const data = await fetchData();

  return (
    <Container>
      <Title>
        Uzun süredir kullandığım ve memnun kaldığım uygulamaların listesi.
      </Title>

      <Apps data={data} />
    </Container>
  );
}
