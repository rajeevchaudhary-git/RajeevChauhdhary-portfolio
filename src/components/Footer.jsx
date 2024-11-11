import React from 'react';

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 mt-5 mt-lg-0">
                  <div className="footer-col-one">
                    <img src="img/logo-no-background.svg" height={'40px'} width={'179px'} className="footer-logo" alt="footer logo" />
                    <p className="p text-white line-height-7 mb-30 footer-col-one-texts">
                    I’m a Full-Stack Web Developer with expertise in building responsive, scalable web applications using technologies like React, Node.js, Express,php,codeIgnter,Mysql and MongoDB. I focus on creating seamless user experiences and efficient back-end solutions, integrating third-party APIs, and delivering high-performance, modern web applications
                    </p>
                    <h3 className="h3 fw-500 line-height-3 text-white fw-500">
                    rajeevchoudhary067@gmail.com
                    </h3>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-2 mt-5 mt-lg-0">
                  <h4 className="h4 fw-500 text-white">Explore Link</h4>
                  <div className="footer-col-links">
                    <ul className="footer-col-link-container">
                      <li className="footer-link-item">
                        <a className="fw-400 p line-height-7 text-white" href="#about">About</a>
                      </li>
                      <li className="footer-link-item">
                        <a className="fw-400 p line-height-7 text-white" href="#resume">Resume</a>
                      </li>
                      <li className="footer-link-item">
                        <a className="fw-400 p line-height-7 text-white" href="#portfolio">Portfolio</a>
                      </li>
                      <li className="footer-link-item">
                        <a className="fw-400 p line-height-7 text-white" href="#blog">Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-2 mt-5 mt-lg-0">
                  <h4 className="h4 fw-500 text-white">My Services</h4>
                  <div className="footer-col-links">
                    <ul className="footer-col-link-container">
                      <li className="footer-link-item">
                        <a className="fw-400 p line-height-7 text-white" href="#services">UI/UX Design</a>
                      </li>
                      <li className="footer-link-item">
                        <a className="fw-400 p line-height-7 text-white" href="#services">Mobile App</a>
                      </li>
                      <li className="footer-link-item">
                        <a className="fw-400 p line-height-7 text-white" href="#services">Graphics Design</a>
                      </li>
                      <li className="footer-link-item">
                        <a className="fw-400 p line-height-7 text-white" href="#services">Web Developer</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mt-5 mt-lg-0">
            <h4 className="h4 fw-500 text-white">Follow me</h4>
            <div className="footer-social-media">
                    <ul className="footer-social-container d-flex align-items-center mb-35">
            {/* LinkedIn */}
            <li className="footer-social-item-2">
              <a href="https://www.linkedin.com/in/rajeev-chaudhary-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <div className="orange-bg-icon">
                  <i className="fab fa-linkedin-in text-white h4"></i>
                </div>
              </a>
                      </li>
                {/* GitHub */}
                <li className="footer-social-item-2">
                  <a href="https://github.com/rajeevchaudhary-git/" target="_blank" rel="noopener noreferrer">
                    <div className="orange-bg-icon">
                      <i className="fab fa-github text-white h4"></i>
                    </div>
                  </a>
                </li>
                {/* LeetCode */}
                <li className="footer-social-item-2">
                  <a href="https://leetcode.com/u/Rajeevchaudhary067/" target="_blank" rel="noopener noreferrer">
                    <div className="orange-bg-icon">
                      <img src="img/leetcode.svg" alt="LeetCode" height="36px" />
                    </div>
                  </a>
                </li>
              </ul>
  </div>
  <div className="footer-contact">
    <div className="footer-contact-item d-flex align-items-center mb-20">
      <i className="fa-solid fa-location-dot footer-contact-icon mr-10 orange-color"></i>
      <p className="p text-white line-height-7 fw-400">
        Rohini sector 39, New Delhi, India
      </p>
    </div>
    <div className="footer-contact-item d-flex align-items-center mb-20">
      <i className="fa-solid fa-phone-volume footer-contact-icon mr-10 orange-color"></i>
      <p className="p text-white line-height-7 fw-400">+919354987017</p>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-bottom-container">
                <div className="row">
                  <div className="footerbottom-left col-12 col-sm-5 col-md-6 text-start">
                    <p className="p text-white line-height-7">
                      All rights reserved &copy; 2024 
                    </p>
                  </div>
                  <div className="footerbottom-right col-12 col-sm-7 col-md-6">
                    <ul className="d-flex justify-content-sm-end">
                      <li className="mr-100">
                        <a className="text-white p" href="termsandconditions.html">Terms & Condition</a>
                      </li>
                      <li>
                        <a className="text-white p" href="privacypolicy.html">Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="loader-mask">
        <div className="loader">
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
