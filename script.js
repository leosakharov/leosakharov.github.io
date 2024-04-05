let globalExpectedProgress = 0;

// This function is called when the page loads
function initializeProgress() {
    // Initialize the expected progress bar
    updateExpectedProgress();

    // Initialize the actual progress bar to be empty
    const progressBarElement = document.getElementById('progressBar');
    progressBarElement.style.width = '0%'; // Start with an empty progress bar

    // Listen for Enter key press in the progress input field
    const progressInput = document.getElementById('progressInput');
    progressInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            evaluateProgress();
        }
    });

    progressInput.focus();

    // Set the date in the date div
    setDate();
}

function setDate() {
    const dateElement = document.getElementById('date');
    const today = new Date();
    dateElement.textContent = formatDate(today);
}


function updateExpectedProgress() {
    const startDate = new Date(new Date().setDate(new Date().getDate() - 21));
    const endDate = new Date('2024-06-29');
    const currentDate = new Date();
    const totalDays = (endDate - startDate) / (1000 * 3600 * 24);
    const daysElapsed = (currentDate - startDate) / (1000 * 3600 * 24);
    globalExpectedProgress = Math.floor((daysElapsed / totalDays) * 100); // Round down to the nearest whole number

    let expectedProgressElement = document.getElementById('expectedProgress');
    expectedProgressElement.style.width = `${globalExpectedProgress}%`;
}

function createCalendar(startDate, endDate) {
    const calendarContainer = document.getElementById('calendar');

    // Clear existing calendar
    calendarContainer.innerHTML = '';

    // Calculate the total number of days between start and end date
    const totalDays = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));

    // Create a div for each day in the calendar
    for (let i = 0; i < totalDays; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        calendarContainer.appendChild(dayDiv);
    }
}

function evaluateProgress() {
    const currentProgress = parseFloat(document.getElementById('progressInput').value);
    const progressBarElement = document.getElementById('progressBar');
    progressBarElement.style.width = `${currentProgress}%`;

    let feedback = '';
    let backgroundColor = ''; // Variable to store the RGBA background color
    if (currentProgress > globalExpectedProgress) {
        feedback = 'You\'re on fire! Keep burning bright!';
        backgroundColor = 'rgba(76, 175, 80, 0.5)'; // Semi-transparent green
        progressBarElement.style.backgroundColor = '#4CAF50';
    } else if (currentProgress < globalExpectedProgress) {
        feedback = 'Hey, no rush! Remember, slow and steady wins the race!';
        backgroundColor = 'rgba(244, 67, 54, 0.5)'; // Semi-transparent red
        progressBarElement.style.backgroundColor = '#f44336';
    } else if (currentProgress === globalExpectedProgress) {
        feedback = 'Spot on! You\'re like a wizard of progress!';
        backgroundColor = 'rgba(255, 215, 0, 0.5)'; // Semi-transparent gold
        progressBarElement.style.backgroundColor = '#FFD700';
    } else {
        feedback = 'Hmm, that\'s curious... Did we just enter a parallel universe?';
        backgroundColor = 'rgba(33, 150, 243, 0.5)'; // Semi-transparent blue
        progressBarElement.style.backgroundColor = '#2196F3';
    }

    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = feedback;
    feedbackElement.style.backgroundColor = backgroundColor; // Apply the RGBA background color
    feedbackElement.style.visibility = feedback ? 'visible' : 'hidden'; // Adjust visibility based on feedback presence
}





// Initialize the progress bars when the page loads
window.onload = initializeProgress;

// Function to format date as "YYYY-MM-DD"
function formatDate(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${monthNames[monthIndex]} ${day}, ${year}`;
}


