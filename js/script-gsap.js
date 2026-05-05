(function ($) {
  'use strict';

  /* ==========================================================
     ✅ Register GSAP Plugins
  ========================================================== */
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
    if (typeof ScrollSmoother !== 'undefined') gsap.registerPlugin(ScrollSmoother);
  }

  const device_width = window.screen.width;

  /* ==========================================================
     ✅ ScrollSmoother Setup
  ========================================================== */
  if (device_width > 767) {
    const hasSmooth = document.querySelector("#has_smooth");
    if (hasSmooth && hasSmooth.classList.contains("has-smooth") && typeof ScrollSmoother !== 'undefined') {
      ScrollSmoother.create({
        smooth: 2,
        effects: device_width < 1025 ? false : true,
        smoothTouch: 0.1,
        normalizeScroll: { allowNestedScroll: true },
        ignoreMobileResize: true,
      });
    }
  }

  /* ==========================================================
     ✅ Check GSAP + ScrollTrigger
  ========================================================== */
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded');
    return;
  }

  /* ==========================================================
     ✅ Common Animation Function
  ========================================================== */
  function gsapFadeMove(selector, options) {
    gsap.utils.toArray(selector).forEach(el => {
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 2,
          start: "top 90%",
          end: "top 70%",
          toggleActions: "play none none reverse",
        }
      })
      .set(el, { transformOrigin: 'center center' })
      .from(el, { opacity: 0, ...options, duration: 1, immediateRender: false });
    });
  }

  /* ==========================================================
     ✅ Direction Animations
  ========================================================== */
  gsapFadeMove('.tm-gsap-animate-left', { x: "-=150" });
  gsapFadeMove('.tm-gsap-animate-right', { x: "+=150" });
  gsapFadeMove('.tm-gsap-animate-top', { y: "+=150" });
  gsapFadeMove('.tm-gsap-animate-bottom', { y: "-=150" });

  /* ==========================================================
     ✅ Circle Rotations (Individual Groups)
  ========================================================== */
  function circleRotate(selector, start = "top 85%", end = "top 0%") {
    gsap.utils.toArray(selector).forEach(el => {
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: start,
          end: end,
          toggleActions: "play none none reverse",
        }
      })
      .set(el, { transformOrigin: 'center center' })
      .fromTo(el, { rotate: 0 }, { rotate: 180, duration: 2, immediateRender: false });
    });
  }

  // Different circle animation groups
  circleRotate('.tm-gsap-animate-circle', "top 85%", "top 0%");
  circleRotate('.tm-gsap-animate-circle-two', "top 100%", "top -50%");
  circleRotate('.tm-gsap-animate-circle-three', "top 0%", "top -50%");

  /* ==========================================================
     ✅ Parallax Image Animation
  ========================================================== */
  gsap.utils.toArray(".tm-gsap-img-parallax").forEach(container => {
    const image = container.querySelector("img");
    if (!image) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: 0.5,
      }
    })
    .from(image, { yPercent: -30, ease: "none" })
    .to(image, { yPercent: 30, ease: "none" });
  });

  /* ==========================================================
     ✅ Data-speed Parallax Animation
  ========================================================== */
  document.querySelectorAll("[data-speed]").forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 1;
    const lag = parseFloat(el.dataset.lag) || 0;

    gsap.to(el, {
      yPercent: (1 - speed) * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scrub: 1 + lag,
        start: "top bottom",
        end: "bottom top",
      },
    });
  });

})(jQuery);
