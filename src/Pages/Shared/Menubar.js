import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../UserContext/UserContext";

const Menubar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold">
            <Link className="text-decoration-none text-white" to="/">
              Hex <span className="text-warning">Bytes</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="px-5 text-center">
                <Link
                  className="text-decoration-none fw-semibold text-white"
                  to="/"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="px-5 text-center">
                <Link
                  className="text-decoration-none fw-semibold text-white"
                  to="/courses"
                >
                  Courses
                </Link>
              </Nav.Link>
              <Nav.Link className="fw-semibold text-white px-5 text-center">
                FAQ
              </Nav.Link>
              <Nav.Link className="px-5 text-center">
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
                <Button variant="light">
                  <MdDarkMode className="text-dark border-0" />
                </Button>
                <Button variant="warning">
                  <MdWbSunny className="text-dark border-0" />
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button variant="warning">
                  <Link to="/login" className="text-decoration-none text-black">
                    Login
                  </Link>
                </Button>

                <div></div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
