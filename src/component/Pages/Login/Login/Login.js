import React, { useRef, useState } from "react";
import { Link , useNavigate } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../Share/Loading/Loading";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [auth] =useAuth();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    singInError,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

  const navigate=useNavigate();

  let errorElement ='';
  
  if(singInError ){
    errorElement = <p className="text-danger">Error: {singInError?.message}</p>;

  }
  if(loading || sending ){
    return <Loading></Loading>
  }

  if(user){
      navigate('/home')
     
  }


  const handleLogin= async event =>{
    event.preventDefault();
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
    console.log(email,password)
     await signInWithEmailAndPassword(email,password)
     
  }
  const handleReset = async () =>{
    console.log('hi')
    const email = emailRef.current.value;
    console.log('end',email)
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  }


  return (
    <div className="login-area w-50 mx-auto mt-5 mb-5">
      <h2 className="text-center mb-5 text-warning" >Please Login</h2>
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
          <Form.Control type="password" ref={passwordRef} placeholder="Password" />
        </Form.Group>
         {errorElement}
        <div className="text-center">
          <Button className="btn w-50 mb-3" variant="primary" type="submit">
          Login
        </Button>
        </div>
      </Form>
      <p className="text-warning">
        Create a New Account
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none mr-2"
        >
            Please Register
        </Link>
      </p>
      <p>Forget Your password ? <button onClick={handleReset} className="btn">Reset Your Password</button></p>   

      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
    
  );
};

export default Login;
