import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../UserContext/UserContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const { providerLogIn, userLogIn } = useContext(AuthContext);

  const [error, setError] = useState(" ");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  console.log(from);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user?.email) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    providerLogIn(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="mt-5 bg-dark p-lg-5 p-md-5 px-sm-2 px-2 py-sm-5 py-5 mx-5 rounded-5 mb-5">
      <h3 className="text-center text-warning fw-bolder">Log In</h3>
      <Form className="mt-5 w-75 mx-auto" onSubmit={handleSubmit}>
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

        <Form.Text className="text-danger fw-semibold">
          <p className="text-center">{error}</p>
        </Form.Text>

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
        <Button variant="light" onClick={handleGoogleSignIn}>
          <FcGoogle />
        </Button>
        <Button variant="light" onClick={handleGithubSignIn}>
          <FaGithub />
        </Button>
      </div>
    </div>
  );
};

export default Login;
