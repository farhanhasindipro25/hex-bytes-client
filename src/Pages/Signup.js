import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container mt-5 bg-dark p-5 rounded-5 w-75">
      <h3 className="text-center text-warning fw-bolder">Sign Up</h3>
      <Form className="w-75 mx-auto mt-5">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="text-white">Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            className="bg-light border-0"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="text-white">Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Enter your Photo URL"
            required
            className="bg-light border-0"
          />
        </Form.Group>
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
            placeholder="Enter your password"
            required
            className="bg-light border-0"
          />
        </Form.Group>
        <Button
          variant="warning w-100"
          className="mt-3 fw-semibold"
          type="submit"
        >
          Sign Up
        </Button>
        <p className="text-center text-white mt-4">
          <small>
            Already have an account?
            <Link
              className="text-decoration-none text-warning ms-1"
              to="/login"
            >
              Log In
            </Link>
          </small>
        </p>
      </Form>
    </div>
  );
};

export default Signup;
