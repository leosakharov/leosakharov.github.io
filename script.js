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
    globalExpectedProgress = Math.floor((daysElapsed / totalDays) * 100);

    let expectedProgressElement = document.getElementById('expectedProgress');
    let progressPointer = document.getElementById('progressPointer');
    let dateElement = document.getElementById('date');

    expectedProgressElement.style.width = `${globalExpectedProgress}%`;

    // Set the pointer and date's position based on the width of the expected progress
    const progressBarContainer = document.getElementById('progressBarContainer');
    const pointerPosition = (progressBarContainer.offsetWidth * globalExpectedProgress) / 100;
    progressPointer.style.left = `${pointerPosition}px`;
    dateElement.style.left = `${pointerPosition}px`;

    // Update the date text
    dateElement.textContent = formatDate(endDate);
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
    const feedbackElement = document.getElementById('feedback');

    // Check if the current progress is a valid number within the range
    if (isNaN(currentProgress) || currentProgress < 0 || currentProgress > 100) {
        feedback = 'Not a valid value. Please enter a number between 0 and 100.';
        progressBarElement.style.width = '0%'; // Reset progress bar
        feedbackElement.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Semi-transparent red for error
    } else {
        progressBarElement.style.width = `${currentProgress}%`;

        if (currentProgress > globalExpectedProgress) {
            feedback = 'Very good Mr. Sakharov. You are ahead of your plan. Take a chill, eat some food, go party with Tanzmaus Henkelmann';
            feedbackElement.style.backgroundColor = 'rgba(76, 175, 80, 0.5)'; // Semi-transparent green
            progressBarElement.style.backgroundColor = '#4CAF50';
        } else if (currentProgress < globalExpectedProgress) {
            feedback = 'Hey, no rush! Remember, slow and steady wins the race! You are doing fine Mr Sakharov. Savlanut as we say';
            feedbackElement.style.backgroundColor = 'rgba(244, 67, 54, 0.5)'; // Semi-transparent red
            progressBarElement.style.backgroundColor = '#f44336';
        } else if (currentProgress === globalExpectedProgress) {
            feedback = 'Spot on! Perfect.. Planned down to every small detail. Simply beautiful';
            feedbackElement.style.backgroundColor = 'rgba(255, 215, 0, 0.5)'; // Semi-transparent gold
            progressBarElement.style.backgroundColor = '#FFD700';
        } else {
            feedback = 'Hmm, that\'s curious... Did we just enter a parallel universe?';
            feedbackElement.style.backgroundColor = 'rgba(33, 150, 243, 0.5)'; // Semi-transparent blue
            progressBarElement.style.backgroundColor = '#2196F3';
        }
    }

    feedbackElement.textContent = feedback;
    feedbackElement.style.visibility = 'visible'; // Always show feedback
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


