import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import myLogo from "../Assets/marvellogo.png";
import "./ViewStyle/navbar.css";
import Footer from "./Footer";
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mb-3 bg-dark">
        <div className="container-fluid">
          <img
            src={myLogo}
            alt="MarvelLogo"
            style={{ width: "10%", marginRight: "4px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/About"
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/Characters"
                >
                  Characters
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/Info"
                >
                  Info
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet> </Outlet>
      <Footer />
    </div>
  );
}

export default NavBar;
