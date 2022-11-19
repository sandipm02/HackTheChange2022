import React from 'react';
import '../styles/style.css';

function Images2() {
    return (
        <section class="bg-white dark:bg-gray-90 bg-green">
            <div class="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
                <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white bg-green-text-blue">For Companies</h1>
                <p class="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400 bg-green-text-blue">Our Enterprise administrators are performing scheduled maintenance.</p>
                <div class="hero-image lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={require('../assets/CompanyPage.png')} />
                </div>  
            </div>
        </section>
    );
}

export default Images2;
