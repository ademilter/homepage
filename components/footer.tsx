import React from "react";
import A from "components/a";
import Text from "./text";

function Footer() {
  return (
    <footer className="mt-40 pb-14">
      <div className="c-small">
        <Text dim={2}>
          Bu web sitesinin kaynak kodlarına{" "}
          <A
            href="https://github.com/ademilter/homepage"
            className="underline underline-offset-1"
          >
            Github üzerinden
          </A>{" "}
          ulaşabilirsiniz.
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
