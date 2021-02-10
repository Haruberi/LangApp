import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="sm"
        bg="danger"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="#home">
          Language Learning!
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link to="/home">
              <ReactBootStrap.Nav.Link href="#home">
                Home
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/japanesecourses">
              <ReactBootStrap.Nav.Link href="#japanese">
                Japanese Courses
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/chinesecourses">
              <ReactBootStrap.Nav.Link href="#chinese">
                Chinese Courses
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/koreancourses">
              <ReactBootStrap.Nav.Link href="#korean">
                Korean Courses
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Navbar;
