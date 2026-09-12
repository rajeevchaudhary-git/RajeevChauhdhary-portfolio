import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
                  Client feedback
                </h2>
              </div>
              <div className="testimonial-list-container row-mobile-margin mt-50">
                <Slider {...settings}>
                  <div className="item">
                    <div className="testimonial-card">
                      <div className="bio d-flex align-items-center">
                        <img className="bio-img" src="img/testimonialOne.png" alt="testimonial" />
                        <div>
                          <h3 className="h3 fw-500 line-height-3 black-color">Piyush</h3>
                          <p className="p fw-400 line-height-7 secondary-black">Founder, Fitspot</p>
                        </div>
                      </div>
                      <p className="p line-height-7 fw-400 secondary-black mt-20">
                        Rajeev built Fitspot from the ground up and made it production-ready —
                        responsive, searchable, and easy for gym owners to use. He delivered on
                        time, stayed sharp on the details, and was straightforward to work with.
                        Highly recommended if you need someone who actually ships.
                      </p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimonial-card">
                      <div className="bio d-flex align-items-center">
                        <img className="bio-img" src="img/testimonialOne.png" alt="testimonial" />
                        <div>
                          <h3 className="h3 fw-500 line-height-3 black-color">Rajesh Yadav</h3>
                          <p className="p fw-400 line-height-7 secondary-black">
                            Founder, WebHubpoint
                          </p>
                        </div>
                      </div>
                      <p className="p line-height-7 fw-400 secondary-black mt-20">
                        Rajeev played a key role across multiple client platforms for us. He owns
                        the full delivery loop — backend, frontend, performance, and SEO — and
                        communicates clearly when something needs a decision. Dependable engineer
                        for production work.
                      </p>
                    </div>
                  </div>
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
