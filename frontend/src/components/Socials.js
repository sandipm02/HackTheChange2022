import React from 'react';
import '../styles/style.css';

function socials() {
    return (
        <section class="socials-bg bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                <div class="flex flex-col items-center justify-center">
                    <dt class="socials-text mb-2 text-3xl md:text-4xl font-extrabold">49 Days+</dt>
                    <dd class="socials-text2 font-light text-gray-500 dark:text-gray-400">Hire an Engineer</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="socials-text mb-2 text-3xl md:text-4xl font-extrabold">$19,000+</dt>
                    <dd class="socials-text2 font-light text-gray-500 dark:text-gray-400">Avg. Cost to Recruit</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="socials-text mb-2 text-3xl md:text-4xl font-extrabold">97%</dt>
                    <dd class="socials-text2 font-light text-gray-500 dark:text-gray-400">Recruiters rely on Intuition</dd>
                </div>
            </dl>
        </div>
        </section>
    );
}

export default socials;
