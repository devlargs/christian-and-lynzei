/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { CLOUDFRONT_URL } from "@/constants/cloudfront";

export default function WeddingGiftsSection() {
  return (
    <section id="wedding-gifts" className="fade-in-section position-relative">
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
  );
}
