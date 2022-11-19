import React from 'react';
import '../styles/style.css';

function Navbar() {
    return (
        <nav class="navbar-color bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="./" class="flex items-center">
            <img class="h-6 mr-3 sm:h-9" src={require('../assets/applyd-logo-green.png')}/>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white logo-color">cloakd</span>
        </a>
        <div class="flex md:order-2">
        <a href="#" class="login-button-navbar inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Login</a>         
        </div>
        </div>
        </nav>
    );
}

export default Navbar;
