import React from "react";

function FooterPage() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="footer-col col-lg-3 col-md-4 col-12 links-col">
                <div className="footer-col-inner">
                  <h3 className="sub-title">Quick Links</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="work.html">Our work</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
                {/*//footer-col-inner*/}
              </div>
              {/*//foooter-col*/}
              <div className="footer-col col-lg-6 col-md-8 col-12 blog-col">
                <div className="footer-col-inner">
                  <h3 className="sub-title">Latest From Our Blog</h3>
                  <div className="item">
                    <figure className="figure">
                      <img
                        className="img-fluid rounded"
                        src="/assets/assets_front/images/blog/blog-tiny-thumb-1.jpg"
                        alt
                      />
                    </figure>
                    <div className="content">
                      <h4 className="post-title">
                        <a href="blog-post.html">DevStudio helps XYZ launch</a>
                      </h4>
                      <p className="intro">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin sodales dolor ut ligula faucibus...
                      </p>
                      <ul className="meta list-inline">
                        <li className="list-inline-item">18 Feb 2022</li>
                        <li className="list-inline-item">|</li>
                        <li className="list-inline-item">James Lee</li>
                      </ul>
                    </div>
                    {/*//content*/}
                  </div>
                  <div className="item">
                    <figure className="figure">
                      <img
                        className="img-fluid rounded"
                        src="assets/images/blog/blog-tiny-thumb-2.jpg"
                        alt
                      />
                    </figure>
                    <div className="content">
                      <h4 className="post-title">
                        <a href="blog-post.html">Free Bootstrap Themes</a>
                      </h4>
                      <p className="intro">
                        Mauris libero leo, dapibus a congue ut, mollis sed
                        nulla. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut tempus augue nec nulla ultricies...
                      </p>
                      <ul className="meta list-inline">
                        <li className="list-inline-item">21 Dec 2021</li>
                        <li className="list-inline-item">|</li>
                        <li className="list-inline-item">Vincent Fowler</li>
                      </ul>
                    </div>
                    {/*//content*/}
                  </div>
                </div>
                {/*//footer-col-inner*/}
              </div>
              {/*//foooter-col*/}
              <div className="footer-col col-lg-3 col-12 contact-col">
                <div className="footer-col-inner">
                  <h3 className="sub-title">Get In Touch</h3>
                  <p className="intro" />
                  <div className="row">
                    <p className="adr clearfix col-lg-12 col-md-4">
                      {/*//You can replace the SVG icon below to your preferred Bootstrap icon - https://icons.getbootstrap.com/ */}
                      <svg
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 16 16"
                        className="bi bi-geo me-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M7.5 4h1v9a.5.5 0 0 1-1 0V4z" />
                        <path
                          fillRule="evenodd"
                          d="M6.489 12.095a.5.5 0 0 1-.383.594c-.565.123-1.003.292-1.286.472-.302.192-.32.321-.32.339 0 .013.005.085.146.21.14.124.372.26.701.382.655.246 1.593.408 2.653.408s1.998-.162 2.653-.408c.329-.123.56-.258.701-.382.14-.125.146-.197.146-.21 0-.018-.018-.147-.32-.339-.283-.18-.721-.35-1.286-.472a.5.5 0 1 1 .212-.977c.63.137 1.193.34 1.61.606.4.253.784.645.784 1.182 0 .402-.219.724-.483.958-.264.235-.618.423-1.013.57-.793.298-1.855.472-3.004.472s-2.21-.174-3.004-.471c-.395-.148-.749-.336-1.013-.571-.264-.234-.483-.556-.483-.958 0-.537.384-.929.783-1.182.418-.266.98-.47 1.611-.606a.5.5 0 0 1 .595.383z"
                        />
                      </svg>
                      <span className="adr-group">
                        <span className="street-address">
                          56 College Green Road
                        </span>
                        <br />
                        <span className="city">London</span>
                        <br />
                        <span className="postal-code">SW1Y 4GG</span>
                        <br />
                        <span className="country-name">UK</span>
                      </span>
                    </p>
                    <p className="tel col-lg-12 col-md-4 col-12">
                      {/*//You can replace the SVG icon below to your preferred Bootstrap icon - https://icons.getbootstrap.com/ */}
                      <svg
                        width="1.25em"
                        height="1.25em"
                        viewBox="0 0 16 16"
                        className="bi bi-headset me-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 1a5 5 0 0 0-5 5v4.5H2V6a6 6 0 1 1 12 0v4.5h-1V6a5 5 0 0 0-5-5z"
                        />
                        <path d="M11 8a1 1 0 0 1 1-1h2v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8zM5 8a1 1 0 0 0-1-1H2v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8z" />
                        <path
                          fillRule="evenodd"
                          d="M13.5 8.5a.5.5 0 0 1 .5.5v3a2.5 2.5 0 0 1-2.5 2.5H8a.5.5 0 0 1 0-1h3.5A1.5 1.5 0 0 0 13 12V9a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M6.5 14a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1z" />
                      </svg>
                      <a href="tel:+08001234567">0800 123 4567</a>
                    </p>
                    <p className="email col-lg-12 col-md-4 col-12">
                      {/*//You can replace the SVG icon below to your preferred Bootstrap icon - https://icons.getbootstrap.com/ */}
                      <svg
                        width="1.25em"
                        height="1.25em"
                        viewBox="0 0 16 16"
                        className="bi bi-envelope me-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                        />
                      </svg>
                      <a href="#">hello@yourdevstudio.com</a>
                    </p>
                  </div>
                </div>
                {/*//footer-col-inner*/}
              </div>
              {/*//foooter-col*/}
            </div>
          </div>
        </div>
        {/*//footer-content*/}
        <div className="bottom-bar">
          <div className="container center">
            <ul className="social-icons list-inline">
              <li className="list-inline-item">
                <a href="https://twitter.com/3rdwave_themes">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/3rdwavethemes">
                  <i className="fab fa-github-alt" />
                </a>
              </li>
              <li className="list-inline-item last">
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
            <small className="copyright text-center">
              Template Copyright @{" "}
              <a href="http://themes.3rdwavemedia.com/" target="_blank">
                3rd Wave Media
              </a>
            </small>
          </div>
          {/*//container*/}
        </div>
        {/*//bottom-bar*/}
      </footer>
      {/*//footer*/}
    </>
  );
}

export default FooterPage;
