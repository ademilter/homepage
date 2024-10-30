import { allTools, Tool } from "@content";
import Container from "@/components/container";
import { Metadata } from "next";
import Tools from "@/components/tools";

export const metadata: Metadata = {
  title: "Araçlar",
  description: `Gün içinde ve çalışma hayatında sürekli kullandığım araçların listesi. 
    Bazı cihazlara yorum ekledim.`,
};

export default async function ToolsPage() {
  const data: Tool[] = allTools.filter((o) => !Boolean(o.draft));

  return (
    <>
      <Container>
        <h1 className="text-xl sm:text-2xl">{metadata.description}</h1>
      </Container>

      <Container className="mt-16">
        <Tools />
      </Container>
    </>
  );
}
