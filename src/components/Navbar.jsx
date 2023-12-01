import React, { useContext } from "react";
import "bootstrap";
import { Link } from "react-router-dom";
import Usercontext from "../context/Usercontext";

const Navbar = () => {
  const { cartitem } = useContext(Usercontext);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          {" "}
          <i>Amazon</i>{" "}
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {/* <li className="nav-item"><Link className="nav-link active" aria-current="page" to={"/"}>Home</Link></li> */}

            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                All products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/popular"}>
                Popular Items
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link className="btn btn-outline-dark" to={"/cart"}>
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cartitem.length}
              </span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
