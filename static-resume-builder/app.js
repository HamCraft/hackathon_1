"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle');
    const EducationSection = document.getElementById('education');
    const skillsSection = document.getElementById('skills');
    const Work_Experience_Section = document.getElementById('work-experience');
    if (toggleButton && EducationSection && skillsSection && Work_Experience_Section) {
        toggleButton.addEventListener('click', () => {
            EducationSection.classList.toggle('hidden');
            skillsSection.classList.toggle('hidden');
            Work_Experience_Section.classList.toggle('hidden');
        });
    }
});
