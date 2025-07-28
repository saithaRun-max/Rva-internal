import React, { useState } from "react";
import LoginIcon from "./LoginIcon";
import SignInIcon from "./SignInIcon";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <div>{isLoggedIn ? <LoginIcon /> : <SignInIcon />}</div>;
};

export default LoginPage;
