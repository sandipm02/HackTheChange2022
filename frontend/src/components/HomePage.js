
import React from 'react';
import '../styles/style.css';
import LoginPage from "./LoginPage";
import LogOut from './LogOut'
import { useAuth0 } from "@auth0/auth0-react";

function HomePage() {
    // constructor(props) {
    //   this.state = {
    //     renderSplashscreen: true
    //   };
    // }
  
    // apiCallback(data) {
    //   // After getting the API response from server
    //   this.setState({renderSplashscreen: false});
    // }
  
    // render() {
    //   let view;
  
    //   if(this.state.renderSplashscreen)
    //     return <SplashScreen/>;
    //   else
    //     return <OtherComponent/>
    // }
    const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
    return (
      <div>
      <LoginPage />
      <LogOut />
      {(isAuthenticated && 
      <h1>LoggedIn</h1>
    )}
      </div>
    );
}


export default HomePage;

