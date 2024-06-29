function updateDateTime() {
    const now = moment();
    const formattedDateTime = now.format('MMMM Do YYYY, h:mm:ss a');
    document.getElementById('currentDateTime').textContent = formattedDateTime;
}

function toggleDarkMode() {
    const body = document.body;
    const isDark = body.classList.contains('dark');
    
    const newClassName = classNames({
        light: isDark,
        dark: !isDark
    });

    body.className = newClassName;
}

document.getElementById('toggleButton').addEventListener('click', toggleDarkMode);

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the current date and time immediately
updateDateTime();
