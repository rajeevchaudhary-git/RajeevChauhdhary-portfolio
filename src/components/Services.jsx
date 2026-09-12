import React from 'react';

const focusAreas = [
  {
    img: 'img/serviceFour.png',
    title: 'Real-time backends',
    text: 'Socket.IO call/chat state machines with Redis idempotency and MongoDB atomic guards — designed for concurrent users, not demos.',
  },
  {
    img: 'img/serviceTwo.png',
    title: 'WebRTC & media',
    text: 'Peer connections with self-hosted Coturn TURN, billing gated on actual connection state, and FCM/APNs VoIP push for call UX.',
  },
  {
    img: 'img/serviceFive.png',
    title: 'Payments & ledgers',
    text: 'Double-entry wallet architecture, Razorpay integrations, and running-tab calculation for live chat/call sessions.',
  },
  {
    img: 'img/serviceSeven.png',
    title: 'Caching & infra',
    text: 'Redis singleton pub/sub, cache stampede protection, Docker/Nginx deployments, and CI/CD that survives production traffic.',
  },
  {
    img: 'img/serviceOne.png',
    title: 'Auth & multi-tenant SaaS',
    text: 'RBAC, refresh-token rotation with family invalidation, Redis jti blocklisting, and tenant-isolated CRM platforms.',
  },
  {
    img: 'img/serviceEight.png',
    title: 'Full-stack delivery',
    text: 'React and React Native when the product needs it — APIs, admin panels, and mobile clients shipped as one system.',
  },
];

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
                  <p>What I Build</p>
                </div>
                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                  Systems I ship
                </h2>
              </div>
              <div className="service-grid-container mt-50 row-mobile-margin">
                {focusAreas.map((item) => (
                  <div className="service-grid-item text-center" key={item.title}>
                    <img className="service-item-img" src={item.img} alt={item.title} />
                    <h3 className="h3 fw-500 service-item-heading black-color">{item.title}</h3>
                    <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
