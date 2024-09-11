// Function to update the current time
function updateTime() {
    const options = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const [time] = formatter.format(now).split(', ');

    document.getElementById('currentTime').textContent = `Current Philippine Time: ${time}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize the time display
updateTime();
