import React from 'react';

const skillGroups = [
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'JWT / OAuth2', 'BullMQ', 'Event-driven design', 'Prisma', 'Drizzle'],
  },
  {
    title: 'Real-time / Infra',
    skills: ['Socket.IO', 'WebRTC', 'Coturn TURN', 'Redis pub/sub', 'FCM / APNs', 'LiveKit', 'Liquidsoap / Icecast', 'SSE'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma ORM', 'Atomic guards & ledgers'],
  },
  {
    title: 'Cloud / DevOps',
    skills: ['AWS (EC2, S3, IAM)', 'Docker', 'Nginx', 'GitHub Actions', 'PM2', 'Coolify', 'Turborepo'],
  },
];

function Resume() {
  return (
    <>
      <section id="resume" className="resume">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="resume-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src="img/orangeDot.png" alt="orange-dot" />
                    <p>My Resume</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    Experience &amp; skills
                  </h2>
                </div>
                <div className="row mt-50 row-mobile-margin">
                  <div className="col-12 col-lg-2">
                    <div className="resume-topics h-100 flex-column justify-content-center position-relative">
                      <h3 className="h3 line-height-3 resume-topic-item resume-topic-one fw-500 text-black position-absolute">
                        Experience
                      </h3>
                      <h3 className="h3 line-height-3 resume-topic-item resume-topic-two fw-500 text-black position-absolute">
                        Skills
                      </h3>
                      <h3 className="h3 line-height-3 resume-topic-item resume-topic-three fw-500 text-black position-absolute">
                        Education
                      </h3>
                    </div>
                  </div>
                  <div className="col-12 col-lg-10">
                    {/* Experience */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="800"
                      className="resume-education bg-white"
                    >
                      <div className="row">
                        <div className="col-lg-4 resume-first-item">
                          <h4 className="h4 text-black fw-500">Backend Developer</h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            Jaatak Astro Infotech · New Delhi · Present
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Building and scaling JaatakAstro — real-time astrology consultations.
                            Own Socket.IO call lifecycle (initiate/accept/reject/end) with Redis
                            idempotency, WebRTC + Coturn, FCM push, Razorpay wallets, and a
                            double-entry ledger. Platform hits 15K+ MAU, 99.9% uptime, 3K+ concurrent
                            connections.
                          </p>
                        </div>
                        <div className="col-lg-4 resume-second-item">
                          <h4 className="h4 text-black fw-500">Freelance Full Stack</h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            WebHubpoint · 2023 – 2025
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Delivered 8+ production platforms across fitness, e-commerce, and CRM —
                            including Fitspot.in (SEO-driven, 2K+ monthly users) and payment gateway
                            integrations handling ₹10L+ monthly volume.
                          </p>
                        </div>
                        <div className="col-lg-4 resume-third-item">
                          <h4 className="h4 text-black fw-500">Backend Intern</h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            DRDO · 2022 – 2023
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Built backend APIs and secure internal workflows used by 50+ researchers —
                            auth, approval flows, and reliable data handling for sensitive environments.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skills by category — no fake % bars */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="800"
                      className="resume-skills bg-white mt-4"
                    >
                      <div className="row">
                        {skillGroups.map((group, index) => {
                          const colClass =
                            index === 0
                              ? 'resume-first-item'
                              : index === skillGroups.length - 1
                                ? 'resume-third-item'
                                : 'resume-second-item';
                          return (
                            <div className={`col-lg-3 col-md-6 ${colClass} mb-4 mb-lg-0`} key={group.title}>
                              <h4 className="h4 text-black fw-500">{group.title}</h4>
                              <ul className="list-unstyled mt-10 p-0">
                                {group.skills.map((skill) => (
                                  <li
                                    key={skill}
                                    className="p secondary-black fw-400 line-height-7 mb-10 d-flex align-items-start"
                                  >
                                    <i className="fa-regular fa-square-check mr-10 h6 orange-color mt-1"></i>
                                    <span>{skill}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                      <p className="p secondary-black fw-400 line-height-7 mt-20 mb-0">
                        Also ship with: React.js · React Native · Razorpay · Notifee
                      </p>
                    </div>

                    {/* Education */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="800"
                      className="resume-education mt-4 bg-white"
                    >
                      <div className="row">
                        <div className="col-lg-4 resume-first-item">
                          <h4 className="h4 text-black fw-500">B.Tech — Computer Science</h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            Maharshi Dayanand University · 2021 – 2024
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Core focus on software engineering, networking, and systems — foundation
                            for production backend work.
                          </p>
                        </div>
                        <div className="col-lg-4 resume-second-item">
                          <h4 className="h4 text-black fw-500">Diploma — Computer Science</h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            Board of Technical Education · 2018 – 2021
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Early grounding in programming and web technologies before moving into
                            production systems.
                          </p>
                        </div>
                        <div className="col-lg-4 resume-third-item">
                          <h4 className="h4 text-black fw-500">Certifications &amp; awards</h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            Credentials
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            AWS Certified Cloud Practitioner · Semifinalist — Amazon Sambhav
                            Hackathon 2024
                          </p>
                        </div>
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

export default Resume;
