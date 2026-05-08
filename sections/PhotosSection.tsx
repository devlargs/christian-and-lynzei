import Image from "next/image";
import { CLOUDFRONT_URL, PHOTO_GALLERY_IMAGES } from "@/constants/cloudfront";

export default function PhotosSection() {
  return (
    <section id="photos" className="border-top fade-in-section">
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
  );
}
