import React from "react";
import { StyleLink } from "@/components/link";
import Container from "@/components/container";

export default function Footer() {
  return (
    <footer className="mt-40">
      <Container>
        <p>
          Bu web sitesinin kaynak kodlarına{" "}
          <StyleLink href="https://github.com/ademilter/homepage">
            Github üzerinden
          </StyleLink>{" "}
          ulaşabilirsiniz.
        </p>
      </Container>
    </footer>
  );
}
