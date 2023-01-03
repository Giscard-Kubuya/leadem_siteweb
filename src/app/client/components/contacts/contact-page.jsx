import { Link } from "react-router-dom";
import Footer from "../../shared/footer";
import Header from "../../shared/header";

function ContactPage(props) {
  return (
    <div>
      <Header position={3}/>
      <section className="contact-section section">
        <div className="container">
          <h2 className="title text-center">Commencez votre vie provée aujourd'hui</h2>
          <p className="intro text-center">
            Contactez-nous pour vous assister à vous securiser contre toutes les menances et tentatives de piratages dans toutes vos fréquentations sur internet.
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
                <a className="text-link" href="tel:2b0800123456">
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
                <a className="text-link" href="mailto:contact@leademafricaconsulting.com">
                contact@leademafricaconsulting.com
                </a>
              </div>
            </li>
          </ul>
          <form
            id="contact-form"
            className="contact-form form"
            method="post"
            action="#"
          >
            <div className="row text-center">
              <div className="contact-form-inner col-lg-8 col-12 me-lg-auto ms-lg-auto">
                <div className="row g-3">
                  <div className="col-md-6 col-12">
                    <label className="sr-only" htmlFor="cname">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cname"
                      ref={props.nameRef}
                      name="name"
                      placeholder="Votre nom"
                      minLength={2}
                      required
                    />
                  </div>
                  <div className="col-md-6 col-12">
                    <label className="sr-only" htmlFor="cemail">
                      Votre addresse mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="cemail"
                      name="email"
                      ref={props.emailRef}
                      placeholder="Votre addresse mail"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="sr-only" htmlFor="cmessage">
                      Votre message
                    </label>
                    <textarea
                      className="form-control"
                      id="cmessage"
                      name="message"
                      ref={props.messageRef}
                      placeholder="Entrer votre message"
                      rows={12}
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      onClick={props.onClick}
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
            <div id="form-messages" />
          </form>
          {/*//contact-form*/}
        </div>
      </section>
      <section className="map-section section">
        <div className="gmap-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79444.64391671501!2d-0.21428374128957384!3d51.51972634746694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876045108e9cad3%3A0x6514817fa6d57c9!2sThe+Web+Kitchen!5e0!3m2!1sen!2suk!4v1469624353093"
            width={600}
            height={450}
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
        {/*//gmap-wrapper*/}
      </section>
      <Footer/>
      
    </div>
  );
}

export default ContactPage;
