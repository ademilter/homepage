import React from "react";
import Container from "@/components/container";

export default function Footer() {
  return (
    <footer className="mt-40">
      <Container>
        <p>
          Bu web sitesinin kaynak kodlarına{" "}
          <a href="https://github.com/ademilter/homepage">Github üzerinden</a>{" "}
          ulaşabilirsiniz.
        </p>
      </Container>
    </footer>
  );
}
