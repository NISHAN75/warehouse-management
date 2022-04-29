import React, { useState } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import Loading from "../../Share/Loading/Loading";

const Register = () => {
  const [auth]=useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    registerError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, VerifyError] = useSendEmailVerification(auth);
  const navigate=useNavigate();
  
  if(registerError || VerifyError){
    return <p>Error:{registerError?.message} {VerifyError?.message}</p>
  }
  if(loading || sending){
    return <Loading></Loading>
  }
  if(user){
    navigate('/home')

  }

  const hangleRegister = async event =>{
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
     await createUserWithEmailAndPassword(email,password);
     await sendEmailVerification();
     alert('Send Email Please Verify Your email')
  }



  return (
    <div className="register-area w-50 mx-auto mt-5 mb-5">
      <Form onSubmit={hangleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <div className="text-center">
        <Button className="btn w-50 mb-3" variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>

      <p className="text-warning">
        You Have Already Account?
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none mr-2"
        >
            Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
