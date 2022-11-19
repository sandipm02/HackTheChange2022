import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Content = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log('isAuthenticated', isAuthenticated)

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return <div>isAuthenticated ...</div>;
  }

  return (
    
      <div>
        {/* <h1>{isAuthenticated}</h1> */}
      </div>
    
  );
};

export default Content;