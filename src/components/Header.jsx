import React from 'react';

function Header() {
  return (
    <>
      <header className="bg-white header">
        {/* mobile header nav */}
        <div className="mobile-menu d-block d-md-none">
          <nav>
            <ul className="menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="container d-none d-md-block">
          <div className="header-wrapper d-flex justify-content-between align-items-center">
            <div className="logo">
              <a href="index.html">
                <img src="img/Logo.png" alt="logo" />
              </a>
            </div>
            <div className="header-menu-wrapper main-menu">
              {/* nav menu */}
              <nav className="desktop-nav">
                <ul className="header-menu d-flex flex-row justify-content-center menu">
                  <li className="px-2 px-lg-3">
                    <a className="menu-link" href="#home">Home</a>
                  </li>
                  <li className="px-2 px-lg-3">
                    <a className="menu-link" href="#about">About</a>
                  </li>
                  <li className="px-2 px-lg-3">
                    <a className="menu-link" href="#services">Services</a>
                  </li>
                  <li className="px-2 px-lg-3">
                    <a className="menu-link" href="#resume">Resume</a>
                  </li>
                  <li className="px-2 px-lg-3">
                    <a className="menu-link" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="px-2 px-lg-3">
                    <a className="menu-link" href="#testimonial">Testimonial</a>
                  </li>
                  <li className="px-2 px-lg-3">
                    <a className="menu-link" href="#blog">Blog</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* header button */}
            <div className="header-btn-wrapper">
              <a className="btn orange-btn btn_effect" href="#contact">
                <span className="z-1 position-relative">contact us</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
