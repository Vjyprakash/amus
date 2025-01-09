document.addEventListener('DOMContentLoaded', () => {
    const jobList = document.getElementById('job-list');

    const jobs = [
        { title: "Frontend Developer", location: "Remote", description: "Looking for a skilled frontend developer." },
        { title: "Backend Developer", location: "On-site", description: "Join our backend team." },
        { title: "UI/UX Designer", location: "Remote", description: "Design engaging user experiences." }
    ];

    jobs.forEach(job => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${job.title}</strong> - ${job.location}<p>${job.description}</p>`;
        jobList.appendChild(li);
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message.');
    });
});