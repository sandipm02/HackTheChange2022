
import React from 'react';
import '../styles/style.css';
import LoginPage from "./LoginPage";
import LogOut from './LogOut'
// import { useAuth0 } from "@auth0/auth0-react";
import Content from './Content'

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
  // const { user, isAuthenticated, isLoading } = useAuth0();
  // const [authenticated] = React.useState(false);

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
              Applyd
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <LoginPage />
              <LogOut />
              <Content />
              <form class="space-y-4 md:space-y-6" action="#">
                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
}


export default HomePage;

