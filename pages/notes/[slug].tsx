import { allNotes, Note } from "contentlayer/generated";
import PageTransition from "components/page-transition";
import Head from "next/head";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "components/mdx-components";

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

        <article className="post c-small">
          <header>
            <h1 className="text-3xl font-semibold text-highlight">
              {note.title}
            </h1>

            <div className="mt-2">
              <time dateTime={note.date}>
                {format(parseISO(note.date), "LLLL d, yyyy")}
              </time>
              <span>·</span>
              <span>{note.readingTime.text}</span>
            </div>
          </header>

          <div className="post-body leading-relaxed mt-10">
            <Component
              components={{
                ...MDXComponents,
                h2: (props) => {
                  return (
                    <h2
                      className="text-2xl font-semibold leading-tight text-highlight"
                      {...props}
                    />
                  );
                },
                h3: (props) => {
                  return (
                    <h3
                      className="text-xl font-semibold leading-tight text-highlight"
                      {...props}
                    />
                  );
                },
                h4: (props) => {
                  return (
                    <h4
                      className="text-lg font-semibold leading-snug text-highlight"
                      {...props}
                    />
                  );
                },
                h5: (props) => {
                  return (
                    <h5 className="font-semibold text-highlight" {...props} />
                  );
                },
              }}
            />
          </div>
        </article>

        <style global jsx>{`
          .post-body > * {
            margin-bottom: 1.5rem;
          }

          .post-body a.anchor:after {
            content: "#";
          }

          .post-body a.anchor {
            visibility: hidden;
            position: absolute;
            -webkit-text-decoration-line: none;
            text-decoration-line: none;
            margin-left: -1em;
            padding-right: 0.5em;
            cursor: pointer;
          }

          .post-body :hover > .anchor {
            visibility: visible;
          }

          .post-body :where(h2, h3, h4) {
            scroll-margin-top: 2rem;
          }

          .post-body .sp-cm {
            padding: 0;
          }

          .post-body .cm-editor {
            font-family: "JetBrains Mono", "JetBrainsMono", monospace;
            border-radius: 1rem;
          }

          .post-body .cm-editor .cm-scroller {
            padding: 1rem 0.2rem;
            font-family: inherit;
          }

          .post-body .cm-editor .cm-scroller::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </PageTransition>
    </>
  );
}
