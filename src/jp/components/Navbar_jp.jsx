import React, { Component } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import Scrollspy from "react-scrollspy";
import "./Navbar_jp.css";

class Navbar extends Component {
  render() {
    return (
      <Scrollspy
        items={["home", "description", "pricing", "mainpoints", "userform"]}
        currentClassName="is-current"
      >
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container">
            <Link className="navbar-brand" to="/">
              CustomScripts
            </Link>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    ホーム <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#description">
                    サービス
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mainpoints">
                    保証
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="special-nav" href="#userform">
                    お問い合わせ
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    言語
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/">
                      ENG
                    </a>
                    <a class="dropdown-item" href="/jp">
                      JPN
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Scrollspy>
    );
  }
}

export default Navbar;
