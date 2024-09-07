// Function to generate a unique URL for the resume
function generateUniqueURL(name: string) {
    const baseURL = window.location.origin; // Get the current domain
    const uniquePath = encodeURIComponent(name.trim()); // Use the user's name for the unique URL
    return `${baseURL}/?user=${uniquePath}`;
}

// Function to store resume data in localStorage
function saveResumeData(name: string, data: any) {
    localStorage.setItem(`resume_${name}`, JSON.stringify(data));
}

// Function to load resume data from localStorage
function loadResumeData(name: string) {
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
    } else {
        alert("No resume found for this user.");
    }
}

// Handle the form submission to generate the dynamic resume
document.getElementById('resume-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    const resumeData = {
        name, email, education, workExperience, skills
    };

    // Generate and display the resume
    generateResume(resumeData);

    // Save the resume data in localStorage
    saveResumeData(name, resumeData);

    // Generate a unique URL for sharing
    const uniqueURL = generateUniqueURL(name);
    const generatedURLInput = document.getElementById('generated-url') as HTMLInputElement;
    generatedURLInput.value = uniqueURL;
});

// Function to dynamically generate the resume
function generateResume(data: any) {
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
function makeEditable(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.contentEditable = "true";
    }
}

// Event listener for making resume sections editable
document.getElementById('resume')?.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'P') {
        makeEditable(target.id);
    }
});

// Download the resume as PDF using the browser's print function
function downloadResumeAsPDF() {
    window.print();
}

document.getElementById('download-pdf')?.addEventListener('click', downloadResumeAsPDF);
