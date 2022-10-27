import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

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
              <Nav.Link className="px-5">
                <Link
                  className="text-decoration-none fw-semibold text-white"
                  to="/"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="px-5">
                <Link
                  className="text-decoration-none fw-semibold text-white"
                  to="/courses"
                >
                  Courses
                </Link>
              </Nav.Link>
              <Nav.Link className="fw-semibold text-white px-5">FAQ</Nav.Link>
              <Nav.Link className="px-5">
                <Link
                  className="text-decoration-none fw-semibold text-white"
                  to="/blog"
                >
                  Blog
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="fw-semibold text-white d-flex gap-2">
                <Button variant="light">Light</Button>
                <Button variant="warning">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
