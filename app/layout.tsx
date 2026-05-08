import type { Metadata } from "next";
import Script from "next/script";
import ScrollToTop from "./ScrollToTop";
import FadeInOnScroll from "./FadeInOnScroll";

const title = "Christian & Lyn Zei's Wedding — June 20, 2026 in Olongapo";
const description =
  "Join us in celebrating the wedding of Christian & Lyn Zei on Saturday, June 20, 2026 at San Roque Chapel, Olongapo City. RSVP today!";

const rawSiteUrl = "https://christianlynzeiweds.com";

export const metadata: Metadata = {
  metadataBase: new URL(rawSiteUrl),
  title,
  description,
  keywords: [
    "Christian and Lyn Zei",
    "wedding",
    "June 20 2026",
    "San Roque Chapel",
    "Olongapo",
  ],
  authors: [{ name: "Christian & Lyn Zei" }],
  icons: {
    icon: [
      { url: "/img/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/favicon.ico" },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "Christian & Lyn Zei's Wedding",
    title,
    description,
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/img/og.jpg",
        width: 1200,
        height: 630,
        alt: "Christian & Lyn Zei",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/img/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-100">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@400;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@400;600;700&display=swap"
        />
        <link rel="preload" href="/css/style.min.css" as="style" />
        <link rel="preload" href="/js/script.min.js" as="script" />
        <link rel="stylesheet" href="/css/style.min.css" />
        <style>{`
          section[id] { scroll-margin-top: 100px; }

          .fade-in-section {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.7s ease-out, transform 0.7s ease-out;
            will-change: opacity, transform;
          }
          .fade-in-section.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
          @media (prefers-reduced-motion: reduce) {
            .fade-in-section,
            .fade-in-section.is-visible {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
            }
          }

          .navbar-toggler {
            background-image: none !important;
            padding: 0.85rem 0.85rem !important;
            align-items: center;
            justify-content: center;
          }
          @media (max-width: 991.98px) {
            .navbar-toggler {
              display: inline-flex !important;
            }
          }
          @media (min-width: 992px) {
            .navbar-expand-lg .navbar-toggler {
              display: none !important;
            }
          }
          .navbar-toggler .navbar-toggler-anim {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 26px;
            height: 18px;
          }
          .navbar-toggler .navbar-toggler-anim > span {
            display: block;
            width: 100%;
            height: 2.5px;
            background-color: #fff;
            border-radius: 2px;
            transform-origin: center;
            transition: transform 0.3s ease, opacity 0.2s ease;
          }
          .navbar-toggler[aria-expanded="true"] .navbar-toggler-anim > span:nth-child(1) {
            transform: translateY(7.75px) rotate(45deg);
          }
          .navbar-toggler[aria-expanded="true"] .navbar-toggler-anim > span:nth-child(2) {
            opacity: 0;
          }
          .navbar-toggler[aria-expanded="true"] .navbar-toggler-anim > span:nth-child(3) {
            transform: translateY(-7.75px) rotate(-45deg);
          }

          .scroll-to-top {
            position: fixed;
            right: 1.25rem;
            bottom: 1.25rem;
            width: 50px;
            height: 50px;
            padding: 0;
            border: none;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 4px 14px rgba(0,0,0,0.15);
            cursor: pointer;
            z-index: 1040;
            opacity: 0;
            transform: translateY(12px);
            pointer-events: none;
            transition: opacity 0.25s ease, transform 0.25s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          .scroll-to-top[data-visible="true"] {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
          .scroll-to-top svg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
          }
          .scroll-to-top-arrow {
            position: relative;
            display: block;
            width: 10px;
            height: 10px;
            border-top: 2px solid #722F37;
            border-left: 2px solid #722F37;
            transform: translateY(2px) rotate(45deg);
          }
          .scroll-to-top:hover .scroll-to-top-arrow {
            transform: translateY(0) rotate(45deg);
            transition: transform 0.2s ease;
          }

        `}</style>
      </head>
      <body id="page-top" className="overflow-x-hidden w-100">
        {children}
        <ScrollToTop />
        <FadeInOnScroll />
        <Script src="/js/script.min.js" strategy="afterInteractive" />
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
