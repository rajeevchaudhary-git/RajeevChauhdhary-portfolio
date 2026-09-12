import React from 'react';

function Banner() {
  return (
    <>
      <section id="home" className="home-banner position-relative">
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-12">
              <div className="home-banner-wrapper row align-items-center">
                <div className="col-12 col-lg-6 col-xl-7 home-banner-text-col position-relative">
                  <div className="sub-heading d-flex align-items-center">
                    <img src="img/orangeDot.png" alt="orange-dot" />
                    <p>Backend Developer · Real-time Systems</p>
                  </div>
                  <div className="animate-heading">
                    <h1 className="black-color h1 home-one-title ah-headline">
                      I build systems that stay up under
                      <span className="orange-color">
                        <span className="ah-words-wrapper">
                          <b className="is-visible"> load</b>
                          <b>pressure</b>
                          <b>scale</b>
                        </span>
                      </span>
                    </h1>
                  </div>
                  <p className="h5 line-height-7 mt-20 secondary-black fw-400">
                    Backend-focused full stack engineer at Jaatak Astro Infotech (New Delhi).
                    I ship Socket.IO call/chat infrastructure, WebRTC, Redis-backed systems, and
                    payment ledgers — currently scaling JaatakAstro to 15K+ MAU with 3K+ concurrent
                    real-time connections.
                  </p>

                  <div className="social-icons mt-4">
                    <a
                      style={{ fontSize: '40px' }}
                      href="https://www.linkedin.com/in/rajeev-chaudhary-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      title="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      style={{ fontSize: '40px', marginLeft: '15px' }}
                      href="https://github.com/rajeevchaudhary-git/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      title="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      style={{ fontSize: '40px', marginLeft: '15px' }}
                      href="https://leetcode.com/u/Rajeevchaudhary067/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      title="LeetCode"
                    >
                      <img
                        src="img/leetcode.svg"
                        height={'36px'}
                        style={{ marginTop: '-8px' }}
                        alt="LeetCode"
                        className="social-icon-img"
                      />
                    </a>
                  </div>

                  <div className="d-flex flex-wrap gap-3 mt-50">
                    <a className="btn_effect btn home-banner-btn orange-btn" href="#portfolio">
                      <span className="z-1 position-relative text-white">View Projects</span>
                    </a>
                    <a className="btn_effect btn home-banner-btn orange-btn" href="Rajeevchaudhary.pdf" download>
                      <span className="z-1 position-relative text-white">Download CV</span>
                    </a>
                  </div>

                  <div className="banner-particle-one-container">
                    <img
                      className="position-absolute banner-particle-one d-none d-lg-inline"
                      src="img/particleOne.png"
                      alt="banner particle one"
                    />
                  </div>
                  <div className="banner-particle-two-container">
                    <img
                      className="position-absolute banner-particle-two delay-one"
                      src="img/particleTwo.png"
                      alt="banner particle two"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5 text-center position-relative home-banner-img-col">
                  <div className="banner-particle-one-container">
                    <img
                      className="position-absolute banner-particle-one d-lg-none"
                      src="img/particleOne.png"
                      alt="banner particle one"
                    />
                  </div>

                  <img
                    className="position-absolute home-banner-shape bg-move-3d"
                    src="img/homeNannerShape.png"
                    alt="banner-shape"
                  />
                  <img
                    className="img-fluid position-relative z-index-10 home-banner-img"
                    src="img/Removal-159.png"
                    style={{ borderRadius: '139px' }}
                    alt="Rajeev Chaudhary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
