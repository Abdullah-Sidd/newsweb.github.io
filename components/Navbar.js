import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
         <div className="container-fluid nav_bg">
          <div className="row">
              <div className="col-8 m-auto">

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand fw-bold" href="#">
             Citizen News
            </a>
          </Link>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/buisness">
                  <a className="nav-link active" aria-current="page">
                    Business
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/entertainment">
                  <a className="nav-link active" aria-current="page">
                    Entertainment
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/health">
                  <a className="nav-link active" aria-current="page">
                    Health
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/science">
                  <a className="nav-link active" aria-current="page">
                    Science
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/sports">
                  <a className="nav-link active" aria-current="page">
                    Sports
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/technology">
                  <a className="nav-link active" aria-current="page">
                    Technology
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      </div>
      </div>
    
    </div>

  );
};
export default Navbar;
