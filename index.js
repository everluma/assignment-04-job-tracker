// console.log('It is Connected');

const interviewDisplay = document.getElementById('interview-count');

const rejectedDisplay = document.getElementById('rejected-count');

const jobCards = document.querySelectorAll('.job-card');

const filterButtons = document.querySelectorAll('.btn');

const jobCountText = document.querySelector('.count p');

const emptyState = document.querySelector('.empty-state');


// let currentInterviewCount = 0;
// let currentRejectedCount = 0;


const jobs = [];

jobCards.forEach(card => {
    jobs.push({
    id:card.id,
    element:card,
    status:"All"
});

});



// DashBoard update Function 

function updateDashboard() {

    const interviewCount =jobs.filter(job => job.status === "Interview").length;
    const rejectedCount =jobs.filter(job => job.status === "Rejected").length;

    interviewDisplay.innerText = interviewCount;
    rejectedDisplay.innerText = rejectedCount;

}



// Render function

function renderJobs(filterType = "All") {
let visibleCount = 0;

jobs.forEach(job => {
    if (filterType === "All") {
        job.element.style.display = "block";
        visibleCount++;
    } else if (job.status === filterType) {
        job.element.style.display = "block";
        visibleCount++;
    } else {
        job.element.style.display = "none"; 
    }
});
jobCountText.innerText = visibleCount + "jobs";


// Empty State control 

if (visibleCount === 0) {
    emptyState.style.display = "block";
} else {
    emptyState.style.display = "none";
}
}

// Works in Button 

jobCards.forEach(card => {
    const interviewBtn = card.querySelector(".job-button button:nth-child(1)");
    const rejectedBtn = card.querySelector(".job-button button:nth-child(2)");
    const deleteBtn = card.querySelector(".job-button button:nth-child(3)");
    const statusBtn = card.querySelector(".status-btn");



    // interview Button 
    interviewBtn.addEventListener('click', function () {

        const job = jobs.find(j => j.element === card);

        job.status = "Interview";

        statusBtn.innerText = "Interview";
        statusBtn.style.backgroundColor = "#28a745";
        statusBtn.style.color = "white";

        updateDashboard();
        renderJobs(document.querySelector('.btn.active')?.innerText || "All");
});

// Rejected button
    rejectedBtn.addEventListener('click', function () {

        const job = jobs.find(j => j.element === card);

        job.status = "Rejected";

        statusBtn.innerText = "Rejected";
        statusBtn.style.backgroundColor = "#dc3545";
        statusBtn.style.color = "white";

        updateDashboard();
        renderJobs(document.querySelector('.btn.active')?.innerText || "All");
    });


    // delete
    if (deleteBtn) {
        deleteBtn.addEventListener('click', function () {

            const index = jobs.findIndex(j => j.element === card);

            if (index !== -1) {
                jobs.splice(index, 1);
            }

            card.remove();

            updateDashboard();
            renderJobs(document.querySelector('.btn.active')?.innerText || "All");
        });
    }

});



filterButtons.forEach(btn => {

    btn.addEventListener('click', function () {

        // active class toggle
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        renderJobs(btn.innerText);

    });

});


renderJobs("All");
updateDashboard();





           