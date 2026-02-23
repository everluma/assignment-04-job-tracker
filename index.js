// console.log('It is Connected');

const interviewDisplay = document.getElementById('interview-count');

const rejectedDisplay = document.getElementById('rejected-count');

const jobCards = document.querySelectorAll('.job-card');

const filterButton = document.querySelectorAll('.btn');

const jobCountText = document.querySelector('.count p');

const emptyState = document.querySelector('.empty-state');


// let currentInterviewCount = 0;
// let currentRejectedCount = 0;


const jobs = [];

jobCards.forEach(card => {
    jobs.push({
    id:card.dataset.id,
    element:card,
    status:"All"
});

});



// DashBoard update Function 

function updateDashboard() {

    const interviewCount =jobs.filter(job => job.status === "Interview").length;
    const rejecteCount =jobs.filter(job => job.status === "Rejected").length;

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
    }
})
}





           