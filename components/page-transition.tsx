import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { META } from "@/lib/helper";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

const PageTransition = ({ children, ...pageMeta }) => {
  const router = useRouter();

  const meta = {
    title: pageMeta?.title
      ? `${pageMeta.title} – ${META.name}`
      : `${META.name} – Designer, developer, creator.`,
    description: `${META.description}`,
    url: `${META.url}${router.asPath}`,
    ...pageMeta,
  };

  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ademilter" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:url" content={meta.url} />
      </Head>

      <div className="flex min-h-screen flex-col pt-10 pb-14">
        <Header />
        <main className="mt-10 flex-grow sm:mt-20">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageTransition;
