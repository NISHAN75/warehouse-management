
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import Loading from "../../Share/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { FaLongArrowAltRight } from "react-icons/fa";
import useToken from "../../../../hooks/useToken";

const Register = () => {
  const [auth]=useAuth();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    registerError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, VerifyError] = useSendEmailVerification(auth);
  const [token]=useToken(user);
  const navigate=useNavigate();
  let errorElement ='';
  
  if(registerError || VerifyError){
    errorElement= <p>Error:{registerError?.message} {VerifyError?.message}</p>
  }
  if(loading || sending){
    return <Loading></Loading>
  }
  if(token){
    navigate('/home')

  }

  const handleRegister = async event =>{
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
      <h2 className="text-center mb-5 text-warning">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" name="name" placeholder="Enter name"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" name="password" placeholder="Password" />
        </Form.Group>
        {
          errorElement
        }
        <div className="text-center">
        <button className="l-btn w-50 mb-3"  type="submit">Submit</button>
        </div>
      </Form>

      <p className="login-link">
        You Have Already Account?
        <FaLongArrowAltRight/>
        <Link to="/login">
            <button className="r-btn pe-auto text-decoration-none">Please Login</button>
        </Link>
      </p>
      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
