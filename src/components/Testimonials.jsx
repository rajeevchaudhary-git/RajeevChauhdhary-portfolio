import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section id="testimonial" className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="testimonial-wrapper">
              <div className="section-heading-middle">
                <div className="sub-heading d-flex align-items-center mx-auto">
                  <img src="img/orangeDot.png" alt="orange-dot" />
                  <p>Testimonial</p>
                </div>
                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                  Client Feedback
                </h2>
              </div>
              <div className="testimonial-list-container row-mobile-margin mt-50">
                <Slider {...settings}>
                  {/* Slide 1 */}
                  <div className="item">
                    <div className="testimonial-card">
                      <div className="bio d-flex align-items-center">
                        <img className="bio-img" src="img/testimonialOne.png" alt="testimonial-image" />
                        <div>
                          <h3 className="h3 fw-500 line-height-3 black-color">Piyush</h3>
                          <p className="p fw-400 line-height-7 secondary-black">Founder, Fitspot</p>
                        </div>
                      </div>
                      <p className="p line-height-7 fw-400 secondary-black mt-20">

                      Rajeev Chaudhary is an exceptional developer with a keen eye for detail and a deep understanding of web technologies. They built our website from the ground up using CodeIgniter, PHP, and SQL, and ensured it was responsive and user-friendly with Bootstrap and JavaScript. The entire process was smooth, and Rajeev delivered exactly what we needed, on time and within budget. Highly recommended for any web development project!                      </p>
                    </div>
                  </div>
                  
                  {/* Slide 2 */ }
                  <div className="item">
                    <div className="testimonial-card">
                      <div className="bio d-flex align-items-center">
                        <img className="bio-img" src="img/testimonialOne.png" alt="testimonial-image" />
                        <div>
                          <h3 className="h3 fw-500 line-height-3 black-color">Rajesh yadav</h3>
                          <p className="p fw-400 line-height-7 secondary-black">Founder, Web services</p>
                        </div>
                      </div>
                      <p className="p line-height-7 fw-400 secondary-black mt-20">
                     Rajeev Chaudhary is an outstanding developer who played a crucial role in bringing our vision to life at WebServices. Their expertise in CodeIgniter, PHP, and SQL was evident as they crafted a seamless and user-friendly website.Rajeev not only delivered on time but also ensured that every aspect was optimized for performance and SEO. Their proactive communication and problem-solving skills made the entire process enjoyable. I highly recommend Rajeev Chaudhary for any web development project!
                      </p>
                    </div>
                  </div>
                  
                  {/* Slide 3 */}
                  {/* <div className="item">
                    <div className="testimonial-card">
                      <div className="bio d-flex align-items-center">
                        <img className="bio-img" src="img/testimonialThree.png" alt="testimonial-image" />
                        <div>
                          <h3 className="h3 fw-500 line-height-3 black-color">Robert E. Wolf</h3>
                          <p className="p fw-400 line-height-7 secondary-black">Director, Techso</p>
                        </div>
                      </div>
                      <p className="p line-height-7 fw-400 secondary-black mt-20">
                        “Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”
                      </p>
                    </div>
                  </div> */}

                  {/* Slide 4 */}
                  {/* <div className="item">
                    <div className="testimonial-card">
                      <div className="bio d-flex align-items-center">
                        <img className="bio-img" src="img/testimonialThree.png" alt="testimonial-image" />
                        <div>
                          <h3 className="h3 fw-500 line-height-3 black-color">Robert E. Wolf</h3>
                          <p className="p fw-400 line-height-7 secondary-black">Director, Techso</p>
                        </div>
                      </div>
                      <p className="p line-height-7 fw-400 secondary-black mt-20">
                        “Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”
                      </p>
                    </div>
                  </div> */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
