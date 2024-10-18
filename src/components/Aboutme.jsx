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
                        I Can Develop And Design Anything You Want
                      </h2>
                    </div>
                    <p className="secondary-black line-height-7 mt-20">
                    I’m a dedicated Full-Stack Web Developer with experience in building responsive, high-performance web applications. Skilled in front-end technologies like React, JavaScript, and HTML5, and back-end tools like Node.js, Express, Php, Codeignter and MongoDB, I specialize in creating seamless user experiences and scalable solutions. With a passion for problem-solving and continuous learning, I enjoy turning ideas into functional products and integrating services like Google login for added functionality.
                    </p>
                  </div>
                  <div className="row row-mobile-margin gy-3 gy-sm-0 mt-50">
                    <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center">
                      <div className="mr-10">
                        <img src="img/aboutIconOne.png" alt="about icon one" />
                      </div>
                      <div className="about-complete-project">
                        <h4 className="fw-700 orange-color h4">
                          <span className="counter">10</span>+
                        </h4>
                        <h4 className="fw-500 black-color h4">Complete Project</h4>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center">
                      <div className="mr-10">
                        <img src="img/aboutIconTwo.png" alt="about icon two" />
                      </div>
                      <div className="about-years-experience">
                        <h4 className="fw-700 orange-color h4">
                          <span className="counter">1</span>+
                        </h4>
                        <h4 className="fw-500 black-color h4">Year of experience</h4>
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
                            <p>Work simple and clean design</p>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                          <div className="mb-20 d-flex align-items-center">
                            <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                            <p>Web Design Full stack</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 col-sm-6 col-lg-6">
                          <div className="d-flex align-items-center mb-20">
                            <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                            <p>New idea and user friendly design</p>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                          <div className="d-flex align-items-center">
                            <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                            <p>Unlimited Revisions</p>
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
                  >
                    <span className="position-relative z-1"><a style={{color:"white"}} href="Rajeevchaudhary.pdf" download >Download My CV</a></span>
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
