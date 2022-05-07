import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useToken from "../../../../hooks/useToken";
import Loading from "../../Share/Loading/Loading";

const SocialLogin = () => {
  const [auth] = useAuth();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] =useToken(user)
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorElement;
  
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    errorElement =  <p> error: {error?.message}</p>;
  }

  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div className="mx-auto text-center">
      {errorElement}
      <button className="l-btn w-100" onClick={() => signInWithGoogle()}>Sign in Google</button>
    </div>
  );
};

export default SocialLogin;
