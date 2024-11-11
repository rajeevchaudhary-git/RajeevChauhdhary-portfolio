import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
  // Slick slider settings
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="portfolio-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src="img/orangeDot.png" alt="orange-dot" />
                    <p>My Portfolio</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    VISIT MY RECENET PROJECTS
                  </h2>
                </div>
                <div className="mt-50 row-mobile-margin">
                  {/* Portfolio Slider */}
                  <Slider {...settings}>
                    {/* Slide 1 */}
                    <div className="portfolio-massonary-items mix ui all position-relative ml-2">
                      <img
                        className="img-fluid"
                        src="img/foodapp.png"
                        alt="portfolio img"
                        style={{ margin: "10px" }}
                      />
                     
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                          Food Ordering website (bombaybutlers)
                             </p>
                          <a
                            href="#portfolioOne"
                            className="h4 text-white fw-600 line-height-3"
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalfood"
                          >
                           bombaybutlers (CodeIgniter,php,boostrap)
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-massonary-items mix ui all position-relative ml-2">
                      <img
                        className="img-fluid"
                        src="img/cabs.png"
                        alt="portfolio img"
                        style={{ margin: "10px" }}
                      />
                     
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                            Qwick cabs 
                          </p>
                          <a
                            href="#portfolioOne"
                            className="h4 text-white fw-600 line-height-3"
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalcabs"
                          >
                           Qwick cabs  (Laravel,php,boostrap)
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-massonary-items mix ui all position-relative ml-2">
                      <img
                        className="img-fluid"
                        src="img/chatapp1.png"
                        alt="portfolio img"
                        style={{ margin: "10px" }}
                      />
                     
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                            Chat App
                          </p>
                          <a
                            href="#portfolioOne"
                            className="h4 text-white fw-600 line-height-3"
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalOne"
                          >
                            Chat App (React.js,Node.js, MongoDB)
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="portfolio-massonary-items mix graphic all position-relative">
                      <img
                        className="img-fluid"
                        src="img/fitspot.png"
                        alt="portfolio img"
                        style={{ margin: "10px" }}
                      />
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                            Web Application 
                          </p>
                          <a
                            href="#portfolioTwo"
                            className="h4 text-white fw-600 line-height-3"
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalTwo"
                          >
                            FitSpot A fitness Web application
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="portfolio-massonary-items mix ui graphic all position-relative">
                      <img
                        className="img-fluid"
                        src="img/slide3.png"
                        alt="portfolio img"
                        style={{ margin: "10px" }}
                      />
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                           Ecommerce website
                          </p>
                          <a
                            href="#portfolioThree"
                            className="h4 text-white fw-600 line-height-3"
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalThree"
                          >
                            Fully Dynamic Ecommerce Web application
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Slide 4 */}
                    <div className="portfolio-massonary-items mix web all position-relative">
                      <img
                        className="img-fluid"
                        src="img/slide4.png"
                        alt="portfolio img"
                        style={{ margin: "10px" }}
                      />
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                          Bussiness Development Site 
                          </p>
                          <a
                            href="#portfolioFour"
                            className="h4 text-white fw-600 line-height-3"
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalFour"
                          >
                            Fully Dynamic with Admin panel 
                            
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Slide 5 */}
                 

                    {/* Add more slides as needed */}
                  </Slider>

                  {/* Modal for portfolio items  1 */}
<div className="modal fade" id="portfolioModalOne" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg"> {/* Increase modal size */}
    <button
      type="button"
      className="btn-close mb-10"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
    <div className="border-0 rounded bg-white p-5">
      <div className="single-blog-details">
        <div className="single-blog-featured-img-container row-mobile-margin mt-50">
        
        <div>
                <img
                  className="single-blog-featured-img img-fluid"
                  src="img/chatapp1.png"
                  alt="featured image"
                />
                </div>
          
        </div>

        <div className="single-blog-meta-container mt-50 row-mobile-margin d-flex align-items-center">
          <div className="single-blog-meta-item d-flex align-items-center mr-35">
            <i className="fa-regular fa-user me-2 h6 orange-color"></i>
            <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
              Rajeev Chaudhary
            </p>
          </div>
          <div className="single-blog-meta-item d-flex align-items-center mr-35">
            <i className="fa-regular fa-calendar me-2 h6 orange-color"></i>
            <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
              12.09.2024
            </p>
          </div>
        </div>

        <div className="single-page-blog-title mt-20">
          <h2 className="h2 black-color fw-700 line-height-">
            Real-Time Chat App Using Socket.io
          </h2>
        </div>

        <div className="single-page-blog-content-body">
          <p className="p secondary-black fw-400 line-height-7 mt-50">
            Developed a real-time chat application that allows users to register, log in, and engage in one-on-one messaging. This application features a user-friendly interface built with React and Tailwind CSS for a modern look and feel. The backend is powered by Node.js and Express.js, ensuring efficient handling of requests and real-time communication. User data and messages are securely stored in MongoDB, enabling seamless friend management and instant messaging. Key functionalities include user authentication, friend requests, and notifications for new messages, providing a comprehensive chat experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="portfolioModalfood" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <button
      type="button"
      className="btn-close mb-10"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
    <div className="border-0 rounded bg-white p-5">
      <div className="single-blog-details">
        <div className="single-blog-featured-img-container row-mobile-margin mt-50">
          <div>
            <img
              className="single-blog-featured-img img-fluid"
              src="img/foodapp.png" 
              alt="Bombay Butlers Featured Image"
            />
          </div>
        </div>

        <div className="single-blog-meta-container mt-50 row-mobile-margin d-flex align-items-center">
          <div className="single-blog-meta-item d-flex align-items-center mr-35">
            <i className="fa-regular fa-user me-2 h6 orange-color"></i>
            <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
              Rajeev Chaudhary
            </p>
          </div>
          <div className="single-blog-meta-item d-flex align-items-center mr-35">
            <i className="fa-regular fa-calendar me-2 h6 orange-color"></i>
            <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
              12.09.2024
            </p>
          </div>
        </div>

        <div className="single-page-blog-title mt-20">
          <h2 className="h2 black-color fw-700 line-height-">
            Bombay Butlers - Online Food Delivery Service
          </h2>
        </div>

        <div className="single-page-blog-content-body">
          <p className="p secondary-black fw-400 line-height-7 mt-50">
            Bombay Butlers is an online food delivery service offering authentic and delicious Indian cuisine, delivered right to your doorstep. The website provides a seamless ordering experience, with a user-friendly interface built using React and styled with Tailwind CSS. The backend is powered by Node.js and Express.js, ensuring fast and efficient order management. Payment processing is integrated securely, and the website supports real-time order tracking. Key features include a wide menu selection, quick ordering process, and reliable delivery service.
          </p>

          <p className="p secondary-black fw-400 line-height-7 mt-20">
            Features of Bombay Butlers include:
          </p>
          <ul className="mt-20">
            <li>Wide range of Indian food options</li>
            <li>Real-time order tracking</li>
            <li>Secure online payment integration</li>
            <li>Fast delivery services</li>
            <li>Responsive design for all devices</li>
          </ul>

          <p className="p secondary-black fw-400 line-height-7 mt-20">
            Bombay Butlers strives to deliver high-quality meals with the convenience of online ordering, making it easier for food lovers to enjoy authentic Indian dishes from the comfort of their homes.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="portfolioModalcabs" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg"> 
    <button
      type="button"
      className="btn-close mb-10"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
    <div className="border-0 rounded bg-white p-5">
      <div className="single-blog-details">
        <div className="single-blog-featured-img-container row-mobile-margin mt-50">
          <div>
            <img
              className="single-blog-featured-img img-fluid"
              src="img/cabs2.png" 
              alt="Qwick Cabs Featured Image"
            />
          </div>
        </div>

        <div className="single-blog-meta-container mt-50 row-mobile-margin d-flex align-items-center">
          <div className="single-blog-meta-item d-flex align-items-center mr-35">
            <i className="fa-regular fa-user me-2 h6 orange-color"></i>
            <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
              Rajeev Chaudhary
            </p>
          </div>
          <div className="single-blog-meta-item d-flex align-items-center mr-35">
            <i className="fa-regular fa-calendar me-2 h6 orange-color"></i>
            <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
              2024
            </p>
          </div>
        </div>

        <div className="single-page-blog-title mt-20">
          <h2 className="h2 black-color fw-700 line-height-">
            Qwick Cabs - A Website for Booking Cabs
          </h2>
        </div>

        <div className="single-page-blog-content-body">
          <p className="p secondary-black fw-400 line-height-7 mt-50">
            Qwick Cabs is a user-friendly platform designed for quick and easy cab bookings. With a modern and responsive interface, users can seamlessly book cabs for both short and long-distance travel. The website is built with a focus on simplicity and reliability, providing a smooth booking experience from start to finish.
          </p>

          <p className="p secondary-black fw-400 line-height-7 mt-20">
            Features of Qwick Cabs include:
          </p>
          <ul className="mt-20">
            <li>Easy and fast cab booking process</li>
            <li>Multiple payment options</li>
            <li>Responsive design for all devices</li>
          </ul>

          <p className="p secondary-black fw-400 line-height-7 mt-20">
            Qwick Cabs aims to provide a hassle-free and reliable cab service, making transportation more accessible and convenient for everyone.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>






                  {/* modal 2  */}
<div className="modal fade" id="portfolioModalTwo" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg"> {/* Increase modal size */}
    <button
      type="button"
      className="btn-close mb-10"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
    <div className="border-0 rounded bg-white p-5">
      <div className="single-blog-details">
        <div className="single-blog-featured-img-container row-mobile-margin mt-50">
        
        <div>
                <img
                  className="single-blog-featured-img img-fluid"
                  src="img/fitspot.png"
                  alt="featured image"
                />
                </div>
          
        </div>

        <div className="single-blog-meta-container mt-50 row-mobile-margin d-flex align-items-center">
          <div className="single-blog-meta-item d-flex align-items-center mr-35">
            <i className="fa-regular fa-user me-2 h6 orange-color"></i>
            <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
              Rajeev Chaudhary
            </p>
          </div>
          <div className="single-blog-meta-item d-flex align-items-center mr-35">
            <i className="fa-regular fa-calendar me-2 h6 orange-color"></i>
            <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
              12.09.2024
            </p>
          </div>
        </div>

        <div className="single-page-blog-title mt-20">
          <h2 className="h2 black-color fw-700 line-height-">
          FitSpot.in – Find Gyms Near You & List Your Gym | Built with CodeIgniter, SQL, HTML, CSS, and Bootstrap


          </h2>
        </div>

        <div className="single-page-blog-content-body">
          <p className="p secondary-black fw-400 line-height-7 mt-50">
          FitSpot.in is a comprehensive platform designed to help users effortlessly find gyms near their location and for gym owners to list their facilities. Built using the powerful CodeIgniter framework, with a secure SQL database, and a responsive front-end powered by HTML, CSS, and Bootstrap, FitSpot.in offers a seamless and user-friendly experience across all devices. Whether you're a fitness enthusiast looking for the perfect gym or a gym owner wanting to increase your visibility, FitSpot.in provides an efficient solution for all your needs.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* end here modal 2 */}
               

{/* modal 3  */}
<div className="modal fade" id="portfolioModalThree" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg"> {/* Increase modal size */}
    <button
      type="button"
      className="btn-close mb-10"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
    <div className="border-0 rounded bg-white p-5">
      <div className="single-blog-details">
        <div className="single-blog-featured-img-container row-mobile-margin mt-50">
        
        <div>
                <img
                  className="single-blog-featured-img img-fluid"
                  src="img/slide3.png"
                  alt="featured image"
                />
                </div>
          
        </div>

        <div className="single-blog-meta-container mt-50 row-mobile-margin d-flex align-items-center">
          <div className="single-blog-meta-item d-flex align-items-center mr-35">
            <i className="fa-regular fa-user me-2 h6 orange-color"></i>
            <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
              Rajeev Chaudhary
            </p>
          </div>
          <div className="single-blog-meta-item d-flex align-items-center mr-35">
            <i className="fa-regular fa-calendar me-2 h6 orange-color"></i>
            <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
              12.09.2024
            </p>
          </div>
        </div>

        <div className="single-page-blog-title mt-20">
          <h2 className="h2 black-color fw-700 line-height-">
          ElectroniBC Mart – Dynamic E-Commerce Platform | Powered by CodeIgniter, PHP, SQL, HTML, CSS, JavaScript, AJAX, and Bootstrap
          </h2>
        </div>

        <div className="single-page-blog-content-body">
          <p className="p secondary-black fw-400 line-height-7 mt-50">
          ElectroniBC Mart is a fully dynamic e-commerce platform built to deliver a seamless shopping experience. Developed using the robust CodeIgniter framework, with PHP for backend processing, SQL for secure data management, and a responsive front-end using HTML, CSS, JavaScript, AJAX, and Bootstrap, the site ensures fast, user-friendly navigation across all devices. Whether you're browsing for electronics or managing your shopping cart, ElectroniBC Mart offers an optimized and dynamic platform tailored for modern e-commerce needs.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* // modal 3 end here  */}
               



  {/* modal 4  */}

  <div className="modal fade" id="portfolioModalFour" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg"> {/* Increase modal size */}
    <button
      type="button"
      className="btn-close mb-10"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
    <div className="border-0 rounded bg-white p-5">
      <div className="single-blog-details">
        <div className="single-blog-featured-img-container row-mobile-margin mt-50">
        
        <div>
                <img
                  className="single-blog-featured-img img-fluid"
                  src="img/slide4.png"
                  alt="featured image"
                />
                </div>
          
        </div>

        <div className="single-blog-meta-container mt-50 row-mobile-margin d-flex align-items-center">
          <div className="single-blog-meta-item d-flex align-items-center mr-35">
            <i className="fa-regular fa-user me-2 h6 orange-color"></i>
            <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
              Rajeev Chaudhary
            </p>
          </div>
          <div className="single-blog-meta-item d-flex align-items-center mr-35">
            <i className="fa-regular fa-calendar me-2 h6 orange-color"></i>
            <p className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
              12.09.2024
            </p>
          </div>
        </div>

        <div className="single-page-blog-title mt-20">
          <h2 className="h2 black-color fw-700 line-height-">
          WebServices – Professional Web Development, SEO, and Graphic Design Solutions | Built with CodeIgniter, PHP, SQL, HTML, CSS, JavaScript, and Bootstrap
          </h2>
        </div>

        <div className="single-page-blog-content-body">
          <p className="p secondary-black fw-400 line-height-7 mt-50">
          WebServices is a dynamic business platform built using CodeIgniter, PHP, and SQL, offering expert web development, search engine optimization (SEO), and graphic design services. With a responsive front-end designed using HTML, CSS, JavaScript, and Bootstrap, the website ensures a seamless user experience across all devices. Whether you need a custom-built website, enhanced SEO rankings, or visually engaging graphic designs, WebServices provides tailored solutions to help your business thrive in the digital space.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* // Modal 4 end here  */}
              
 

 {/* modal 5 */}
                  {/* <div
                    className="modal fade"
                    id="portfolioModalFive"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div>
                        <button
                          type="button"
                          className="btn-close mb-10"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                        <img
                          className="img-fluid"
                          src="img/portfolioFive.png"
                          alt="portfolio img"
                        />
                      </div>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
