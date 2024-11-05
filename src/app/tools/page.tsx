import Container from "@/components/container";
import { Metadata } from "next";
import Tools from "./tools";

export const metadata: Metadata = {
  title: "Araçlar",
  description: `Gün içinde ve çalışma hayatında sürekli kullandığım araçların listesi.`,
};

export default async function ToolsPage() {
  return (
    <>
      <Container>
        <h1 className="font-display text-2xl">{metadata.description}</h1>
      </Container>

      <Tools />
    </>
  );
}
