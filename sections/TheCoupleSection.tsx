/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { CLOUDFRONT_URL } from "@/constants/cloudfront";

export default function TheCoupleSection() {
  return (
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
  );
}
