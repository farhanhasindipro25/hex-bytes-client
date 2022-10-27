import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../UserContext/UserContext";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(" ");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate("/courses");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div className="mt-5 bg-dark p-lg-5 p-md-5 px-sm-2 px-2 py-sm-5 py-5 mx-5 rounded-5 mb-5">
      <h3 className="text-center text-warning fw-bolder">Sign Up</h3>
      <Form className="w-75 mx-auto mt-5" onSubmit={handleSubmit}>
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
        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
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

        <Form.Text className="text-danger fw-semibold">
          <p className="text-center">{error}</p>
        </Form.Text>

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
