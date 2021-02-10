import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

function App() {
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
            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#japanese">
              Japanese Courses
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#chinese">
              Chinese Courses
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#korean">
              Korean Courses
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default App;
