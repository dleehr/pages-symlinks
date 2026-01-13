// Display current timestamp
document.addEventListener('DOMContentLoaded', function() {
    const timestampElement = document.getElementById('timestamp');
    const now = new Date();
    timestampElement.textContent = now.toLocaleString();

    // Button click counter
    let clickCount = 0;
    const button = document.getElementById('demoButton');
    const clickCountElement = document.getElementById('clickCount');

    button.addEventListener('click', function() {
        clickCount++;
        clickCountElement.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;

        // Add a fun animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 100);
    });
});
