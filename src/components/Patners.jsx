import React from 'react';

function Patners() {
  return (
    <>
      <section className="partners">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="partners-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src="img/orangeDot.png" alt="orange-dot" />
                    <p>Partners</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    REPUTED PARTNER
                  </h2>
                </div>
                <div className="partner-list-container row-mobile-margin mt-50">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="partner-card">
                        <img
                          className="text-center img-fluid partner-img"
                          src="img/partnerOne.png"
                          alt="partner-image"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="partner-card">
                        <img
                          className="text-center img-fluid partner-img"
                          src="img/partnerTwo.png"
                          alt="partner-image"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="partner-card">
                        <img
                          className="text-center img-fluid partner-img"
                          src="img/partnerThree.png"
                          alt="partner-image"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="partner-card">
                        <img
                          className="text-center img-fluid partner-img"
                          src="img/partnerFour.png"
                          alt="partner-image"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="partner-card">
                        <img
                          className="text-center img-fluid partner-img"
                          src="img/partnerFive.png"
                          alt="partner-image"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="partner-card">
                        <img
                          className="text-center img-fluid partner-img"
                          src="img/partnerOne.png"
                          alt="partner-image"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="partner-card">
                        <img
                          className="text-center img-fluid partner-img"
                          src="img/partnerTwo.png"
                          alt="partner-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Patners;
