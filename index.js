// console.log('It is Connected');
const interviewDisplay = document.getElementById('interview-count');

const rejectedDisplay = document.getElementById('rejected-count');

const jobCards = document.querySelectorAll('.job-card');


let currentInterviewCount = 0;
let currentRejectedCount = 0;


jobCards.forEach((card) => {
    const interviewBtn = card.querySelector('.job-button button:nth-child(1)');

    const statusBtn = card.querySelector('button:not(.job-button button)');


    interviewBtn.addEventListener('click', function() {
        if (statusBtn.innerText !== "Interview") {
            currentInterviewCount++;
            interviewDisplay.innerText = currentInterviewCount;


            statusBtn.innerText = 'Interview';
            statusBtn.style.backgroundColor = "#28a745";
            statusBtn.style.color = "white";


            interviewBtn.disabled = true;
            interviewBtn.style.opacity = "0.5";
            interviewBtn.style.cursor = "not-allowed";
        }
    })
})