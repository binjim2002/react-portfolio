import React from "react";

import Navbar from 'react-bootstrap';

const Navbar = () => {
  return (
    <div>
        <Navbar bg="light">
            <Navbar.Brand href="/">Jimmy B. Kazadi</Navbar.Brand>
        </Navbar>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="index.html" id="logo">
            Jimmy B. Kazadi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="project.html">
                  Project
                </a>
              </li>
              <li className="nav-ite">
                <a className="nav-link" href="resume.html">
                  Résumé
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
