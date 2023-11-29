"use client";

import Script from "next/script";

export default async function MeetPage() {
  return (
    <div className="grid place-items-center">
      <Script
        src="https://widgets.superpeer.com/widget.js"
        strategy="beforeInteractive"
      />
      <Script id="superpper">
        {`new Superpeer.Widget({
              embed: {
                type: "inline",
                wrapperSelector: "#sp-widget-wrapper",
              },
              config: { username: "adem", serviceSlug: "hey" },
            });`}
      </Script>

      <div id="sp-widget-wrapper" />
    </div>
  );
}
