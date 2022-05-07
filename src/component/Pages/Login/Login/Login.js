import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Loading from "../../Share/Loading/Loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Login.css";
import axios from "axios";
import useToken from "../../../../hooks/useToken";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [auth] = useAuth();
  const [signInWithEmailAndPassword, user, loading, singInError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const [token]=useToken(user)


  const navigate = useNavigate();
  const location = useLocation();
  let form = location.state?.from?.pathname || "/";

  let errorElement = "";

  if (singInError || resetError) {
    errorElement = <p className="text-danger">Error: {singInError?.message} {resetError?.message}</p>;
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate(form, {replace: true});
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };
  const handleReset = async () => {
    console.log("hi");
    const email = emailRef.current.value;
    console.log("end", email);
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="login-area w-50 mx-auto mt-5 mb-5">
      <h2 className="text-center mb-5 text-warning">Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={passwordRef}
            placeholder="Password"
          />
        </Form.Group>
        {errorElement}
        <div className="text-center">
          <button className="l-btn w-50 mb-3" type="submit">
            Login
          </button>
        </div>
      </Form>
      <p className="register-link">
        Create a New Account ?
        <FaLongArrowAltRight />
        <Link to="/register">
          <button className=" r-btn pe-auto text-decoration-none">
            Please Register
          </button>
        </Link>
      </p>
      <p className="forget-link">
        Forget Your password ? <FaLongArrowAltRight />{" "}
        <button onClick={handleReset} className="r-btn">
          Reset Your Password
        </button>
      </p>

      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
