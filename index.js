// console.log('It is Connected');
const interviewDisplay = document.getElementById('interview-count');

const rejectedDisplay = document.getElementById('rejected-count');

const jobCards = document.querySelectorAll('.job-card');


let currentInterviewCount = 0;
let currentRejectedCount = 0;


jobCards.forEach((card) => {

    // Select the Button 

    // interview button 
    const interviewBtn = card.querySelector('.job-button button:nth-child(1)');

    // Rejected button 
    const rejectedBtn = card.querySelector('.job-button button:nth-child(2)');

    const statusBtn = card.querySelector('button:not(.job-button button)');


    interviewBtn.addEventListener('click', function() {
        if (statusBtn.innerText !== "Interview") {

            // age theke rejected button a click kora thakle eta hobe 

            if (statusBtn.innerText === "Rejected") {
                currentRejectedCount--;
                rejectedDisplay.innerText = currentRejectedCount;
            }


            currentInterviewCount++;
            interviewDisplay.innerText = currentInterviewCount;


            statusBtn.innerText = 'Interview';
            statusBtn.style.backgroundColor = "#28a745";
            statusBtn.style.color = "white";


            interviewBtn.disabled = true;
            interviewBtn.style.opacity = "0.5";
            interviewBtn.style.cursor = "not-allowed";
        }
    });


    // For Rejected Button 
    rejectedBtn.addEventListener('click', function(){
        if (statusBtn.innerText !== "Rejected") {
            if (statusBtn.innerText === "Interview") {
                currentInterviewCount--;
                interviewDisplay.innerText = currentInterviewCount;
            }

            currentRejectedCount++;
            rejectedDisplay.innerText = currentRejectedCount;


            statusBtn.innerText = "Rejected";
            statusBtn.style.backgroundColor = "#dc3545";
            statusBtn.style.color = "white";
        }
    });
});