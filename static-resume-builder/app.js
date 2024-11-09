"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // Section Toggle Button
    const toggleButton = document.getElementById('toggle');
    const educationSection = document.getElementById('education');
    const skillsSection = document.getElementById('skills');
    const workExperienceSection = document.getElementById('work-experience');
    // Ensure all elements are present
    if (toggleButton && educationSection && skillsSection && workExperienceSection) {
        toggleButton.addEventListener('click', () => {
            educationSection.classList.toggle('hidden');
            skillsSection.classList.toggle('hidden');
            workExperienceSection.classList.toggle('hidden');
        });
    }
    // Navbar Menu Toggle Button
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    // Check if elements exist and add event listener
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});
