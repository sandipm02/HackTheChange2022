import React from 'react';
import '../styles/style.css';

import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return <button class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-l dark:text-white"
  onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginPage;
