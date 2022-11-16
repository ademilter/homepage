import type { ITool } from "@/types/index";
import Container from "@/components/container";
import Title from "@/components/title";
import Tools from "@/components/tools";

export const revalidate = 86400; // 60*60*24 = 86400

async function fetchData() {
  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Tools`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data.records.map((r) => {
    return { id: r.id, createdTime: r.createdTime, ...r.fields };
  });
}

export default async function ToolsPage() {
  const data: ITool[] = await fetchData();

  return (
    <>
      <Container>
        <Title>
          Gün içinde ve çalışma hayatında sürekli kullandığım araçların listesi.
          Bana yaşattıkları deneyim üzerinden puan ve yorumumu ekledim.
        </Title>
      </Container>

      <Tools data={data} />
    </>
  );
}
