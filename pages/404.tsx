import Head from "next/head";
import PageTransition from "@/components/page-transition";
import Container from "@/components/container";

function Error() {
  return (
    <PageTransition>
      <Head>
        <title>404</title>
      </Head>

      <Container>
        <p className="text-4xl">404</p>
      </Container>
    </PageTransition>
  );
}

export default Error;
