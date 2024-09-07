"use strict";
var _a, _b, _c;
// Function to generate a unique URL for the resume
function generateUniqueURL(name) {
    const baseURL = window.location.origin; // Get the current domain
    const uniquePath = encodeURIComponent(name.trim()); // Use the user's name for the unique URL
    return `${baseURL}/?user=${uniquePath}`;
}
// Function to store resume data in localStorage
function saveResumeData(name, data) {
    localStorage.setItem(`resume_${name}`, JSON.stringify(data));
}
// Function to load resume data from localStorage
function loadResumeData(name) {
    const savedData = localStorage.getItem(`resume_${name}`);
    return savedData ? JSON.parse(savedData) : null;
}
// Check if the URL contains a user parameter and load the corresponding resume
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('user');
if (username) {
    const storedResume = loadResumeData(username);
    if (storedResume) {
        generateResume(storedResume);
    }
    else {
        alert("No resume found for this user.");
    }
}
// Handle the form submission to generate the dynamic resume
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('work-experience').value;
    const skills = document.getElementById('skills').value;
    const resumeData = {
        name, email, education, workExperience, skills
    };
    // Generate and display the resume
    generateResume(resumeData);
    // Save the resume data in localStorage
    saveResumeData(name, resumeData);
    // Generate a unique URL for sharing
    const uniqueURL = generateUniqueURL(name);
    const generatedURLInput = document.getElementById('generated-url');
    generatedURLInput.value = uniqueURL;
});
// Function to dynamically generate the resume
function generateResume(data) {
    const resumeDiv = document.getElementById('resume');
    if (resumeDiv) {
        resumeDiv.innerHTML = `
            <h2>Resume</h2>
            <p id="name-field"><strong>Name:</strong> ${data.name}</p>
            <p id="email-field"><strong>Email:</strong> ${data.email}</p>
            <p id="education-field"><strong>Education:</strong> ${data.education}</p>
            <p id="work-field"><strong>Work Experience:</strong> ${data.workExperience}</p>
            <p id="skills-field"><strong>Skills:</strong> ${data.skills}</p>
        `;
    }
}
// Allow sections of the resume to be editable
function makeEditable(id) {
    const element = document.getElementById(id);
    if (element) {
        element.contentEditable = "true";
    }
}
// Event listener for making resume sections editable
(_b = document.getElementById('resume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'P') {
        makeEditable(target.id);
    }
});
// Download the resume as PDF using the browser's print function
function downloadResumeAsPDF() {
    window.print();
}
(_c = document.getElementById('download-pdf')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', downloadResumeAsPDF);
