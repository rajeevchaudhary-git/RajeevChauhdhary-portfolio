import React from 'react';

function Services() {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading-middle">
                <div className="sub-heading d-flex align-items-center mx-auto">
                  <img src="img/orangeDot.png" alt="orange-dot" />
                  <p>My Service</p>
                </div>
                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                  Services I offer
                </h2>
              </div>
              <div className="service-grid-container mt-50 row-mobile-margin">
                <div className="service-grid-item text-center">
                  <img className="service-item-img" src="img/serviceOne.png" alt="service-img-one" />
                  <h3 className="h3 fw-500 service-item-heading black-color">UI/UX Design</h3>
                  <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                  I specialize in crafting intuitive and engaging user interfaces (UI) and user experiences (UX) that prioritize usability and satisfaction. My design process includes thorough user research and testing to ensure that every interaction is seamless and enjoyable.                  </p>
                </div>
                <div className="service-grid-item text-center">
                  <img className="service-item-img" src="img/serviceTwo.png" alt="service-img-two" />
                  <h3 className="h3 fw-500 service-item-heading black-color">Mobile App</h3>
                  <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                  I develop cross-platform mobile applications using React Native, allowing for a seamless experience on both iOS and Android devices. My approach emphasizes performance, intuitive design, and user engagement, ensuring that your app stands out in the competitive mobile landscape.                  </p>
                </div>
                <div className="service-grid-item text-center">
                  <img className="service-item-img" src="img/serviceThree.png" alt="service-img-three" />
                  <h3 className="h3 fw-500 service-item-heading black-color">Graphic Design</h3>
                  <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                  I provide graphic design services that include logo creation, marketing materials, and branding assets. My goal is to create visually appealing designs that reflect your brand's identity and communicate your message effectively.                  </p>
                </div>
                <div className="service-grid-item text-center">
                  <img className="service-item-img" src="img/serviceFour.png" alt="service-img-four" />
                  <h3 className="h3 fw-500 service-item-heading black-color">Ecommerce solutions</h3>
                  <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                  I develop comprehensive e-commerce platforms that facilitate online sales seamlessly. With a focus on user experience and secure transactions, I help businesses establish a strong online presence and drive sales.                  </p>
                </div>
                <div className="service-grid-item text-center">
                  <img className="service-item-img" src="img/serviceFive.png" alt="service-img-five" />
                  <h3 className="h3 fw-500 service-item-heading black-color">SEO Optimisation</h3>
                  <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                  I offer comprehensive SEO services to enhance your website's visibility and drive organic traffic. Through keyword research, on-page optimization, and content strategies, I help improve your search engine rankings and connect you with your target audience effectively.</p>
                </div>
                <div className="service-grid-item text-center">
                  <img className="service-item-img" src="img/serviceSix.png" alt="service-img-six" />
                  <h3 className="h3 fw-500 service-item-heading black-color">WordPress Developer</h3>
                  <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                  I create custom WordPress websites tailored to your needs, whether for blogging, business, or e-commerce. My services include theme customization, plugin development, and site optimization, ensuring your site is visually appealing, user-friendly, and optimized for performance.                  </p>
                </div>
                <div className="service-grid-item text-center">
                  <img className="service-item-img" src="img/serviceSeven.png" alt="service-img-seven" />
                  <h3 className="h3 fw-500 service-item-heading black-color">App Development</h3>
                  <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                  I specialize in developing cross-platform mobile applications using React Native, enabling a seamless experience across both iOS and Android devices. My approach combines intuitive UI/UX design with robust functionality, ensuring that your app is not only visually appealing but also performs efficiently.                  </p>
                </div>
                <div className="service-grid-item text-center">
                  <img className="service-item-img" src="img/serviceEight.png" alt="service-img-eight" />
                  <h3 className="h3 fw-500 service-item-heading black-color">Consultation Services</h3>
                  <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                  I offer consultation services to help businesses identify their digital needs and develop effective strategies. My approach involves assessing your current situation and providing tailored solutions to achieve your goals.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
