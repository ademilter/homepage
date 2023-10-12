import type { ITool } from "@/types";
import Container from "@/components/container";
import Title from "@/components/title";
import Tools from "@/components/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Araçlar",
  description: `Gün içinde ve çalışma hayatında sürekli kullandığım araçların listesi. 
    Bana yaşattıkları deneyim üzerinden puan ve yorumumu ekledim.`,
};

async function fetchData() {
  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Tools`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
      },
    },
  );
  const data = await response.json();
  return data.records.filter((r: ITool) => !r.fields.draft);
}

export default async function ToolsPage() {
  const data: ITool[] = await fetchData();

  return (
    <>
      <Container>
        <Title>{metadata.description}</Title>
      </Container>

      <Tools data={data} />
    </>
  );
}
