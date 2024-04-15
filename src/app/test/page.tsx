import Container from "@/components/container";
import { auth } from "@/auth";
import { Session } from "@/types";
import BookmarkCard from "@/components/bookmark-card";

export default async function AppsPage() {
  const session = (await auth()) as Session;

  console.log(session);

  return (
    <Container>
      <h1 className="text-xl sm:text-2xl">Test</h1>

      <div>{session.user?.email}</div>

      <BookmarkCard
        week={false}
        score={0}
        bookmark={{
          _id: 254677638,
          type: "link",
          created: "2021-03-28T01:37:53.050Z",
          title: "Figma to React – Convert Figma designs to React code",
          link: "https://figma-to-react.vercel.app/",
          excerpt:
            "Convert Figma designs to React code (React Native and Next.js)",
          domain: "figma-to-react.vercel.app",
          tags: ["history", "frontend", "figma", "react"],
          cover:
            "https://rdl.ink/render/https%3A%2F%2Ffigma-to-react.vercel.app%2F",
          media: [],
          note: "",
        }}
      />
      <input type="text" />
    </Container>
  );
}
