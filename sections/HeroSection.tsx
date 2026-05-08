/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { CLOUDFRONT_URL } from "@/constants/cloudfront";

export default function HeroSection() {
  return (
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
                      <Image
                        src={`${CLOUDFRONT_URL}/31b59af9-73be-447f-b21d-70ce064a1e69.jpg`}
                        alt="The Couple"
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
  );
}
