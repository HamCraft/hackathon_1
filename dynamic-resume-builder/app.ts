// Function to generate a unique URL for the resume based on the user's name
function generateUniqueURL(name: string) {
    // Get the current domain of the webpage
    const baseURL = window.location.origin; 
    // Use the user's name for the unique URL, encoding it to make it URL-safe
    const uniquePath = encodeURIComponent(name.trim()); 
    // Return the full unique URL
    return `${baseURL}/?user=${uniquePath}`;
}

// Function to store resume data in localStorage
function saveResumeData(name: string, data: any) {
    // Save the resume data as a JSON string in localStorage using the name as the key
    localStorage.setItem(`resume_${name}`, JSON.stringify(data));
}

// Function to load resume data from localStorage
function loadResumeData(name: string) {
    // Retrieve the stored data from localStorage using the name as the key
    const savedData = localStorage.getItem(`resume_${name}`);
    // If data exists, parse and return it; otherwise, return null
    return savedData ? JSON.parse(savedData) : null;
}

// Check if the URL contains a user parameter and load the corresponding resume
const urlParams = new URLSearchParams(window.location.search); // Get URL parameters
const username = urlParams.get('user'); // Retrieve the 'user' parameter from the URL
if (username) { // If a username is present
    const storedResume = loadResumeData(username); // Load resume data for the username
    if (storedResume) { // If resume data is found
        generateResume(storedResume); // Generate and display the resume
    } else { // If no resume data is found
        alert("No resume found for this user."); // Alert the user
    }
}

// Handle the form submission to generate the dynamic resume
document.getElementById('resume-form')?.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get values from the form fields
    const name = (document.getElementById('name') as HTMLInputElement).value; // User's name
    const email = (document.getElementById('email') as HTMLInputElement).value; // User's email
    const education = (document.getElementById('education') as HTMLInputElement).value; // User's education
    const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value; // User's work experience
    const skills = (document.getElementById('skills') as HTMLInputElement).value; // User's skills

    // Create an object to hold the resume data
    const resumeData = {
        name, 
        email, 
        education, 
        workExperience, 
        skills
    };

    // Generate and display the resume with the collected data
    generateResume(resumeData);

    // Save the resume data in localStorage for future access
    saveResumeData(name, resumeData);

    // Generate a unique URL for sharing the resume
    const uniqueURL = generateUniqueURL(name); 
    const generatedURLInput = document.getElementById('generated-url') as HTMLInputElement; // Input field for displaying the URL
    generatedURLInput.value = uniqueURL; // Set the generated URL as the value of the input field
});

// Function to dynamically generate the resume based on provided data
function generateResume(data: any) {
    const resumeDiv = document.getElementById('resume'); // Get the resume display area
    if (resumeDiv) { // Check if the element exists
        // Create and set the inner HTML of the resume display area
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
    const element = document.getElementById(id); // Get the element by its ID
    if (element) { // Check if the element exists
        element.contentEditable = "true"; // Make the element editable
    }
}

// Event listener for making resume sections editable on click
document.getElementById('resume')?.addEventListener('click', (e) => {
    const target = e.target as HTMLElement; // Get the clicked element
    if (target.tagName === 'P') { // Check if the clicked element is a paragraph
        makeEditable(target.id); // Make the clicked paragraph editable
    }
});

// Function to download the resume as a PDF using the browser's print function
function downloadResumeAsPDF() {
    window.print(); // Trigger the print dialog to print the resume
}

// Event listener for the download button to trigger PDF download
document.getElementById('download-pdf')?.addEventListener('click', downloadResumeAsPDF);
