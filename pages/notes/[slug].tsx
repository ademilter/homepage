import { allNotes, Note } from "contentlayer/generated";
import PageTransition from "components/page-transition";
import Head from "next/head";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "components/mdx-components";
import { tr } from "date-fns/locale";

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
            <h1 className="text-highlight text-3xl font-semibold">
              {note.title}
            </h1>

            <div className="mt-2 flex items-center space-x-2 text-zinc-500">
              <time dateTime={note.date}>
                {format(parseISO(note.date), "d LLLL yyyy", {
                  locale: tr,
                })}
              </time>
              <span className="opacity-50">·</span>
              <span>{note.readingTime.text}</span>
            </div>
          </header>

          <div className="post-body mt-10 leading-relaxed">
            <Component
              components={{
                ...MDXComponents,
                h2: (props) => {
                  return (
                    <h2
                      className="text-highlight text-2xl font-semibold leading-tight"
                      {...props}
                    />
                  );
                },
                h3: (props) => {
                  return (
                    <h3
                      className="text-highlight text-xl font-semibold leading-tight"
                      {...props}
                    />
                  );
                },
                h4: (props) => {
                  return (
                    <h4
                      className="text-highlight text-lg font-semibold leading-snug"
                      {...props}
                    />
                  );
                },
                h5: (props) => {
                  return (
                    <h5 className="text-highlight font-semibold" {...props} />
                  );
                },
              }}
            />
          </div>
        </article>

        <style global jsx>{`
          .post-body > * {
            margin-bottom: 2rem;
          }

          .post-body :where(h2, h3, h4) {
            scroll-margin-top: 2rem;
          }

          .post-body pre {
            font-size: 0.9rem;
            margin-bottom: 2rem;
          }

          .post-body pre[class*="language-"]::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </PageTransition>
    </>
  );
}
