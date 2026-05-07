/* eslint-disable @next/next/no-img-element */
import RsvpForm from "./RsvpForm";

console.log("trigger deployment");
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
              fill="#DDB796"
            />
            <path
              className="anim-heart-sm"
              d="M89.63,70.9c-3.57,10.15-22.21,12.84-22.21,12.84s-12.84-13.77-9.26-23.92c4.14-11.76,19.75-5.86,15.74,5.54 C77.78,54.33,93.78,59.13,89.63,70.9z"
              strokeMiterlimit={10}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={3.5}
              stroke="#000000"
              fill="#B46A48"
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
              <img
                width={187}
                height={73}
                src="/img/navbar-brand-mobile.png"
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
                Request The Honor of Your Presence at Their Wedding Ceremony and
                Reception June 20, 2026
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
                        <img
                          src="/images/the-couple-hero.jpg"
                          alt="The Couple"
                          className="anim-zoom"
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
      <section id="the-couple">
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
              <h3 className="font-alt">Lynzei Santos</h3>
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
                    <img src="/images/the-couple.jpg" alt="The Couple" />
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
                I&apos;m so excited to spend the rest of my life with You,
                Lynzei.
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
      <section id="wedding-event" className="bg-secondary-2">
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
                    <h3 className="font-alt">The Reception</h3>
                    <span className="divider divider-heart mb-3 mb-sm-4"></span>
                    <p className="mb-1 text-body-secondary">
                      Saturday, June 20th, 2026
                    </p>
                    <p className="text-body-secondary">08:00PM - 10:00PM</p>
                    <p className="mb-1 text-body-secondary">San Roque Chapel</p>
                    <p className="mb-sm-4 text-body-secondary">
                      1 Dewey Ave, Olongapo City, 2200 Zambales
                    </p>
                    <span className="divider divider-floral d-none d-sm-block"></span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/5iiT6ZgP5Lmrds1SA"
                    target="_blank"
                    rel="noreferrer"
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
                    <h3 className="font-alt">The Ceremony</h3>
                    <span className="divider divider-heart mb-3 mb-sm-4"></span>
                    <p className="mb-1 text-body-secondary">
                      Saturday, June 20th, 2026
                    </p>
                    <p className="text-body-secondary">08:00PM - 10:00PM</p>
                    <p className="mb-1 text-body-secondary">San to?</p>
                    <p className="mb-sm-4 text-body-secondary">2200 Zambales</p>
                    <span className="divider divider-floral d-none d-sm-block"></span>
                  </div>
                  <a href="#" className="btn mx-auto">
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

            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
              <div className="position-relative">
                <div className="d-flex flex-column h-100 justify-content-between position-absolute start-0 text-center top-0 w-100">
                  <div className="mt-5 px-4">
                    <h3 className="font-alt">After Party</h3>
                    <span className="divider divider-heart mb-3 mb-sm-4"></span>
                    <p className="mb-1 text-body-secondary">
                      Sunday, July 12th, 2026
                    </p>
                    <p className="text-body-secondary">08:00PM - 10:00PM</p>
                    <p className="mb-1 text-body-secondary">
                      The Mayflower Hotel
                    </p>
                    <p className="mb-sm-4 text-body-secondary">
                      620 11th Street NW, Washington, DC
                    </p>
                    <span className="divider divider-floral d-none d-sm-block"></span>
                  </div>
                  <a href="#" className="btn mx-auto">
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
      <section id="wedding-party">
        <div className="container">
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
                    <img src="/images/wedding-party-1.jpg" alt="The Bride" />
                  </foreignObject>
                </svg>
                <img
                  src="/img/shape-particle.svg"
                  alt=""
                  className="shape-particle d-none d-md-block position-absolute start-0 top-0 z-3"
                />
              </div>

              <h3 className="display-5 font-alt">Lynzei Santos</h3>
              <p className="fs-5 fw-bold ls-2 mb-5 text-primary text-uppercase">
                The Bride
              </p>

              <ul className="list-unstyled">
                <li className="mb-5">
                  <h3 className="font-alt">Unknown</h3>
                  <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
                    Maid of Honor
                  </p>
                </li>
                <li className="mb-5">
                  <h3 className="font-alt">Unknown</h3>
                  <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
                    Maid of Honor
                  </p>
                </li>
                <li className="mb-5">
                  <h3 className="font-alt">Unknown</h3>
                  <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
                    Bridesmaid
                  </p>
                </li>
                <li className="mb-5">
                  <h3 className="font-alt">Unknown</h3>
                  <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
                    Bridesmaid
                  </p>
                </li>
              </ul>
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
                    <img src="/images/wedding-party-2.jpg" alt="The Groom" />
                  </foreignObject>
                </svg>
              </div>

              <h3 className="display-5 font-alt">Christian Ray Tacazon</h3>
              <p className="fs-5 fw-bold ls-2 mb-5 text-primary text-uppercase">
                The Groom
              </p>

              <ul className="list-unstyled">
                <li className="mb-5">
                  <h3 className="font-alt">Jeremy Saing</h3>
                  <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
                    Best Man
                  </p>
                </li>
                <li className="mb-5">
                  <h3 className="font-alt">Ralph Largo</h3>
                  <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
                    Best Man
                  </p>
                </li>

                <li className="mb-5">
                  <h3 className="font-alt">Gem Avy Montalla</h3>
                  <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
                    Groomsman
                  </p>
                </li>
                <li className="mb-5">
                  <h3 className="font-alt">Kuya Jer</h3>
                  <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
                    Groomsman
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section id="photos" className="border-top">
        <div className="container">
          <div className="row mb-5 pb-lg-5">
            <div className="col-12 position-relative text-center z-2">
              <h2 className="font-alt fs-1 mb-3">Photo Gallery</h2>
              <p className="fs-5 mb-4 text-body-secondary">
                Every moment in our lives is a miracle, we should enjoy instead
                of ignoring.
              </p>
              <span className="divider divider-arrow"></span>
            </div>
          </div>

          <div className="row gallery-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="col-6 col-lg-3 mb-4">
                <figure>
                  <a href={`/images/photo-${n}.jpg`} data-gall="photos">
                    <img
                      src={`/images/photo-${n}.jpg`}
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Gifts */}
      <section
        id="wedding-gifts"
        className="bg-holder"
        data-bg-image="/images/bg-wedding-gifts.jpg"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-start">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <div className="shape-rect-content-wrapper position-relative py-5 py-sm-0 rounded-5">
                <div className="shape-rect-content d-flex flex-column justify-content-center px-4 px-sm-5 text-center">
                  <h3 className="font-alt">Your Presence is a Gift</h3>
                  <span className="divider divider-heart mb-4"></span>
                  <div className="mb-2 text-body-secondary">
                    <p>
                      You don&apos;t need to bring us gifts &mdash; your company
                      at our wedding is enough!
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
      <section id="rsvp">
        <div className="container">
          <div className="row mb-5 pb-lg-5">
            <div className="col-12 position-relative text-center z-2">
              <h2 className="font-alt fs-1 mb-3">Come and Celebrate with Us</h2>
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

      <footer className="site-footer text-center py-4 border-top">
        <p className="m-0 text-body-secondary">
          Made with <span aria-label="love">💙</span> by{" "}
          <a
            href="https://ralphlargo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary fw-bold text-decoration-none"
          >
            Largs
          </a>
        </p>
      </footer>
    </>
  );
}
