import { Link } from "react-router-dom";

function Menu() {
  // alert(window.location.pathname.split('/')[window.location.pathname.split('/').length-1]==='')
  return (
    <header id="header" className="header fixed-top">
      <div className="container">
        <h1 className="logo">
          <a href="index.html">
            <span className="highlight">Lead</span>Em
          </a>
        </h1>
        {/*//logo*/}
        <nav className="main-nav navbar navbar-expand-md navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-collapse"
            aria-controls="navbar-collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            id="navbar-collapse"
            className="navbar-collapse collapse justify-content-end"
          >
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${window.location.pathname.split('/')[window.location.pathname.split('/').length-1]===''?'active':''} `} to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${window.location.pathname.split('/').some((el) => el === 'about')?'active':''} `} to="/about">
                  A propos
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${window.location.pathname.split('/').some((el) => el === 'service')?'active':''} `} to="/service">
                  Services
                </Link>
              </li>


              <li className="nav-item">
                <Link className={`nav-link ${window.location.pathname.split('/').some((el) => el === 'contact')?'active':''} `} to="/contact">
                  Contact
                </Link>
              </li>

             

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="work.html"
                >
                  Work <i className="fas fa-angle-down" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="work.html">
                      Our Work
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="case-study-1.html">
                      Single Case Study 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="case-study-2.html">
                      Single Case Study 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-post.html">
                      Single Blog Post
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="404.html">
                      404 Page
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li className="nav-item last">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
