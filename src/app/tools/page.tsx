import type { ITool } from "@/types";
import Container from "@/components/container";
import Tools from "@/components/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Araçlar",
  description: `Gün içinde ve çalışma hayatında sürekli kullandığım araçların listesi. 
    Bazı cihazlara yorum ekledim.`,
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
        <h1 className="text-xl sm:text-2xl">{metadata.description}</h1>
      </Container>

      <Container className="mt-16">
        <Tools data={data} />
      </Container>
    </>
  );
}
