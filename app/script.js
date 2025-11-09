// Theme toggle functionality

const themeToggle = document.getElementById('themeToggle');

const sunIcon = document.getElementById('sunIcon');

const moonIcon = document.getElementById('moonIcon');

const htmlElement = document.documentElement;



const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {

    htmlElement.classList.replace('light', 'dark');

    sunIcon.classList.add('hidden');

    moonIcon.classList.remove('hidden');

}



themeToggle.addEventListener('click', () => {

    if (htmlElement.classList.contains('light')) {

        htmlElement.classList.replace('light', 'dark');

        sunIcon.classList.add('hidden');

        moonIcon.classList.remove('hidden');

        localStorage.setItem('theme', 'dark');

    } else {

        htmlElement.classList.replace('dark', 'light');

        moonIcon.classList.add('hidden');

        sunIcon.classList.remove('hidden');

        localStorage.setItem('theme', 'light');

    }

});