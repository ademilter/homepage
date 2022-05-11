import { allNotes, Note } from "contentlayer/generated";
import PageTransition from "components/page-transition";
import Head from "next/head";
import { format, parseISO } from "date-fns";
import PageTitle from "components/page-title";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function getStaticPaths() {
  const paths = allNotes.map((note: Note) => ({ params: { slug: note.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const note: Note = allNotes.find((note: Note) => note.slug === params.slug);

  if (!note) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }

  return {
    props: {
      note,
    },
  };
}

export default function NotePage({ note }: { note: Note }) {
  const Component = useMDXComponent(note.body.code);

  return (
    <>
      <PageTransition>
        <Head>
          <title>Notes - Adem ilter</title>
        </Head>

        <div className="c-small">
          <PageTitle>{note.title}</PageTitle>

          <time dateTime={note.date}>
            {format(parseISO(note.date), "LLLL d, yyyy")}
          </time>
          <span>·</span>
          <span>{note.readingTime.text}</span>
        </div>

        <div className="c-small mt-20 post">
          <Component />

          <style global jsx>{`
            .post {
              line-height: 1.7;
            }

            .post > * {
              margin-bottom: 2rem;
            }

            .post > .rehype-code-title {
              margin-bottom: 0;
              padding: 0.5rem 1rem;
              border-radius: 0.5em 0.5em 0 0;
              font-size: 0.9rem;
              color: rgb(255 255 255 / 60%);
              border: 1px solid rgb(255 255 255 / 10%);
              border-bottom: 0;
            }

            .post .rehype-code-title + pre {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }

            .post a {
              text-decoration: underline;
              text-decoration-color: rgb(255 255 255 / 40%);
            }

            .post a.anchor:after {
              content: "#";
              color: rgb(255 255 255 / 50%);
            }

            .post a.anchor {
              visibility: hidden;
              position: absolute;
              -webkit-text-decoration-line: none;
              text-decoration-line: none;
              margin-left: -1em;
              padding-right: 0.5em;
              cursor: pointer;
            }

            .post :hover > .anchor {
              visibility: visible;
            }

            .post img {
              max-width: 100%;
              display: block;
              margin: 0 auto;
            }

            .post ul,
            .post ol {
              padding-left: 2rem;
            }

            .post :not(pre) > code {
              font-size: 0.86rem;
              white-space: pre;
              word-spacing: normal;
              word-break: normal;
              word-wrap: normal;
              border: 1px solid rgb(255 255 255 / 20%);
              padding: 0.2em 0.3em;
              border-radius: 0.4rem;
            }

            .post :where(h2, h3, h4, h5) {
              scroll-margin-top: 2rem;
            }
            .post h2,
            .post h3,
            .post h4,
            .post h5 {
              color: white;
              font-weight: bold;
              line-height: 1.4;
            }
            .post > * + h2,
            .post > * + h3 {
              margin-top: 3rem;
            }
            .post > h2 {
              font-size: 2rem;
            }
            .post > h3 {
              font-size: 1.6rem;
            }
            .post > h4 {
              font-size: 1.2rem;
            }
          `}</style>
        </div>
      </PageTransition>
    </>
  );
}
