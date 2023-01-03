import { Link } from "react-router-dom";

function LeftSide() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to={"/administrator/diapos/list"}>
            <i className="ti-shield menu-icon" />
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <i className="ti-menu menu-icon" />
            <span className="menu-title">Sites</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to={"/administrator/abouts/list"}>
                  A propos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/administrator/services/list"}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/administrator/contacts/list"}>
                  Contacts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/administrator/addresses/list"}>
                  Addresses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/administrator/clients/list"}>
                  Clients
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/administrator/temoins/list"}>
                  Temoins
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/administrator/socials/list"}>
                  Socials
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/administrator/partners/list"}>
                  Partners
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/administrator/roles/list"}>
                  Roles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/administrator/positions/list"}>
                  Positions
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/administrator/realisations/list"}
                >
                  Realisations
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/administrator/temoignages/list"}
                >
                  Temoignages
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default LeftSide;
