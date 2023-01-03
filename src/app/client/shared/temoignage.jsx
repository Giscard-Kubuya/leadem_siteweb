function Temoignage({item}) {
  return (
    <div className="item col-lg-6 col-12 px-5">
      <div className="item-inner">
        <div className="quote-container">
          <i className="fas fa-quote-left" />
          <blockquote className="quote">
            {item.description}
          </blockquote>
          {/*//quote*/}
        </div>
        {/*//quote*/}
        <div className="meta row">
          <div className="profile col-8">
            <img src="assets/images/client/client-profile-2.png" alt />
            <p className="name">
            {item.name_temoin}
              <br />
              <span className="source-title">{item.profile_temoin}</span>
            </p>
          </div>
          {/*//profile*/}
          {/* <div className="client-logo col align-self-center">
            <img src="assets/images/client/client-logo-2.png" alt />
          </div> */}
          {/*//client-logo*/}
        </div>
        {/*//meta*/}
      </div>
      {/*//item-inner*/}
    </div>
  );
}

export default Temoignage;
