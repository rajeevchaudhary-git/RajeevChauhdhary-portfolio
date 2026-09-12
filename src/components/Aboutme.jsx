import React from 'react';

function Aboutme() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row align-items-center">
                <div className="about-image-col col-12 col-lg-6 text-center">
                  <div className="img-overlay mx-auto mx-lg-0">
                    <img className="img-fluid" src="img/Untitled design.png" width={'59%'} alt="about image" />
                  </div>
                </div>
                <div className="about-text-col col-12 col-lg-6">
                  <div className="about-text-top">
                    <div className="section-heading">
                      <div className="sub-heading d-flex align-items-center">
                        <img src="img/orangeDot.png" alt="orange-dot" />
                        <p>About Me</p>
                      </div>
                      <h2 className="black-color line-height-3 h2">
                        Backend engineer who ships production real-time systems
                      </h2>
                    </div>
                    <p className="secondary-black line-height-7 mt-20">
                      I&apos;m Rajeev Chaudhary — a Backend Developer (full stack capable) at
                      Jaatak Astro Infotech. Most of my work lives where sockets, billing, and
                      reliability meet: hardened Socket.IO call flows, WebRTC with a self-hosted
                      TURN server, Redis as a speed layer over MongoDB, and double-entry wallets
                      that actually reconcile.
                    </p>
                    <p className="secondary-black line-height-7 mt-20">
                      Outside the day job I build end-to-end platforms — live radio streaming
                      (Radio Khera), multi-tenant CRM auth, and cache-safe APIs — and I&apos;ve
                      delivered 8+ production sites across fitness, e-commerce, and CRM for
                      freelance clients.
                    </p>
                    <p className="secondary-black line-height-7 mt-20">
                      <strong>Credentials:</strong> AWS Certified Cloud Practitioner · Semifinalist,
                      Amazon Sambhav Hackathon 2024 · B.Tech CS, Maharshi Dayanand University (2024)
                    </p>
                  </div>
                  <div className="row row-mobile-margin gy-3 gy-sm-0 mt-50">
                    <div className="col-12 col-sm-4 col-lg-4 d-flex align-items-center">
                      <div className="mr-10">
                        <img src="img/aboutIconOne.png" alt="about icon one" />
                      </div>
                      <div className="about-complete-project">
                        <h4 className="fw-700 orange-color h4">15K+</h4>
                        <h4 className="fw-500 black-color h4">Monthly active users</h4>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-4 d-flex align-items-center">
                      <div className="mr-10">
                        <img src="img/aboutIconTwo.png" alt="about icon two" />
                      </div>
                      <div className="about-years-experience">
                        <h4 className="fw-700 orange-color h4">3K+</h4>
                        <h4 className="fw-500 black-color h4">Concurrent connections</h4>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-4 d-flex align-items-center">
                      <div className="mr-10">
                        <img src="img/aboutIconOne.png" alt="about icon three" />
                      </div>
                      <div className="about-years-experience">
                        <h4 className="fw-700 orange-color h4">99.9%</h4>
                        <h4 className="fw-500 black-color h4">Uptime target hit</h4>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                    className="row flex-column row-mobile-margin mt-50"
                  >
                    <div className="col-12 mb-0 mb-20">
                      <div className="row">
                        <div className="col-12 col-sm-6 col-lg-6">
                          <div className="mb-20 d-flex align-items-center">
                            <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                            <p>Real-time call &amp; chat infrastructure</p>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                          <div className="mb-20 d-flex align-items-center">
                            <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                            <p>WebRTC + Coturn TURN</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 col-sm-6 col-lg-6">
                          <div className="d-flex align-items-center mb-20">
                            <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                            <p>Ledger &amp; wallet billing systems</p>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                          <div className="d-flex align-items-center">
                            <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                            <p>Redis / MongoDB production architecture</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1500"
                    className="btn btn_effect home-banner-btn orange-btn mt-50"
                    href="Rajeevchaudhary.pdf"
                    download
                  >
                    <span className="position-relative z-1 text-white">Download My CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutme;
