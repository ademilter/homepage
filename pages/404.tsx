import PageTransition from "@/components/page-transition";
import Container from "@/components/container";

function Error() {
  return (
    <PageTransition title="404">
      <Container>
        <p className="text-4xl">404</p>
      </Container>
    </PageTransition>
  );
}

export default Error;
