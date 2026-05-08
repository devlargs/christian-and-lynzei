/* eslint-disable @next/next/no-img-element */
export default function WeddingEventSection() {
  return (
    <section id="wedding-event" className="bg-secondary-2 fade-in-section">
      <div className="container position-relative z-2">
        <div className="row mb-5 pb-lg-5">
          <div className="col-12 position-relative text-center z-2">
            <h2 className="font-alt fs-1 mb-3">The Wedding Event</h2>
            <p className="fs-5 mb-4 text-body-secondary">
              If you have only one smile in you give it to the people you love.
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
                  <p className="text-body-secondary">1:00 in the Afternoon</p>
                  <p className="mb-1 text-body-secondary">San Roque Chapel</p>
                  <p className="mb-sm-4 text-body-secondary">
                    Dewey Ave, Subic Bay Freeport Zone
                  </p>
                  <span className="divider divider-floral d-none d-sm-block"></span>
                </div>
                <a
                  href="https://maps.app.goo.gl/5iiT6ZgP5Lmrds1SA"
                  className="btn mx-auto"
                  target="_blank"
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
  );
}
