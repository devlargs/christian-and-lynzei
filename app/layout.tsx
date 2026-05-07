import type { Metadata } from "next";
import Script from "next/script";

const description =
  "Join us in celebrating the wedding of Christian & Lynzei on June 20, 2026 at San Roque Chapel, Olongapo City.";

export const metadata: Metadata = {
  title: "Christian & Lynzei Wedding",
  description,
  keywords: [
    "Christian and Lynzei",
    "wedding",
    "June 20 2026",
    "San Roque Chapel",
    "Olongapo",
  ],
  authors: [{ name: "Christian & Lynzei" }],
  icons: {
    icon: [
      { url: "/img/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/favicon.ico" },
    ],
  },
  openGraph: {
    type: "website",
    title: "Christian & Lynzei Wedding",
    description,
    images: [
      {
        url: "/images/the-couple-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Christian & Lynzei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian & Lynzei Wedding",
    description,
    images: ["/images/the-couple-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-100 w-100">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" href="/css/style.min.css" as="style" />
        <link rel="preload" href="/js/script.min.js" as="script" />
        <link rel="stylesheet" href="/css/style.min.css" />
        <style>{`section[id] { scroll-margin-top: 100px; }`}</style>
      </head>
      <body id="page-top" className="h-100 overflow-x-hidden w-100">
        {children}
        <Script src="/js/script.min.js" strategy="beforeInteractive" />
        <Script id="nav-close-on-click" strategy="afterInteractive">{`
          document.querySelectorAll('#navbar .nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
              var navbar = document.getElementById('navbar');
              if (navbar && navbar.classList.contains('show')) {
                var toggler = document.querySelector('.navbar-toggler');
                if (toggler) toggler.click();
              }
            });
          });
        `}</Script>
        <Script id="hide-preloader" strategy="afterInteractive">{`
          (function () {
            function hide() {
              var p = document.querySelector('.preloader');
              if (p) { p.style.display = 'none'; }
            }
            if (document.readyState === 'complete') {
              hide();
            } else {
              window.addEventListener('load', hide);
            }
            setTimeout(hide, 2000);
          })();
        `}</Script>
      </body>
    </html>
  );
}
