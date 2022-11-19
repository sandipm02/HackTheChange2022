import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button  class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-l dark:text-white" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>


  );
};

export default LogoutButton;