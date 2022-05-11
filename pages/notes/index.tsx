import { compareDesc } from "date-fns";
import { allNotes, Note } from "contentlayer/generated";
import PageTransition from "components/page-transition";
import Head from "next/head";
import PageTitle from "components/page-title";
import NextLink from "next/link";

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
              <div key={note._id}>
                <NextLink href={`/notes/${note.slug}`}>
                  <a>{note.title}</a>
                </NextLink>
              </div>
            );
          })}
        </div>
      </PageTransition>
    </>
  );
}
