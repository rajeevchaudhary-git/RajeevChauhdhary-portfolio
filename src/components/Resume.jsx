import React from 'react'

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
                                    <img src="img/orangeDot.png" alt="orange-dot"/>
                                    <p>My Resume</p>
                                </div>
                                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                    1+ YEARS OF EXPERIENCE
                                </h2>
                            </div>
                            <div className="row mt-50 row-mobile-margin">
                                <div className="col-12 col-lg-2">
                                    <div
                                        className="resume-topics h-100 flex-column justify-content-center position-relative">
                                        <h3
                                            className="h3 line-height-3 resume-topic-item resume-topic-one fw-500 text-black position-absolute">
                                            Education</h3>
                                        <h3
                                            className="h3 line-height-3 resume-topic-item resume-topic-two fw-500 text-black position-absolute">
                                            Software Skills
                                        </h3>
                                        <h3
                                            className="h3 line-height-3 resume-topic-item resume-topic-three fw-500 text-black position-absolute">
                                            Experiences</h3>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-10">
                                    {/* <!-- resume education row --> */}
                                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800"
                                        className="resume-education bg-white">
                                        <div className="row">
                                            {/* <!-- education first column --> */}
                                            <div className="col-lg-4 resume-first-item">
                                                <h4 className="h4 text-black fw-500">
                                                    B-Tech in Computer Science & Engineering
                                                </h4>
                                                <p className="p secondary-black fw-400 line-height-7 mt-10">
                                                    Maharshi Dayananad University (2021 - 2024)
                                                </p>
                                                <p className="p secondary-black fw-400 line-height-7 mt-20">
                                                 learnings:  <b>software development,</b> <b>web technologies</b>, and <b>data structures</b>, providing a strong foundation for my career as a full-stack web developer
                                                </p>
                                            </div>
                                            {/* <!-- education second column --> */}
                                            <div className="col-lg-4 resume-second-item">
                                                <h4 className="h4 text-black fw-500">
                                                    Diploma Computer Science & Engineering
                                                </h4>
                                                <p className="p secondary-black fw-400 line-height-7 mt-10">
                                                    Borad Of Technical Education (2018 - 2021)
                                                </p>
                                                <p className="p secondary-black fw-400 line-height-7 mt-20">
                                                Gained a solid understanding of programming, software development, and web technologies, laying the groundwork for my journey as a full-stack web developer.
                                                </p>
                                            </div>
                                            {/* <!-- education third column --> */}
                                            <div className="col-lg-4 resume-third-item">
                                                <h4 className="h4 text-black fw-500">
                                                    Secondary School Education
                                                </h4>
                                                <p className="p secondary-black fw-400 line-height-7 mt-10">
                                                    GBSSS(2017 - 2018)
                                                </p>
                                                <p className="p secondary-black fw-400 line-height-7 mt-20">
                                                Completed with a focus on foundational subjects in mathematics, science, and computer studies, sparking my interest in technology and software development
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- resume skills row --> */}
                                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"
                                        className="resume-skills bg-white mt-4">
                                        <div className="row">
                                            {/* <!-- skills first column --> */}
                                            <div className="col-lg-4 resume-first-item">
                                                <h4 className="h4 text-black fw-500">
                                                   CourseWork
                                                </h4>
                                                <div className="row mt-10 justify-content-between">
                                                    <p
                                                        className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                                                        C++
                                                    </p>
                                                    <p className="col-2 p secondary-black fw-400 line-height-7">
                                                        80%
                                                    </p>
                                                </div>
                                                <div className="row mt-10 justify-content-between">
                                                    <p
                                                        className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                                                        Data Structures & Algoritms
                                                    </p>
                                                    <p className="col-2 p secondary-black fw-400 line-height-7">
                                                        60%
                                                    </p>
                                                </div>
                                                <div className="row mt-10 justify-content-between">
                                                    <p
                                                        className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                                                        Computer Networking 
                                                    </p>
                                                    <p className="col-2 p secondary-black fw-400 line-height-7">
                                                        70%
                                                    </p>
                                                </div>
                                                <div className="row mt-10 justify-content-between">
                                                    <p
                                                        className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                                                        Operating system
                                                    </p>
                                                    <p className="col-2 p secondary-black fw-400 line-height-7">
                                                        60%
                                                    </p>
                                                </div>
                                                
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        Photoshop
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        60%
                                                    </p>
                                                </div>
                                            </div>
                                            {/* <!-- skills second column --> */}
                                            <div className="col-lg-4 resume-second-item">
                                                <h4 className="h4 text-black fw-500">
                                                    Web Developement
                                                </h4>
                                                <div className="row mt-10 justify-content-between">
                                                    <p
                                                        className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                                                        Php
                                                    </p>
                                                    <p className="col-2 p secondary-black fw-400 line-height-7">
                                                        90%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        Codeignter
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        85%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        React.js
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        80%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        Node.js
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        80%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        Express.js
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        80%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        Mysql
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        90%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        MongoDB
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        90%
                                                    </p>
                                                </div>
                                            </div>
                                            {/* <!-- skills thirdt column --> */}
                                            <div className="col-lg-4 resume-third-item">
                                                <h4 className="h4 text-black fw-500">
                                                    Web Designing
                                                </h4>
                                                <div className="row mt-10 justify-content-between">
                                                    <p
                                                        className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                                                        HTML5
                                                    </p>
                                                    <p className="col-2 p secondary-black fw-400 line-height-7">
                                                        92%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        CSS
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        87%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        JavaScript
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        87%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        Bootstrap5
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        82%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        Tailwind css
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        82%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- resume experience row --> */}
                                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="800"
                                        className="resume-education mt-4 bg-white">
                                        <div className="row">
                                            {/* <!-- experience first column --> */}
                                            <div className="col-lg-4 resume-first-item">
                                                <h4 className="h4 text-black fw-500">
                                                    Full Stack Web Developer 
                                                </h4>
                                                <p className="p secondary-black fw-400 line-height-7 mt-10">
                                                Web Services Company | Remote |(2023 - 2024)</p>
                                                <p className="p secondary-black fw-400 line-height-7 mt-20">
                                                
                                                Developed and maintained dynamic, responsive web applications for various clients. Worked on both front-end and back-end technologies, including Php, Codeignter, React . Integrated third-party services, optimized web performance, and collaborated with teams remotely to deliver high-quality solutions tailored to business needs.
                                                </p>
                                            </div>
                                            {/* <!-- experience second column --> */}
                                            <div className="col-lg-4 resume-second-item">
                                                <h4 className="h4 text-black fw-500">
                                                 Backend developer
                                             </h4>
                                                <p className="p secondary-black fw-400 line-height-7 mt-10">
                                                    DRDO - (2022 - 2023)
                                                </p>
                                                <p className="p secondary-black fw-400 line-height-7 mt-20">
                                                   As Backend Developer In DRDO I Developed an Employee Feedback System with features such as authentication, authorization, user registration, and admin feedback approval. For the backend, I utilized Core PHP and MySQL, while the frontend was built using HTML, CSS, JavaScript, and Bootstrap 5. 
                                                </p>
                                            </div>
                                            {/* <!-- experience third column --> */}
                                            <div className="col-lg-4 resume-third-item">
                                                <h4 className="h4 text-black fw-500">
                                                   Full-Stack-Developer
                                                </h4>
                                                <p className="p secondary-black fw-400 line-height-7 mt-10">
                                                    Navodita Infotech-(Sep 2022- Nov 2022)
                                                </p>
                                                <p className="p secondary-black fw-400 line-height-7 mt-20">
                                                As a Full-Stack Developer at Novidta Infotech, I successfully developed a fully dynamic education website for an institute. My role involved designing and implementing both the front-end and back-end components, ensuring a seamless user experience and robust functionality. 
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
  )
}

export default Resume
