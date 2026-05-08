/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { CLOUDFRONT_URL } from "@/constants/cloudfront";
import {
  ADDITIONAL_SECTIONS,
  BRIDE_PARTY,
  GROOM_PARTY,
} from "@/constants/party";
import PartyList from "@/components/PartyList";
import PartySectionBlock from "@/components/PartySectionBlock";

export default function WeddingPartySection() {
  return (
    <section id="wedding-party" className="position-relative fade-in-section">
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
  );
}
