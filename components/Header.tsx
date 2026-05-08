/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { CLOUDFRONT_URL } from "@/constants/cloudfront";

export default function Header() {
  return (
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
  );
}
