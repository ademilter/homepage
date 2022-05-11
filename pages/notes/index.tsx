import { compareDesc, format, parseISO } from "date-fns";
import { allNotes, Note } from "contentlayer/generated";
import PageTransition from "components/page-transition";
import Head from "next/head";
import PageTitle from "components/page-title";
import NextLink from "next/link";
import { tr } from "date-fns/locale";

export async function getStaticProps() {
  const notes: Note[] = allNotes.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return {
    props: {
      notes: notes.map((note: Note) => {
        const { body, type, _raw, ...rest } = note;
        return rest;
      }),
    },
  };
}

export default function NotesPage({ notes }: { notes: Note[] }) {
  return (
    <>
      <PageTransition>
        <Head>
          <title>Notes - Adem ilter</title>
        </Head>

        <div className="c-small">
          <PageTitle>Notlarım</PageTitle>
        </div>

        <div className="c-small mt-20">
          {notes.map((note: Note) => {
            return (
              <article key={note._id}>
                <h3 className="font-semibold text-highlight">
                  <NextLink href={`/notes/${note.slug}`}>
                    <a>{note.title}</a>
                  </NextLink>
                </h3>
                <footer className="flex items-center space-x-2 text-zinc-500">
                  <time dateTime={note.date}>
                    {format(parseISO(note.date), "d LLLL yyyy", {
                      locale: tr,
                    })}
                  </time>
                  <span className="opacity-50">•</span>
                  <span>{note.readingTime.text}</span>
                </footer>
              </article>
            );
          })}
        </div>
      </PageTransition>
    </>
  );
}
