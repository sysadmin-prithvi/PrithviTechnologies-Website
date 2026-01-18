import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "xequals.ai - Transform Your AI with High-Quality Data Annotation",
  description: "Enterprise-grade annotation platform for image, video, text, and audio data. Scale your ML projects with precision and speed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="8583bf96-2f9c-4409-95e6-462dc5feb282"
        />
        <Script id="gh-pages-spa-restore" strategy="beforeInteractive">{`
          (function () {
            try {
              var l = window.location;
              if (l.search && l.search.indexOf('?/') === 0) {
                var rest = l.search.substring(2);
                var amp = rest.indexOf('&');
                var path = amp > -1 ? rest.slice(0, amp) : rest;
                var q = amp > -1 ? rest.slice(amp + 1).replace(/~and~/g, '&') : '';
                path = path.replace(/^\/+/, '');
                var base = l.pathname;
                if (!base.endsWith('/')) base += '/';
                var newUrl = base + path + (q ? ('?' + q) : '') + l.hash;
                if (newUrl !== (l.pathname + l.search + l.hash)) {
                  window.history.replaceState(null, '', newUrl);
                }
              }
            } catch (e) { /* noop */ }
          })();
        `}</Script>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}