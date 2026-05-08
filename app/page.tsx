/* eslint-disable @next/next/no-img-element */
import { CLOUDFRONT_URL, PHOTO_GALLERY_IMAGES } from "@/constants/cloudfront";
import RsvpForm from "./RsvpForm";
import Image from "next/image";

type PartyMember = { name: string; role?: string };
type PartySection = { title: string; members: PartyMember[] };

const BRIDE_PARTY: PartyMember[] = [
  { name: "Kimberly Beromilla", role: "Maid of Honor" },
  { name: "Nicole Anne Granada", role: "Maid of Honor" },
  { name: "Leira Manalansan", role: "Bridesmaid" },
];

const GROOM_PARTY: PartyMember[] = [
  { name: "Jeremy Saing", role: "Best Man" },
  { name: "Ralph Largo", role: "Best Man" },
  { name: "Christian Jade Santos", role: "Groomsman" },
];

// Add or remove sections here — each one renders as a centered, titled block.
const ADDITIONAL_SECTIONS: PartySection[] = [
  {
    title: "Mother of the Groom",
    members: [{ name: "Mrs. Susan M. Tacazon" }],
  },
  {
    title: "Parents of the Bride",
    members: [
      { name: "Mr. Teodoro S. Santos Jr." },
      { name: "Mrs. Gilda M. Santos" },
    ],
  },
  {
    title: "Principal Sponsors",
    members: [
      { name: "Mr. Rainier Vidal" },
      { name: "Mrs. Nancy Vidal" },
      { name: "Mr. Norbert Lavarias" },
      { name: "Ms. Felegina Bugay" },
      { name: "Mr. Memer Tatel" },
      { name: "Mrs. Sarah Tatel" },
      { name: "Mr. Roberto Estrella" },
      { name: "Mrs. Grace Estrella" },
      { name: "Mr. Michael Magat" },
      { name: "Mrs. Myrna Magat" },
      { name: "Mr. Robert Oli" },
      { name: "Mrs. Emerlina Oli" },
      { name: "Mr. Alfredo Santos" },
      { name: "Mrs. Eva Unay" },
      { name: "Mr. Francisco Garcia" },
      { name: "Mrs. Elvira Coquilla" },
      { name: "Mr. Ariel Manalansan" },
      { name: "Mrs. Elma Española" },
      { name: "Mr. Rolando Reyes" },
      { name: "Mrs. Rebecca Soliman" },
      { name: "Mrs. Loida Beltran" },
      { name: "Mrs. Ruth Rada" },
      { name: "Mrs. Elsie Cabral" },
    ],
  },
  {
    title: "Candle Sponsors",
    members: [{ name: "Gem Avy Montalla" }, { name: "Ana Marimar Francisco" }],
  },
  {
    title: "Veil Sponsors",
    members: [{ name: "Paul Fruelda" }, { name: "Yvonne Ivy Magat" }],
  },
  {
    title: "Cord Sponsors",
    members: [{ name: "Mark Alglo Villanueva" }, { name: "Erica Mae Santos" }],
  },
  {
    title: "Ring Bearer",
    members: [{ name: "Ramone Ymmanuel Espinorio" }],
  },
  {
    title: "Bible Bearer",
    members: [{ name: "Ram Felix Valencia" }],
  },
  {
    title: "Coin Bearer",
    members: [{ name: "Giann Miguel Valencia" }],
  },
  {
    title: "Flower Girl",
    members: [{ name: "Mireya Yzha Espinorio" }],
  },
];

function PartyList({ members }: { members: PartyMember[] }) {
  return (
    <ul className="list-unstyled">
      {members.map((m, i) => (
        <li key={i} className="mb-3">
          <h3 className="font-alt">{m.name}</h3>
          {m.role && (
            <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
              {m.role}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

function PartySectionBlock({ section }: { section: PartySection }) {
  const useGrid = section.members.length > 4;
  return (
    <div className="col-12 col-md-11 col-lg-10 text-center mb-4">
      <span
        className="divider divider-floral d-block mb-3 mx-auto"
        style={{ opacity: 0.7 }}
      ></span>
      <h3 className="font-alt fs-3 text-primary mb-3">{section.title}</h3>
      {useGrid ? (
        <div
          className="mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "1rem",
            rowGap: "0.75rem",
            maxWidth: 720,
          }}
        >
          {section.members.map((m, i) => (
            <div key={i} className="text-center">
              <h3 className="font-alt fs-5 m-0">{m.name}</h3>
              {m.role && (
                <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
                  {m.role}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{ columnGap: "3rem", rowGap: "0.75rem" }}
        >
          {section.members.map((m, i) => (
            <div key={i} className="text-center">
              <h3 className="font-alt fs-5 m-0">{m.name}</h3>
              {m.role && (
                <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
                  {m.role}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Preloader Start */}
      <div className="preloader bg-white h-100 position-fixed w-100">
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 100 100"
          y="0px"
          x="0px"
          className="position-absolute start-50 top-50 translate-middle"
        >
          <g>
            <path
              className="anim-heart"
              d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z"
              strokeMiterlimit={10}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={3.5}
              stroke="#000000"
              fill="#C97D8A"
            />
            <path
              className="anim-heart-sm"
              d="M89.63,70.9c-3.57,10.15-22.21,12.84-22.21,12.84s-12.84-13.77-9.26-23.92c4.14-11.76,19.75-5.86,15.74,5.54 C77.78,54.33,93.78,59.13,89.63,70.9z"
              strokeMiterlimit={10}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={3.5}
              stroke="#000000"
              fill="#722F37"
            />
          </g>
        </svg>
      </div>
      {/* Preloader End */}

      {/* Header Start */}
      <header className="fixed-top">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container align-items-center">
            <div className="navbar-brand align-items-center d-flex d-lg-none me-0">
              <Image
                width={187}
                height={73}
                src={`${CLOUDFRONT_URL}/117dcec2-bfe2-4b9f-b438-8bfd3cf88b0e.png`}
                alt="Logo"
              />
            </div>

            <button
              className="navbar-toggler bg-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-anim" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            <div
              id="navbar"
              className="collapse navbar-collapse justify-content-lg-center"
            >
              <ul className="navbar-nav pt-3 pt-lg-0">
                <li className="nav-item me-3">
                  <a className="nav-link page-scroll" href="#the-couple">
                    The Couple
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link page-scroll" href="#wedding-event">
                    Events
                  </a>
                </li>
              </ul>

              <div className="navbar-brand d-none d-lg-block mx-3 mx-xl-4 position-relative text-center">
                <img
                  width={180}
                  height={123}
                  src="/img/navbar-brand.png"
                  alt="Logo"
                  className="mt-4 position-absolute start-0 top-0"
                />
              </div>

              <ul className="navbar-nav">
                <li className="nav-item me-3">
                  <a className="nav-link page-scroll" href="#photos">
                    Photos
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link page-scroll" href="#wedding-gifts">
                    Wedding Gifts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#rsvp">
                    RSVP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Header End */}

      <main id="main">
        <span className="spacer d-block w-100"></span>

        {/* Hero */}
        <section id="hero" className="bg-secondary-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0 position-relative text-center z-2">
                <div className="border border-2 border-primary d-inline-block mb-4 px-4 py-2">
                  <h2 className="font-alt fs-1 m-0 text-primary">
                    Christian & Lyn Zei
                  </h2>
                </div>
                <h3 className="fs-1 font-alt mb-3">
                  Together with Their Families
                </h3>
                <p className="lead mb-5 text-body-secondary">
                  Request The Honor of Your Presence at Their Wedding Ceremony
                  and Reception June 20, 2026
                </p>
                <span className="divider divider-arrow"></span>
              </div>

              <div className="col-lg-6 order-lg-first position-relative">
                <div className="row justify-content-center justify-content-lg-start">
                  <div className="col-12 col-sm-10 col-md-8 col-lg-9">
                    <div className="position-relative z-2">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 500 685"
                        xmlns="http://www.w3.org/2000/svg"
                        className="position-relative z-2"
                      >
                        <defs>
                          <clipPath
                            id="clip-path-hero"
                            clipPathUnits="userSpaceOnUse"
                          >
                            <path
                              d="M165.836,1644.64C94.328,1209.04 90.753,779.697 165.349,357.564C180.459,272.058 246.591,204.825 331.662,187.446C599.258,132.777 869.097,133.687 1141.07,187.523C1228.32,204.794 1295.77,274.608 1309.15,362.538C1375.85,800.802 1379.67,1230.03 1311.42,1648.91C1297.09,1736.89 1228.64,1806.34 1140.92,1822.2C881.395,1869.15 613.861,1865.59 339.554,1819.32C250.208,1804.25 180.513,1734.05 165.836,1644.64Z"
                              transform="matrix(0.399961,0,0,0.399961,-44.3128,-58.0804)"
                            />
                          </clipPath>
                        </defs>
                        <foreignObject
                          clipPath="url(#clip-path-hero)"
                          width="100%"
                          height="100%"
                        >
                          <Image
                            src={`${CLOUDFRONT_URL}/31b59af9-73be-447f-b21d-70ce064a1e69.jpg`}
                            alt="The Couple"
                            // className="anim-zoom"
                            width={500}
                            height={685}
                            priority
                            loading="eager"
                            fetchPriority="high"
                          />
                        </foreignObject>
                      </svg>
                      <img
                        src="/img/shape-particle.svg"
                        alt=""
                        className="shape-particle end-0 position-absolute top-0 z-3"
                      />
                      <img
                        src="/img/shape-rect-the-couple-1.svg"
                        alt=""
                        className="shape-rect shape-rect-lg bottom-0 end-0 position-absolute z-1"
                      />
                    </div>
                  </div>
                </div>
                <img
                  src="/img/shape-rect-the-couple-3.svg"
                  alt=""
                  className="shape-rect d-md-none d-lg-block position-absolute start-0 top-0 z-1"
                />
              </div>
            </div>
          </div>
          <img
            src="/img/shape-wave-top-right.svg"
            alt=""
            className="shape-wave d-none d-lg-block end-0 position-absolute top-0 z-1"
          />
          <img
            src="/img/shape-wave-bottom-right-1.svg"
            alt=""
            className="shape-wave shape-wave-xl bottom-0 d-none d-lg-block end-0 position-absolute z-1"
          />
        </section>

        {/* The Couple */}
        <section id="the-couple" className="fade-in-section">
          <div className="container position-relative z-2">
            <div className="row mb-5 pb-lg-5">
              <div className="col-12 position-relative text-center z-2">
                <h2 className="font-alt fs-1 mb-3">The Happy Couple</h2>
                <p className="fs-5 mb-4 text-body-secondary">
                  A happy marriage is the union of two good forgivers.
                </p>
                <span className="divider divider-arrow"></span>
              </div>
            </div>

            <div className="row align-items-center gx-xl-5 justify-content-center">
              <div className="col-10 col-md-8 col-lg-5 col-xl-3 mb-5 mb-xl-0 text-center">
                <h3 className="font-alt">Lyn Zei Santos</h3>
                <p className="text-body-secondary">
                  I am just crazy about Christian. He has a truly amazing heart.
                </p>
              </div>

              <div className="col-10 col-md-8 col-xl-6 mb-5 mb-xl-0">
                <div className="position-relative z-2">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 624 456"
                    xmlns="http://www.w3.org/2000/svg"
                    className="position-relative z-2"
                  >
                    <defs>
                      <clipPath
                        id="clip-path-the-couple"
                        clipPathUnits="userSpaceOnUse"
                      >
                        <path
                          d="M122.297,1714.66C65.338,1367.69 62.491,1025.7 121.909,689.455C133.944,621.346 186.621,567.793 254.384,553.949C467.534,510.404 682.471,511.129 899.109,554.011C968.605,567.767 1022.33,623.377 1032.99,693.417C1086.12,1042.51 1089.16,1384.41 1034.8,1718.06C1023.38,1788.14 968.865,1843.46 898.991,1856.1C692.267,1893.49 479.166,1890.66 260.67,1853.8C189.503,1841.8 133.988,1785.88 122.297,1714.66Z"
                          transform="matrix(2.80689e-17,-0.457937,0.4584,2.80405e-17,-239.087,491.927)"
                        />
                      </clipPath>
                    </defs>
                    <foreignObject
                      clipPath="url(#clip-path-the-couple)"
                      width="100%"
                      height="100%"
                    >
                      <Image
                        src={`${CLOUDFRONT_URL}/2a3d1317-748b-4b75-ad77-db817fd91d1b.jpg`}
                        alt="The Couple"
                        width={624}
                        height={456}
                      />
                    </foreignObject>
                  </svg>
                  <img
                    src="/img/shape-particle.svg"
                    alt=""
                    className="shape-particle d-none d-md-block position-absolute start-0 top-0 z-3"
                  />
                  <img
                    src="/img/shape-heart-balloon-mrs.svg"
                    alt=""
                    className="shape-heart-balloon mt-4 position-absolute start-0 top-50 translate-middle-y z-2"
                  />
                  <img
                    src="/img/shape-heart-balloon-mr.svg"
                    alt=""
                    className="shape-heart-balloon end-0 position-absolute top-50 translate-middle-y z-2"
                  />
                </div>
              </div>

              <div className="col-10 col-md-8 col-lg-5 col-xl-3 text-center">
                <h3 className="font-alt">Christian Ray Tacazon</h3>
                <p className="text-body-secondary">
                  I&apos;m so excited to spend the rest of my life with You, Lyn
                  Zei.
                </p>
              </div>
            </div>
          </div>

          <img
            src="/img/shape-wave-top-left-1.svg"
            alt=""
            className="shape-wave shape-wave-sm d-none d-lg-block mt-5 position-absolute start-0 top-0 z-1"
          />
          <img
            src="/img/shape-wave-bottom-right-2.svg"
            alt=""
            className="shape-wave bottom-0 d-none d-lg-block end-0 position-absolute z-1"
          />
        </section>

        {/* Wedding Event */}
        <section id="wedding-event" className="bg-secondary-2 fade-in-section">
          <div className="container position-relative z-2">
            <div className="row mb-5 pb-lg-5">
              <div className="col-12 position-relative text-center z-2">
                <h2 className="font-alt fs-1 mb-3">The Wedding Event</h2>
                <p className="fs-5 mb-4 text-body-secondary">
                  If you have only one smile in you give it to the people you
                  love.
                </p>
                <span className="divider divider-arrow"></span>
              </div>
            </div>

            <div className="row gx-lg-5 justify-content-center">
              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mb-5 mb-xl-0">
                <div className="position-relative">
                  <div className="d-flex flex-column h-100 justify-content-between position-absolute start-0 text-center top-0 w-100">
                    <div className="mt-5 px-4">
                      <h3 className="font-alt">The Ceremony</h3>
                      <span className="divider divider-heart mb-3 mb-sm-4"></span>
                      <p className="mb-1 text-body-secondary">
                        Saturday, June 20th, 2026
                      </p>
                      <p className="text-body-secondary">
                        1:00 in the Afternoon
                      </p>
                      <p className="mb-1 text-body-secondary">
                        San Roque Chapel
                      </p>
                      <p className="mb-sm-4 text-body-secondary">
                        Dewey Ave, Subic Bay Freeport Zone
                      </p>
                      <span className="divider divider-floral d-none d-sm-block"></span>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/5iiT6ZgP5Lmrds1SA"
                      className="btn mx-auto"
                    >
                      <span>See Location</span>
                    </a>
                  </div>
                  <img
                    src="/img/shape-rect-wedding-event-1.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mb-5 mb-xl-0 mt-xl-5">
                <div className="position-relative">
                  <div className="d-flex flex-column h-100 justify-content-between position-absolute start-0 text-center top-0 w-100">
                    <div className="mt-5 px-4">
                      <h3 className="font-alt">The Reception</h3>
                      <span className="divider divider-heart mb-3 mb-sm-4"></span>

                      <p className="mb-1 text-body-secondary">
                        After Ceremony <br />
                        <br />
                      </p>
                      <p className="mb-1 text-body-secondary">
                        The Aurora Subic Hotel
                      </p>
                      <p className="mb-sm-4 text-body-secondary">
                        Canal Road Corner, Labitan St. SBFZ
                      </p>
                      <span className="divider divider-floral d-none d-sm-block"></span>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/1gnN3QTr5spdra9w7"
                      target="_blank"
                      rel="noreferrer"
                      className="btn mx-auto"
                    >
                      <span>See Location</span>
                    </a>
                  </div>
                  <img
                    src="/img/shape-rect-wedding-event-2.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <img
            src="/img/shape-rect-middle-left.svg"
            alt=""
            className="shape-events shape-rect shape-rect-lg d-none d-lg-block position-absolute start-0 top-50 translate-middle z-1"
          />
          <img
            src="/img/shape-wave-bottom-right-3.svg"
            alt=""
            className="shape-wave shape-wave-lg bottom-0 d-none d-lg-block end-0 position-absolute z-1"
          />
        </section>

        {/* Wedding Party */}
        <section
          id="wedding-party"
          className="position-relative fade-in-section"
        >
          <img
            src="/img/shape-particle.svg"
            alt=""
            aria-hidden="true"
            className="position-absolute z-0 d-none d-md-block"
            style={{ right: 20, top: 40, width: 200, opacity: 0.55 }}
          />
          <img
            src="/img/shape-wave-top-left-1.svg"
            alt=""
            aria-hidden="true"
            className="position-absolute start-0 z-0 d-none d-lg-block"
            style={{ top: "30%", width: 240, opacity: 0.45 }}
          />
          <img
            src="/img/shape-particle.svg"
            alt=""
            aria-hidden="true"
            className="position-absolute z-0 d-none d-md-block"
            style={{
              left: "50%",
              top: "55%",
              width: 150,
              opacity: 0.35,
              transform: "translateX(-50%)",
            }}
          />
          <div className="container position-relative z-2">
            <div className="row mb-5 pb-lg-5">
              <div className="col-12 position-relative text-center z-2">
                <h2 className="font-alt fs-1 mb-3">The Wedding Party</h2>
                <p className="fs-5 mb-4 text-body-secondary">
                  The highest happiness on earth is the happiness of marriage.
                </p>
                <span className="divider divider-arrow"></span>
              </div>
            </div>

            <div className="row gx-lg-5 justify-content-center">
              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mb-5 mb-lg-0 text-center">
                <div className="position-relative mb-5">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 624 456"
                    xmlns="http://www.w3.org/2000/svg"
                    className="position-relative z-2"
                  >
                    <defs>
                      <clipPath
                        id="clip-path-wedding-party-1"
                        clipPathUnits="userSpaceOnUse"
                      >
                        <path
                          d="M122.297,1714.66C65.338,1367.69 62.491,1025.7 121.909,689.455C133.944,621.346 186.621,567.793 254.384,553.949C467.534,510.404 682.471,511.129 899.109,554.011C968.605,567.767 1022.33,623.377 1032.99,693.417C1086.12,1042.51 1089.16,1384.41 1034.8,1718.06C1023.38,1788.14 968.865,1843.46 898.991,1856.1C692.267,1893.49 479.166,1890.66 260.67,1853.8C189.503,1841.8 133.988,1785.88 122.297,1714.66Z"
                          transform="matrix(2.80689e-17,-0.457937,0.4584,2.80405e-17,-239.087,491.927)"
                        />
                      </clipPath>
                    </defs>
                    <foreignObject
                      clipPath="url(#clip-path-wedding-party-1)"
                      width="100%"
                      height="100%"
                    >
                      <Image
                        src={`${CLOUDFRONT_URL}/af5efb8b-0ad6-4027-b769-7b6910bba505.jpg`}
                        alt="The Bride"
                        width={624}
                        height={456}
                      />
                    </foreignObject>
                  </svg>
                  <img
                    src="/img/shape-particle.svg"
                    alt=""
                    className="shape-particle d-none d-md-block position-absolute start-0 top-0 z-3"
                  />
                </div>

                <h3 className="display-5 font-alt">Lyn Zei Santos</h3>
                <p className="fs-5 fw-bold ls-2 mb-5 text-primary text-uppercase">
                  The Bride
                </p>

                <PartyList members={BRIDE_PARTY} />
              </div>

              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 text-center">
                <div className="position-relative mb-5">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 624 456"
                    xmlns="http://www.w3.org/2000/svg"
                    className="position-relative z-2"
                  >
                    <defs>
                      <clipPath
                        id="clip-path-wedding-party-2"
                        clipPathUnits="userSpaceOnUse"
                      >
                        <path
                          d="M122.297,1714.66C65.338,1367.69 62.491,1025.7 121.909,689.455C133.944,621.346 186.621,567.793 254.384,553.949C467.534,510.404 682.471,511.129 899.109,554.011C968.605,567.767 1022.33,623.377 1032.99,693.417C1086.12,1042.51 1089.16,1384.41 1034.8,1718.06C1023.38,1788.14 968.865,1843.46 898.991,1856.1C692.267,1893.49 479.166,1890.66 260.67,1853.8C189.503,1841.8 133.988,1785.88 122.297,1714.66Z"
                          transform="matrix(2.80689e-17,-0.457937,0.4584,2.80405e-17,-239.087,491.927)"
                        />
                      </clipPath>
                    </defs>
                    <foreignObject
                      clipPath="url(#clip-path-wedding-party-2)"
                      width="100%"
                      height="100%"
                    >
                      <Image
                        src={`${CLOUDFRONT_URL}/0b122d33-d43a-41b3-b320-d1750de6a662.jpg`}
                        alt="The Groom"
                        width={624}
                        height={456}
                      />
                    </foreignObject>
                  </svg>
                </div>

                <h3 className="display-5 font-alt">Christian Ray Tacazon</h3>
                <p className="fs-5 fw-bold ls-2 mb-5 text-primary text-uppercase">
                  The Groom
                </p>

                <PartyList members={GROOM_PARTY} />
              </div>
            </div>

            {ADDITIONAL_SECTIONS.length > 0 && (
              <div className="row justify-content-center mt-4">
                {ADDITIONAL_SECTIONS.map((section, i) => (
                  <PartySectionBlock key={i} section={section} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Photos */}
        <section id="photos" className="border-top fade-in-section">
          <div className="container">
            <div className="row mb-5 pb-lg-5">
              <div className="col-12 position-relative text-center z-2">
                <h2 className="font-alt fs-1 mb-3">Photo Gallery</h2>
                <p className="fs-5 mb-4 text-body-secondary">
                  Every moment in our lives is a miracle, we should enjoy
                  instead of ignoring.
                </p>
                <span className="divider divider-arrow"></span>
              </div>
            </div>

            <div className="row gallery-grid">
              {PHOTO_GALLERY_IMAGES.map((file, i) => {
                const url = `${CLOUDFRONT_URL}/${file}`;
                const label = `Open photo ${i + 1} of ${PHOTO_GALLERY_IMAGES.length} in gallery`;
                return (
                  <div key={file} className="col-6 col-lg-3 mb-4">
                    <figure>
                      <a href={url} data-gall="photos" aria-label={label}>
                        <Image
                          src={url}
                          alt={`Wedding photo ${i + 1}`}
                          width={800}
                          height={800}
                          sizes="(min-width: 992px) 25vw, 50vw"
                          className="img-fluid"
                          loading="lazy"
                        />
                      </a>
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wedding Gifts */}
        <section
          id="wedding-gifts"
          className="fade-in-section position-relative"
        >
          <Image
            src={`${CLOUDFRONT_URL}/eff75bd5-5d00-46af-aba9-78c5f7f97070.jpg`}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ objectFit: "cover", zIndex: -1 }}
          />
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-lg-start">
              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                <div className="shape-rect-content-wrapper position-relative py-5 py-sm-0 rounded-5">
                  <div className="shape-rect-content d-flex flex-column justify-content-center px-4 px-sm-5 text-center">
                    <h3 className="font-alt">Your Presence is a Gift</h3>
                    <span className="divider divider-heart mb-4"></span>
                    <div className="mb-2 text-body-secondary">
                      <p>
                        Gifts are not expected but for those who wish, we
                        graciously prefer monetary gifts.
                      </p>
                    </div>
                    <span className="divider divider-floral d-none d-xl-block"></span>
                  </div>
                  <img
                    src="/img/shape-rect-content-wrapper.svg"
                    alt=""
                    className="d-none d-sm-block img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP */}
        <section id="rsvp" className="fade-in-section">
          <div className="container">
            <div className="row mb-5 pb-lg-5">
              <div className="col-12 position-relative text-center z-2">
                <h2 className="font-alt fs-1 mb-3">
                  Come and Celebrate with Us
                </h2>
                <p className="fs-5 mb-4 text-body-secondary">
                  If you have only one smile in you give it to the people you
                  love.
                </p>
                <span className="divider divider-arrow"></span>
              </div>
            </div>

            <div className="row align-items-center gx-lg-5 justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mb-5">
                <div className="border bg-white pb-5 position-relative z-2">
                  <h3 className="border-bottom bg-primary font-alt m-0 p-4 text-center text-white">
                    Are You Attending?
                  </h3>

                  <RsvpForm />
                </div>
              </div>

              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4 mb-lg-5 offset-xl-1 text-center">
                <h3 className="font-alt">We Can&apos;t Wait to See You!</h3>
                <span className="divider divider-heart mb-4"></span>
                <p className="text-body-secondary">Saturday, June 20th, 2026</p>
                <p className="mb-4 text-body-secondary">
                  San Roque Chapel, 1 Dewey Ave, Olongapo City, 2200 Zambales
                </p>
                <span className="divider divider-floral"></span>
              </div>
            </div>
          </div>

          <img
            src="/img/shape-wave-top-left-2.svg"
            alt=""
            className="shape-wave d-none d-lg-block position-absolute start-0 top-0 z-1"
          />
          <img
            src="/img/shape-wave-middle-right.svg"
            alt=""
            className="shape-wave shape-wave-xs d-none d-lg-block end-0 mb-5 position-absolute top-50 translate-middle-y z-1"
          />
        </section>
      </main>

      <footer className="site-footer text-center py-4 border-top">
        <p className="m-0 text-body-secondary">
          Made with <span aria-label="love">💙</span> by{" "}
          <a
            href="https://ralphlargo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fw-bold text-decoration-underline"
            style={{ color: "#4A1E25" }}
          >
            Largs
          </a>
        </p>
      </footer>
    </>
  );
}
