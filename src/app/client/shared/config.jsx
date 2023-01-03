import React from "react";

function Config() {
  return (
    <div>
      <div
        className="modal modal-contact"
        id="modal-contact"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-hidden="true"
              />
              <h5 id="contactModalLabel" className="modal-title">
                Start your project today
              </h5>
            </div>
            <div className="modal-body">
              <p className="intro text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing elit laoreet
                tortor consequat nisi scelerisque commodo etiam justo sapien.
              </p>
              <ul className="contact-info list-inline text-center">
                <li className="tel list-inline-item">
                  <div className="icon-holder mb-3">
                    {/*//You can replace the SVG icon below to your preferred Bootstrap icon - https://icons.getbootstrap.com/ */}
                    <svg
                      width="1.25em"
                      height="1.25em"
                      viewBox="0 0 16 16"
                      className="bi bi-telephone-inbound"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.47 16.47 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a className="text-link" href="%2b0800123456.html">
                      0800 123 4567
                    </a>
                  </div>
                </li>
                <li className="email list-inline-item">
                  <div className="icon-holder mb-3">
                    {/*//You can replace the SVG icon below to your preferred Bootstrap icon - https://icons.getbootstrap.com/ */}
                    <svg
                      width="1.25em"
                      height="1.25em"
                      viewBox="0 0 16 16"
                      className="bi bi-envelope"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a className="text-link" href="#">
                      hello@yourdevstudio.com
                    </a>
                  </div>
                </li>
              </ul>
              <form
                id="contact-form"
                className="contact-form"
                method="post"
                action="#"
              >
                <div className="row text-center">
                  <div className="contact-form-inner">
                    <div className="row g-3">
                      <div className="col-lg-6 col-md-6 col-12">
                        <label className="sr-only" htmlFor="cname">
                          Your name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cname"
                          name="name"
                          placeholder="Your name"
                          minLength={2}
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <label className="sr-only" htmlFor="cemail">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="cemail"
                          name="email"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      <div className="col-lg-12 col-12">
                        <label className="sr-only" htmlFor="cmessage">
                          Your message
                        </label>
                        <textarea
                          className="form-control"
                          id="cmessage"
                          name="message"
                          placeholder="Enter your message"
                          rows={12}
                          required
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12 col-12">
                        <button
                          type="submit"
                          className="btn w-100 btn-cta btn-cta-primary"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                    {/*//row*/}
                  </div>
                </div>
                {/*//row*/}
              </form>
              {/*//contact-form*/}
            </div>
            {/*//modal-body*/}
          </div>
          {/*//modal-content*/}
        </div>
        {/*//modal-dialog*/}
      </div>

      <div
        id="config-panel"
        className="config-panel config-panel-hide d-none d-lg-block"
      >
        <div className="panel-inner">
          <a id="config-trigger" className="config-trigger" href="#">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-sliders"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM11.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM7 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM4.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9.5 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM11.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
              />
              <path
                fillRule="evenodd"
                d="M9.5 4H0V3h9.5v1zM16 4h-2.5V3H16v1zM9.5 14H0v-1h9.5v1zm6.5 0h-2.5v-1H16v1zM6.5 9H16V8H6.5v1zM0 9h2.5V8H0v1z"
              />
            </svg>
          </a>
          <h5>Choose Colour</h5>
          <ul id="color-options" className="list-unstyled list-inline">
            <li className="list-inline-item theme-1 active">
              <a data-style="assets/css/theme-1.css" href="#" />
            </li>
            <li className="list-inline-item theme-2">
              <a data-style="assets/css/theme-2.css" href="#" />
            </li>
            <li className="list-inline-item theme-3">
              <a data-style="assets/css/theme-3.css" href="#" />
            </li>
            <li className="list-inline-item theme-4">
              <a data-style="assets/css/theme-4.css" href="#" />
            </li>
            <li className="list-inline-item theme-5">
              <a data-style="assets/css/theme-5.css" href="#" />
            </li>
            <li className="list-inline-item theme-6">
              <a data-style="assets/css/theme-6.css" href="#" />
            </li>
            <li className="list-inline-item theme-7">
              <a data-style="assets/css/theme-7.css" href="#" />
            </li>
            <li className="list-inline-item theme-8">
              <a data-style="assets/css/theme-8.css" href="#" />
            </li>
            <li className="list-inline-item theme-9">
              <a data-style="assets/css/theme-9.css" href="#" />
            </li>
            <li className="list-inline-item theme-10">
              <a data-style="assets/css/theme-10.css" href="#" />
            </li>
          </ul>
          {/*//color-options*/}
          <a id="config-close" className="close" href="#">
            <i className="fas fa-times-circle" />
          </a>
        </div>
        {/*//panel-inner*/}
      </div>
    </div>
  );
}

export default Config;
