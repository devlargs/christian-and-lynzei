/* eslint-disable @next/next/no-img-element */
import RsvpForm from "@/components/RsvpForm";

export default function RsvpSection() {
  return (
    <section id="rsvp" className="fade-in-section">
      <div className="container">
        <div className="row mb-5 pb-lg-5">
          <div className="col-12 position-relative text-center z-2">
            <h2 className="font-alt fs-1 mb-3">Come and Celebrate with Us</h2>
            <p className="fs-5 mb-4 text-body-secondary">
              If you have only one smile in you give it to the people you love.
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
  );
}
