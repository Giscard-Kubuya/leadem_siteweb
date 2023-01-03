function Chat() {
  return (
    <section
      id="cta-section"
      className="cta-section section text-center home-cta-section"
    >
      <div className="container">
        <h2 className="title">Voulez-vous nous contacter?</h2>
        <p className="phone contact-info">
          <span className="intro">Appel télephonique</span>
          <span className="info">
            <a className="text-link" href="tel:+08001234567">
              0800 123 4567
            </a>
          </span>
        </p>
        {/*//phone*/}
        <p className="email contact-info">
          <span className="intro">Notre mail</span>
          <span className="info">
            <a
              className="text-link"
              href="mailto:contact@leademafricaconsulting.com"
            >
              contact@leademafricaconsulting.com
            </a>
          </span>
        </p>
        {/*//phone*/}
      </div>
      {/*//container*/}
    </section>
  );
}

export default Chat;
