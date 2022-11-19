import React from 'react';
import '../styles/style.css';

function Content() {
    return (
    <section class="bg-green-custom bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <hr class="green-line"></hr>
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white bg-green-text-green">We didn't reinvent the wheel</h2>
                <p class="mb-4 bg-green-text-white">Applyd helps recent and upcoming undergraduate students seamlessly and anonymously find a full-time position based solely on their skills and experiences.</p>
                <p class="bg-green-text-white">We help businesses that are committed to inclusion by providing direct access to a large pool of anonymous, skilled, and diverse candidates who are looking to work.</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full rounded-lg" src={require('../assets/iphone-chat.png')}/>
                <img class="mt-4 w-full lg:mt-10 rounded-lg" src={require('../assets/iphone-other.png')} />
            </div>
        </div>
    </section>
    );
}

export default Content;
