import React from 'react';
import '../styles/style.css';

function landingPage() {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="spacing-top grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="hero-header max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Bias Hurts Business</h1>
                        <hr></hr> <br></br>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">By removing the chances for <strong>hidden biases</strong> and allowing companies to approach quality talent, we can contribute toward building an <strong>equal and efficient</strong> hiring landscape.</p>
                        <a href="#" class="learn-more-hero inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Learn More
                        </a> 
                        <a href="#" class="login-button-hero inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Login
                        </a> 
                    </div>
                    <div class="hero-image lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={require('../assets/phone-mockup.png')} />
                    </div>                
                </div>
            </section>
        </div>
    );
}

export default landingPage;
