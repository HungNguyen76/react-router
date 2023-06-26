import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar">
          <div className="p-4 pt-5">
            {/* <a
              href="#"
              className="img logo rounded-circle mb-5"
              style={{ backgroundImage: "url(images/logo.jpg)" }}
            /> */}
            <ul className="list-unstyled components mb-5">
              <li className="active">
                <Link to="" className="dropdown-toggle">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {/* <li>
                <a href="./portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="./contact.html">Contact</a>
              </li> */}
            </ul>
          </div>
        </nav>
        {/* Page Content  */}
        <div id="content" className="p-4 p-md-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn
                      btn-primary"
              >
                <i className="fa fa-bars" />
                <span className="sr-only">Toggle Menu</span>
              </button>
              <button
                className="btn btn-dark d-inline-block d-lg-none
                      ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle
                      navigation"
              >
                <i className="fa fa-bars" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="./portfolio.html">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./contact.html">
                      Contact
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
          <h2 className="mb-4">Page Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
