import React from 'react'

function Blogs() {
  return (
   <>
      <section id="blog" className="blogs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="blogs-wrapper">
                            <div className="section-heading-middle">
                                <div className="sub-heading d-flex align-items-center mx-auto">
                                    <img src="img/orangeDot.png" alt="orange-dot"/>
                                    <p>My Blog</p>
                                </div>
                                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                    LATEST BLOG
                                </h2>
                            </div>
                            <div className="blogs-container row-mobile-margin mt-50">
                                <div className="modal fade" id="blogModalOne" tabIndex="-1" aria-hidden="true">
                                    <div
                                        className="modal-dialog modal-xl modal-dialog-centered justify-content-center w-100">
                                        <div className="border-0 rounded bg-white p-5">
                                            <button type="button" className="btn-close mb-10 btn" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                            <div className="single-blog-details">
                                                <div className="single-blog-featured-img-container row-mobile-margin mt-50">
                                                    <img className="single-blog-featured-img img-fluid"
                                                        src="img/singleBlogFeatured.png" alt="featured image"/>
                                                </div>
                                                <div
                                                    className="single-blog-meta-container mt-50 row-mobile-margin d-flex align-items-center">
                                                    <div className="single-blog-meta-item d-flex align-items-center mr-35">
                                                        <i className="fa-regular fa-user me-2 h6 orange-color"></i>
                                                        <p
                                                            className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
                                                            Roy Gallagher
                                                        </p>
                                                    </div>
                                                    <div className="single-blog-meta-item d-flex align-items-center mr-35">
                                                        <i className="fa-regular fa-calendar me-2 h6 orange-color"></i>
                                                        <p
                                                            className="p secondary-black fw-400 line-height-7 single-blog-meta-author">
                                                            12.09.2023
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="single-page-blog-title mt-20">
                                                    <h2 className="h2 black-color fw-700 line-height-">
                                                        Become A UX/UI Designer With Career Foundry And New Creative
                                                        Design New Idea Generate!
                                                    </h2>
                                                </div>
                                                <div className="single-page-blog-content-body">
                                                    <p className="p secondary-black fw-400 line-height-7 mt-50">
                                                        But I must explain to you how all this mistaken idea of
                                                        denouncing pleasure and praising pain was born and I will give
                                                        you a complete account of the system, and expo the actual
                                                        teachings of the great explorer of the truth, the master-builder
                                                        of human
                                                        happiness. No one rejects, dislikes, or avoids pleasure itself,
                                                        because it is pleasure, but because those who do not know how to
                                                        pursue pleasure rationally encounter consequences that are
                                                        extremely
                                                        painful. Nor again is there anyone who loves or pursues or
                                                        desires to obtain pain of itself, because it is pain, but
                                                        because occasionally circumstances occur in which toil and pain
                                                        can procure him
                                                    </p>
                                                    <div className="blog-content-body-quotation mt-50">
                                                        <img className="blog-quotation-icon mb-30" src="img/quotation.png"
                                                            alt="quotation icon"/>
                                                        <blockquote
                                                            className="h4 line-height-6 fw-600 black-color mb-50 row-mobile-margin">
                                                            At vero eos et accusamus et iusto odio dignissimos ducimus
                                                            qui blanditiis praesentium voluptatum deleniti atque
                                                            corrupti quos dolores et quas molestias excepturi sint
                                                            occaecati ditate non provident, similique sunt in culpa qui
                                                            officia deserunt mollitia
                                                            animi, id est laborum et dolorum fuga.
                                                        </blockquote>
                                                        <h4 className="orange-color h4 fw-600">
                                                            - Roy Gallagher
                                                        </h4>
                                                    </div>
                                                    <div className="row mt-100 align-items-center blog-contents-check-mark">
                                                        <div className="col-12 col-lg-6">
                                                            <img className="w-100 single-blog-inner-img"
                                                                src="img/blogEleven.png" alt="blog page inner image"/>
                                                        </div>
                                                        <div className="col-12 col-lg-6">
                                                            <div className="single-blog-body-list pl-80">
                                                                <ul className="p-0 list-unstyled">
                                                                    <li
                                                                        className="d-flex align-items-center single-blog-body-list-item">
                                                                        <i
                                                                            className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                                                        <p className="h4 text-black fw-600">
                                                                            Understanding the client's needs and goals.
                                                                        </p>
                                                                    </li>
                                                                    <li
                                                                        className="d-flex align-items-center single-blog-body-list-item">
                                                                        <i
                                                                            className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                                                        <p className="h4 text-black fw-600">
                                                                            Research and analysis.
                                                                        </p>
                                                                    </li>
                                                                    <li
                                                                        className="d-flex align-items-center single-blog-body-list-item">
                                                                        <i
                                                                            className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                                                        <p className="h4 text-black fw-600">
                                                                            Concept development.
                                                                        </p>
                                                                    </li>
                                                                    <li
                                                                        className="d-flex align-items-center single-blog-body-list-item">
                                                                        <i
                                                                            className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                                                        <p className="h4 text-black fw-600">
                                                                            Sketching and prototyping.
                                                                        </p>
                                                                    </li>
                                                                    <li
                                                                        className="d-flex align-items-center single-blog-body-list-item">
                                                                        <i
                                                                            className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                                                        <p className="h4 text-black fw-600">
                                                                            Technical skills and software proficiency.
                                                                        </p>
                                                                    </li>
                                                                    <li
                                                                        className="d-flex align-items-center single-blog-body-list-item-last m-0">
                                                                        <i
                                                                            className="fa-regular fa-square-check h3 orange-color mr-20"></i>
                                                                        <p className="h4 text-black fw-600">
                                                                            Communication and collaboration.
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="p secondary-black fw-400 line-height-7 mt-50">
                                                        But I must explain to you how all this mistaken idea of
                                                        denouncing pleasure and praising pain was born and I will give
                                                        you a complete account of the system, and expound the actual
                                                        teachings of the great explorer of the truth, the master-builder
                                                        of human
                                                        happiness. No one rejects, dislikes, or avoids pleasure itself,
                                                        because it is pleasure, but because those who do not know how to
                                                        pursue pleasure rationally encounter consequences that are
                                                        extremely
                                                        painful.
                                                    </p>
                                                </div>
                                                <div
                                                    className="single-blog-likes d-flex align-items-center flex-column flex-sm-row mt-50">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 single-blog-likes-title pb-3 pb-sm-0">
                                                        Is this content most useful?
                                                    </p>
                                                    <div className="likes-buttons-group d-flex align-items-center">
                                                        <button
                                                            className="likes-btn btn btn_effect d-flex align-items-start align-items-sm-center me-4">
                                                            <span className="position-relative z-1">
                                                                <i
                                                                    className="fa-regular fa-thumbs-up blog-details-thumb-icon orange-color"></i>
                                                                <span className="p black-color fw-400 line-height-7">
                                                                    Like
                                                                </span>
                                                            </span>
                                                        </button>
                                                        <button
                                                            className="likes-btn btn btn_effect d-flex align-items-center me-4">
                                                            <span className="position-relative z-1">
                                                                <i
                                                                    className="fa-regular fa-thumbs-down blog-details-thumb-icon orange-color"></i>
                                                                <span className="p black-color fw-400 line-height-7">
                                                                    Dislike
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div
                                                    className="mt-100 single-blog-social-share pl-30 pr-30 pt-40 pb-40 row">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-12 col-lg-5 pb-4 pb-lg-0">
                                                        <span className="black-color">Tags</span>: UI/UX Design, Mobile App,
                                                        Graphics Design
                                                    </p>
                                                    <div
                                                        className="single-blog-social-items col-12 col-lg-7 d-flex align-items-center justify-content-lg-end flex-wrap">
                                                        <div className="d-flex align-items-center pb-3 pb-sm-0">
                                                            <img className="me-2" src="img/shareBlog.png" alt="share icon"/>
                                                            <a className="p secondary-black fw-400 line-height-7"
                                                                href="blog.html">Share</a>
                                                        </div>
                                                        <a className="pl-30 pb-3 pb-sm-0" href="https://facebook.com/">
                                                            <i className="fa-brands fa-facebook-f orange-color h5"></i>
                                                        </a>
                                                        <a className="pl-30 pb-3 pb-sm-0" href="https://twitter.com/">
                                                            <i className="fa-brands fa-twitter h5 orange-color"></i>
                                                        </a>
                                                        <a className="pl-30 pb-3 pb-sm-0" href="https://dribble.com/">
                                                            <i className="fa-brands fa-dribbble h5 orange-color"></i>
                                                        </a>
                                                        <a className="pl-30 pb-3 pb-sm-0" href="https://behance.com/">
                                                            <i className="fa-brands fa-behance h5 orange-color"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="single-blog-comments-container mt-100">
                                                    <h3 className="h3 fw-600 line-height-3 black-color mb-50">Comment (4)
                                                    </h3>
                                                    <div className="all-comments">
                                                        <ul className="main-comment list-unstyled">
                                                            <li>
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-2">
                                                                        <div className="img-overlay">
                                                                            <img className="img-fluid"
                                                                                src="img/commenterOne.png"
                                                                                alt="commenter image"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-10">
                                                                        <h3
                                                                            className="h3 fw-600 line-height-3 black-color mb-10">
                                                                            Elayne Warner
                                                                        </h3>
                                                                        <p
                                                                            className="p secondary-black fw-400 line-height-7 mb-30">
                                                                            12.09.2023 | 10:30 am
                                                                        </p>
                                                                        <p
                                                                            className="p secondary-black fw-400 line-height-7 mb-30">
                                                                            No one rejects, dislikes, or avoids pleasure
                                                                            itself, because it is pleasure, but because
                                                                            those who do not know how to pursue pleasure
                                                                            rationally encounter consequences that are
                                                                            extremely painful. Nor again is there anyone
                                                                            who loves or pursues or desires
                                                                            to obtain pain of itself, because it is
                                                                            pain, but because occasionally circumstances
                                                                            occur in which toil and pain can procure him
                                                                        </p>
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <div
                                                                                className="likes-buttons-group d-flex align-items-center">
                                                                                <button
                                                                                    className="likes-btn-two btn d-flex align-items-center me-4 border-0">
                                                                                    <span className="position-relative z-1">
                                                                                        <i
                                                                                            className="fa-regular fa-thumbs-up blog-details-thumb-icon orange-color"></i>
                                                                                        <span
                                                                                            className="p black-color fw-400 line-height-7">
                                                                                            Like
                                                                                        </span>
                                                                                    </span>
                                                                                </button>
                                                                                <button
                                                                                    className="likes-btn-two btn d-flex align-items-center me-4 border-0">
                                                                                    <span className="position-relative z-1">
                                                                                        <i
                                                                                            className="fa-regular fa-thumbs-down blog-details-thumb-icon orange-color"></i>
                                                                                        <span
                                                                                            className="p black-color fw-400 line-height-7">
                                                                                            Dislike
                                                                                        </span>
                                                                                    </span>
                                                                                </button>
                                                                            </div>
                                                                            <button
                                                                                className="btn d-flex align-items-center me-4 border-0 reply-btn">
                                                                                <i
                                                                                    className="fa-solid fa-reply-all mr-10 h6 orange-color"></i>
                                                                                <span
                                                                                    className="p black-color fw-400 line-height-7">
                                                                                    Reply
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-divider"></div>
                                                                <ul className="reply-comment">
                                                                    <li>
                                                                        <div className="row">
                                                                            <div className="col-12 col-sm-2"></div>
                                                                            <div className="col-12 col-sm-10">
                                                                                <div className="row">
                                                                                    <div className="col-12 col-sm-2">
                                                                                        <div className="img-overlay">
                                                                                            <img className="img-fluid"
                                                                                                src="img/replyerOne.png"
                                                                                                alt="commenter image"/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-12 col-sm-10">
                                                                                        <h3
                                                                                            className="h3 fw-600 line-height-3 black-color mb-10">
                                                                                            David Waite
                                                                                        </h3>
                                                                                        <p
                                                                                            className="p secondary-black fw-400 line-height-7 mb-30">
                                                                                            12.09.2023 | 10:30 am
                                                                                        </p>
                                                                                        <p
                                                                                            className="p secondary-black fw-400 line-height-7 mb-30">
                                                                                            No one rejects, dislikes, or
                                                                                            avoids pleasure itself,
                                                                                            because it is pleasure, but
                                                                                            because those who do not
                                                                                            know how to pursue pleasure
                                                                                            rationally encounter
                                                                                            consequences that are
                                                                                            extremely painful. Nor again
                                                                                            is there anyone who loves or
                                                                                            pursues or desires
                                                                                            to obtain pain of itself,
                                                                                            because it is pain, but
                                                                                            because occasionally
                                                                                            circumstances occur in which
                                                                                            toil and pain can procure
                                                                                            him
                                                                                        </p>
                                                                                        <div
                                                                                            className="d-flex align-items-center justify-content-between">
                                                                                            <div
                                                                                                className="likes-buttons-group d-flex align-items-center">
                                                                                                <button
                                                                                                    className="likes-btn-two btn d-flex align-items-center me-4 border-0">
                                                                                                    <span
                                                                                                        className="position-relative z-1">
                                                                                                        <i
                                                                                                            className="fa-regular fa-thumbs-up blog-details-thumb-icon orange-color"></i>
                                                                                                        <span
                                                                                                            className="p black-color fw-400 line-height-7">
                                                                                                            Like
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    className="likes-btn-two btn d-flex align-items-center me-4 border-0">
                                                                                                    <span
                                                                                                        className="position-relative z-1">
                                                                                                        <i
                                                                                                            className="fa-regular fa-thumbs-down blog-details-thumb-icon orange-color"></i>
                                                                                                        <span
                                                                                                            className="p black-color fw-400 line-height-7">
                                                                                                            Dislike
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <button
                                                                                                className="btn d-flex align-items-center me-4 border-0 reply-btn">
                                                                                                <i
                                                                                                    className="fa-solid fa-reply-all mr-10 h6 orange-color"></i>
                                                                                                <span
                                                                                                    className="p black-color fw-400 line-height-7">
                                                                                                    Reply
                                                                                                </span>
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                        <div className="comment-divider"></div>
                                                        <ul className="main-comment list-unstyled">
                                                            <li>
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-2">
                                                                        <div className="img-overlay">
                                                                            <img className="img-fluid"
                                                                                src="img/commenterTwo.png"
                                                                                alt="commenter image"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-10">
                                                                        <h3
                                                                            className="h3 fw-600 line-height-3 black-color mb-10">
                                                                            Nannie Somerville
                                                                        </h3>
                                                                        <p
                                                                            className="p secondary-black fw-400 line-height-7 mb-30">
                                                                            12.09.2023 | 10:30 am
                                                                        </p>
                                                                        <p
                                                                            className="p secondary-black fw-400 line-height-7 mb-30">
                                                                            No one rejects, dislikes, or avoids pleasure
                                                                            itself, because it is pleasure, but because
                                                                            those who do not know how to pursue pleasure
                                                                            rationally encounter consequences that are
                                                                            extremely painful. Nor again is there anyone
                                                                            who loves or pursues or desires
                                                                            to obtain pain of itself, because it is
                                                                            pain, but because occasionally circumstances
                                                                            occur in which toil and pain can procure him
                                                                        </p>
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <div
                                                                                className="likes-buttons-group d-flex align-items-center">
                                                                                <button
                                                                                    className="likes-btn-two btn d-flex align-items-center me-4 border-0">
                                                                                    <span className="position-relative z-1">
                                                                                        <i
                                                                                            className="fa-regular fa-thumbs-up blog-details-thumb-icon orange-color"></i>
                                                                                        <span
                                                                                            className="p black-color fw-400 line-height-7">
                                                                                            Like
                                                                                        </span>
                                                                                    </span>
                                                                                </button>
                                                                                <button
                                                                                    className="likes-btn-two btn d-flex align-items-center me-4 border-0">
                                                                                    <span className="position-relative z-1">
                                                                                        <i
                                                                                            className="fa-regular fa-thumbs-down blog-details-thumb-icon orange-color"></i>
                                                                                        <span
                                                                                            className="p black-color fw-400 line-height-7">
                                                                                            Dislike
                                                                                        </span>
                                                                                    </span>
                                                                                </button>
                                                                            </div>
                                                                            <button
                                                                                className="btn d-flex align-items-center me-4 border-0 reply-btn">
                                                                                <i
                                                                                    className="fa-solid fa-reply-all mr-10 h6 orange-color"></i>
                                                                                <span
                                                                                    className="p black-color fw-400 line-height-7">
                                                                                    Reply
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-divider"></div>
                                                                <ul className="reply-comment">
                                                                    <li>
                                                                        <div className="row">
                                                                            <div className="col-12 col-sm-2"></div>
                                                                            <div className="col-12 col-sm-10">
                                                                                <div className="row">
                                                                                    <div className="col-12 col-sm-2">
                                                                                        <div className="img-overlay">
                                                                                            <img className="img-fluid"
                                                                                                src="img/replyerTwo.png"
                                                                                                alt="commenter image"/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-12 col-sm-10">
                                                                                        <h3
                                                                                            className="h3 fw-600 line-height-3 black-color mb-10">
                                                                                            William Ortiz
                                                                                        </h3>
                                                                                        <p
                                                                                            className="p secondary-black fw-400 line-height-7 mb-30">
                                                                                            12.09.2022 | 10:30 am
                                                                                        </p>
                                                                                        <p
                                                                                            className="p secondary-black fw-400 line-height-7 mb-30">
                                                                                            No one rejects, dislikes, or
                                                                                            avoids pleasure itself,
                                                                                            because it is pleasure, but
                                                                                            because those who do not
                                                                                            know how to pursue pleasure
                                                                                            rationally encounter
                                                                                            consequences that are
                                                                                            extremely painful. Nor again
                                                                                            is there anyone who loves or
                                                                                            pursues or desires
                                                                                            to obtain pain of itself,
                                                                                            because it is pain, but
                                                                                            because occasionally
                                                                                            circumstances occur in which
                                                                                            toil and pain can procure
                                                                                            him
                                                                                        </p>
                                                                                        <div
                                                                                            className="d-flex align-items-center justify-content-between">
                                                                                            <div
                                                                                                className="likes-buttons-group d-flex align-items-center">
                                                                                                <button
                                                                                                    className="likes-btn-two btn d-flex align-items-center me-4 border-0">
                                                                                                    <span
                                                                                                        className="position-relative z-1">
                                                                                                        <i
                                                                                                            className="fa-regular fa-thumbs-up blog-details-thumb-icon orange-color"></i>
                                                                                                        <span
                                                                                                            className="p black-color fw-400 line-height-7">
                                                                                                            Like
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    className="likes-btn-two btn d-flex align-items-center me-4 border-0">
                                                                                                    <span
                                                                                                        className="position-relative z-1">
                                                                                                        <i
                                                                                                            className="fa-regular fa-thumbs-down blog-details-thumb-icon orange-color"></i>
                                                                                                        <span
                                                                                                            className="p black-color fw-400 line-height-7">
                                                                                                            Dislike
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <button
                                                                                                className="btn d-flex align-items-center me-4 border-0 reply-btn">
                                                                                                <i
                                                                                                    className="fa-solid fa-reply-all mr-10 h6 orange-color"></i>
                                                                                                <span
                                                                                                    className="p black-color fw-400 line-height-7">
                                                                                                    Reply
                                                                                                </span>
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="single-blog-comment-box">
                                                    <h2 className="h2 black-color line-height-3 fw-700 mb-50">
                                                        Leave your comment
                                                    </h2>
                                                    <form>
                                                        <div className="row g-4">
                                                            <div className="col-12 col-sm-6">
                                                                <input type="text"
                                                                    className="form-control home-contact-input"
                                                                    placeholder="Your Name"/>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <input type="email"
                                                                    className="form-control home-contact-input"
                                                                    placeholder="Your Email"/>
                                                            </div>
                                                            <div className="col-12">
                                                                <textarea className="form-control single-blog-comment-input"
                                                                    placeholder="Comment"></textarea>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="col-12">
                                                                    <button type="submit"
                                                                        className="btn orange-btn btn_effect row-mobile-margin mt-50">
                                                                        <span className="position-relative z-1">
                                                                            Post Comment
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card p-0 blog-card">

                                    <div data-bs-toggle="modal" data-bs-target="#blogModalOne" className="img-overlay">
                                        <img src="img/blogOne.png" className="card-img-top img-fluid blog-card-img"
                                            alt="blog image"/>
                                    </div>
                                    <div className="card-body blog-card-body">
                                        <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">20 January,
                                            2023
                                        </p>
                                        <a data-bs-toggle="modal" data-bs-target="#blogModalOne" href="#blogModalOne">
                                            <span className="card-title h3 fw-600 line-height-3 black-color">Become a UX/UI
                                                Designer
                                                With Career Foundry.</span>
                                        </a>
                                        <a data-bs-toggle="modal" data-bs-target="#blogModalOne" href="#blogModalOne">
                                            <div className="blog-card-btn d-flex align-items-center mt-4">
                                                <span
                                                    className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">Read
                                                    More</span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="card p-0 blog-card">

                                    <div data-bs-toggle="modal" data-bs-target="#blogModalOne" className="img-overlay">
                                        <img src="img/blogTwo.png" className="card-img-top img-fluid blog-card-img"
                                            alt="blog image"/>
                                    </div>
                                    <div className="card-body blog-card-body">
                                        <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">15 January,
                                            2023
                                        </p>
                                        <a data-bs-toggle="modal" data-bs-target="#blogModalOne" href="#blogModalOne">
                                            <span className="card-title h3 fw-600 line-height-3 black-color">The Best App
                                                Development
                                                For Your Business Plan.</span>
                                        </a>
                                        <a data-bs-toggle="modal" data-bs-target="#blogModalOne" href="#blogModalOne">
                                            <div className="blog-card-btn d-flex align-items-center mt-4">
                                                <span
                                                    className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">Read
                                                    More</span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="card p-0 blog-card">

                                    <div data-bs-toggle="modal" data-bs-target="#blogModalOne" className="img-overlay">
                                        <img src="img/blogThree.png" className="card-img-top img-fluid blog-card-img"
                                            alt="blog image"/>
                                    </div>
                                    <div className="card-body blog-card-body">
                                        <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">08 January,
                                            2023
                                        </p>
                                        <a data-bs-toggle="modal" data-bs-target="#blogModalOne" href="#blogModalOne">
                                            <span className="card-title h3 fw-600 line-height-3 black-color">The Best
                                                Portfolio For
                                                Agency Design Thinking</span>
                                        </a>
                                        <a data-bs-toggle="modal" data-bs-target="#blogModalOne" href="#blogModalOne">
                                            <div className="blog-card-btn d-flex align-items-center mt-4">
                                                <span
                                                    className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">Read
                                                    More</span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
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

export default Blogs
