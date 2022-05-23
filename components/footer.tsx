import React from "react";
import A from "components/a";

function Footer() {
  return (
    <footer className="mt-40 pb-14">
      <div className="c-small">
        <p>
          Bu web sitesinin kaynak kodlarına{" "}
          <A href="https://github.com/ademilter/homepage">Github üzerinden</A>{" "}
          ulaşabilirsiniz.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
