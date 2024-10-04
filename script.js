// script.js

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Save the preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Function to set initial theme based on user's previous choice
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Set the initial theme when the page loads
setInitialTheme();

// Add event listener to the toggle button
document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);
