import React from "react";
import { Link, withRouter } from "react-router-dom";
import BrandLogo from "../images/Brand.png";
import Bag from "../images/Bag.png";
import Search from "../images/Search.png";

import "../index.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#198754" };
  } else {
    return { color: "#FFFFFF" };
  }
};
const Menu = ({ history }) => {
  return (
    <Navbar className="container fixed-top" collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Navbar.Brand href="#home"><img className="brand" src={BrandLogo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="w-100" id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <div className="nav-link center"><img className="icon-small" src={Search}/>Search</div>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/help">Help</Link>
          <Link className="nav-link" to="/account">Account</Link>
          <div className="nav-link"><img className="icon-small" src={Bag}/></div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <nav className="navbar navbar-dark fixed-top navbar-expand-lg scrolling-navbar">
    //   <div className="container" style={{display:"flex"}}>
    //     <span className="navbar-brand mb-0">
    //       <img src={BrandLogo} style={{ maxHeight: "100%", maxWidth: "50%" }} />
    //     </span>

    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="nav">
    //         <li className="nav-item">
    //           <Link
    //             style={currentTab(history, "/")}
    //             className="nav-link"
    //             to="/"
    //           >
    //             Search
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             style={currentTab(history, "/")}
    //             className="nav-link"
    //             to="/"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             style={currentTab(history, "/help")}
    //             className="nav-link"
    //             to="/help"
    //           >
    //             Help
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             style={currentTab(history, "/account")}
    //             className="nav-link"
    //             to="/account"
    //           >
    //             Account
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default withRouter(Menu);
