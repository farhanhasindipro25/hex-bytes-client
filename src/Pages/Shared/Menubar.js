import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Menubar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold text-white">
            {" "}
            Hex <span className="text-warning">Bytes</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="fw-semibold text-white px-5">
                Courses
              </Nav.Link>
              <Nav.Link className="fw-semibold text-white px-5">FAQ</Nav.Link>
              <Nav.Link className="fw-semibold text-white px-5">Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="fw-semibold text-white">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
