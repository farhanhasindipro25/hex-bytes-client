import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container mt-5 bg-dark p-5 rounded-5">
      <h3 className="text-center text-warning fw-bolder">Log In</h3>
      <Form className="mt-5 w-75 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="bg-light border-0"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
            className="bg-light border-0"
          />
        </Form.Group>
        <Button
          variant="warning w-100"
          className="mt-3 fw-semibold"
          type="submit"
        >
          Login
        </Button>
        <p className="text-center text-white mt-4">
          <small>
            Don't have an account?
            <Link
              className="text-decoration-none text-warning ms-1"
              to="/signup"
            >
              Sign Up
            </Link>
          </small>
        </p>
      </Form>
      <div className="d-flex mt-5 align-items-center justify-content-center mb-3">
        <hr className="text-white w-50 mx-auto pb-3" />
        <p className="text-white text-center">OR LOGIN WITH</p>
        <hr className="text-white w-50 mx-auto pb-3" />
      </div>
      <div className="d-flex justify-content-center gap-3">
        <Button variant="light">
          <FcGoogle />
        </Button>
        <Button variant="light">
          <FaGithub />
        </Button>
      </div>
    </div>
  );
};

export default Login;
