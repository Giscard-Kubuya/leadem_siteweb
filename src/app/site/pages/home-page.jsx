import { useOutletContext } from "react-router-dom";
import Realisation from "../shared/Realisation";
import Service from "../shared/Service";
function HomePage() {
  const [diapos, services, realisations] = useOutletContext();
  return (
    <>
      {/* <section id="who" className="who section">
        <div className="container text-center">
          <h2 className="title text-center">Qui sommes-nous</h2>
          <p className="intro text-center">
            We are a small team of web developers and designers based in XYZ. We
            are specialised in JavaScript, AngularJS and Python.
          </p>

          <div className="row benefits text-center">
            {services.map((item) => (
              <Service key={item.id_service} item={item} />
            ))}
          </div>
          <a className="btn btn-cta btn-cta-secondary" href="about.html">
            More about us
          </a>
        </div>
       
      </section> */}

<section id="who" className="who section">
  <div className="container text-center">
    <h2 className="title text-center">Who We Are</h2>
    <p className="intro text-center">We are a small team of web developers and designers based in XYZ. We are specialised in JavaScript, AngularJS and Python. </p>
    <div className="row benefits text-center">
      <div className="item col-lg-3 col-md-6 col-12">
        <div className="item-inner rounded">
          {/*//You can replace the SVG icon below to your preferred Bootstrap icon - https://icons.getbootstrap.com/ */}
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-people" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zm7.973.056v-.002.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          </svg>                     
          <h3 className="sub-title">Skilled team</h3>
          <div className="desc">
            <p>Tell your potential client why they should choose your service and how you are different from your competitors. Lorem ipsum dolor sit amet. </p>
          </div>                
        </div>       
      </div>{/*//item*/}
      <div className="item col-lg-3 col-md-6 col-12">
        <div className="item-inner rounded">
          {/*//You can replace the SVG icon below to your preferred Bootstrap icon - https://icons.getbootstrap.com/ */}
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z" />
            <path fillRule="evenodd" d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z" />
          </svg>
          <h3 className="sub-title">Agile approach</h3>
          <div className="desc">
            <p>You can change the icon above to any of the 1000+ <a className="text-link" href="https://icons.getbootstrap.com/">Bootstrap SVG icons</a> available. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>   
        </div>{/*//item-inner*/}                    
      </div>{/*//item*/}
      <div className="item col-lg-3 col-md-6 col-12">
        <div className="item-inner rounded">
          {/*//You can replace the SVG icon below to your preferred Bootstrap icon - https://icons.getbootstrap.com/ */}
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-earmark-code" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
            <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z" />
            <path fillRule="evenodd" d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
          </svg>
          <h3 className="sub-title">High quality code</h3>
          <div className="desc">
            <p>Morbi sit amet interdum lorem. Donec vel pretium sem, bibendum lobortis ipsum. Fusce molestie eros eget tortor convallis aliquam.</p>
          </div>            
        </div>{/*//item-inner*/}
      </div>{/*//item*/}
      <div className="item col-lg-3 col-md-6 col-12">
        <div className="item-inner rounded">
          {/*//You can replace the SVG icon below to your preferred Bootstrap icon - https://icons.getbootstrap.com/ */}
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-graph-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z" />
            <path fillRule="evenodd" d="M14.39 9.041l-4.349-5.436L7 6.646 3.354 3l-.708.707L7 8.061l2.959-2.959 3.65 4.564.781-.625z" />
            <path fillRule="evenodd" d="M10 9.854a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v3.5h-3.5a.5.5 0 0 0-.5.5z" />
          </svg>
          <h3 className="sub-title">No overheads</h3>
          <div className="desc">
            <p>Proin ornare dolor elementum mattis scelerisque. Suspendisse non scelerisque elit. Morbi ac nibh finibus nibh ultricies placerat.</p>
          </div>         
        </div>{/*//item-inner*/}              
      </div>{/*//item*/}
    </div>{/*//row*/}
    <a className="btn btn-cta btn-cta-secondary" href="about.html">More about us</a>
  </div>{/*//container*/}
</section>{/*//who*/}


      <section id="latest-work" className="latest-work section">
        <div className="container-fluid text-center">
          <h2 className="title text-center">Our Latest Work</h2>
          <div id="work-slider" className="items work-slider">
            <div className="item item-1">
              <div className="row">
                <figure className="figure-container col-lg-6 col-12">
                  <a href="case-study-1.html" target="_blank" />
                </figure>
                <div className="content col-lg-6 col-12">
                  <div className="content-inner">
                    <h3 className="project-title">
                      <a className="text-link" href="case-study-1.html">
                        Case Study One Heading
                      </a>
                    </h3>
                    <ul className="meta list-unstyled">
                      <li>
                        <strong className="me-1">Client:</strong> Google
                      </li>
                      <li>
                        <strong className="me-1">What we did:</strong> SaaS
                        development, UX design
                      </li>
                    </ul>
                    {/*//meta*/}
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin sodales dolor ut ligula faucibus, nec mattis nibh
                        eleifend. Duis et enim at lacus pharetra mollis molestie
                        nec magna. Maecenas tristique laoreet tristique...
                      </p>
                    </div>
                    {/*//desc*/}
                    <p className="link mb-2">
                      <i className="fas fa-briefcase" />{" "}
                      <a
                        className="more-link text-link"
                        href="case-study-1.html"
                      >
                        Read full case study
                      </a>
                    </p>
                    <p className="link">
                      <i className="fas fa-external-link-alt" />{" "}
                      <a
                        className="site-link text-link"
                        href="https://themes.3rdwavemedia.com/"
                        target="_blank"
                      >
                        Website link
                      </a>
                    </p>
                  </div>
                  {/*//content-inner*/}
                </div>
                {/*//content*/}
              </div>
              {/*//row*/}
            </div>
            {/*//item*/}
            <div className="item item-2">
              <div className="row">
                <figure className="figure-container col-lg-6 col-12">
                  <a
                    className="img-link"
                    href="case-study-2.html"
                    target="_blank"
                  />
                </figure>
                <div className="content col-lg-6 col-12">
                  <div className="content-inner">
                    <h3 className="project-title">
                      <a className="text-link" href="case-study-1.html">
                        Case Study Two Heading
                      </a>
                    </h3>
                    <ul className="meta list-unstyled">
                      <li>
                        <strong className="me-1">Client:</strong> Amazon
                      </li>
                      <li>
                        <strong className="me-1">What we did:</strong> App
                        development
                      </li>
                    </ul>
                    {/*//meta*/}
                    <div className="desc">
                      <p>
                        Mauris in vestibulum ex. Donec vel malesuada tortor.
                        Etiam consequat semper pulvinar. Integer sit amet felis
                        nisl. Proin leo metus, volutpat vel fringilla vel,
                        faucibus et mi. Duis finibus erat erat, quis mollis...
                      </p>
                    </div>
                    {/*//desc*/}
                    <p className="link mb-2">
                      <i className="fas fa-briefcase" />{" "}
                      <a
                        className="more-link text-link"
                        href="case-study-2.html"
                      >
                        Read full case study
                      </a>
                    </p>
                    <p className="link">
                      <i className="fas fa-external-link-alt" />{" "}
                      <a
                        className="site-link text-link"
                        href="https://themes.3rdwavemedia.com/"
                        target="_blank"
                      >
                        Website link
                      </a>
                    </p>
                  </div>
                  {/*//content-inner*/}
                </div>
                {/*//content*/}
              </div>
              {/*//row*/}
            </div>
            {/*//item*/}
            <div className="item item-3">
              <div className="row">
                <figure className="figure-container col-lg-6 col-12">
                  <a
                    className="img-link"
                    href="case-study-1.html"
                    target="_blank"
                  />
                </figure>
                <div className="content col-lg-6 col-12">
                  <div className="content-inner">
                    <h3 className="project-title">
                      <a className="text-link" href="case-study-1.html">
                        Case Study Three Heading
                      </a>
                    </h3>
                    <ul className="meta list-unstyled">
                      <li>
                        <strong className="me-1">Client:</strong> Dropbox
                      </li>
                      <li>
                        <strong className="me-1">What we did:</strong> Site
                        design &amp; development
                      </li>
                    </ul>
                    {/*//meta*/}
                    <div className="desc">
                      <p>
                        Sed ornare suscipit risus, sed elementum justo porta ac.
                        Duis ultricies lobortis nibh sed facilisis. Etiam eu leo
                        sapien. Integer gravida at urna ac bibendum. Nullam eu
                        orci at felis fermentum lobortis...
                      </p>
                      <p className="link mb-2">
                        <i className="fas fa-briefcase" />{" "}
                        <a
                          className="more-link text-link"
                          href="case-study-1.html"
                        >
                          Read full case study
                        </a>
                      </p>
                      <p className="link">
                        <i className="fas fa-external-link-alt" />{" "}
                        <a
                          className="site-link text-link"
                          href="https://themes.3rdwavemedia.com/"
                          target="_blank"
                        >
                          Website link
                        </a>
                      </p>
                    </div>
                    {/*//desc*/}
                  </div>
                  {/*//conten-inner*/}
                </div>
                {/*//content*/}
              </div>
              {/*//row*/}
            </div>
            {/*//item*/}
          </div>
          {/*//owl-carousel*/}
          <a className="btn btn-cta btn-cta-secondary" href="work.html">
            View all case studies
          </a>
        </div>
        {/*container-fluid*/}
      </section>
      {/*//latest-work*/}

      {/* <section id="latest-work" className="latest-work section">
        <div className="container-fluid text-center">
          <h2 className="title text-center">Our Latest Work</h2>
          <div id="work-slider" className="items work-slider" > 
              
              {realisations.map((item,index) => (
              <Realisation key={item.id_service+index} ind={index} item={item}/>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default HomePage;
