// Select the toggle button
const toggleButton = document.getElementById('toggle-button');

// Check the current mode and switch it
toggleButton.addEventListener('click', function () {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');

    // Change the button text depending on the mode
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});