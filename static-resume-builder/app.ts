document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle') as HTMLButtonElement;
    const EducationSection = document.getElementById('education') as HTMLElement;
    const skillsSection = document.getElementById('skills') as HTMLElement;
    const Work_Experience_Section = document.getElementById('work-experience') as HTMLElement;
    
  
    if (toggleButton && EducationSection && skillsSection && Work_Experience_Section) {
      toggleButton.addEventListener('click', () => {
        EducationSection.classList.toggle('hidden');
        skillsSection.classList.toggle('hidden');
        Work_Experience_Section.classList.toggle('hidden');
      });
    }
  });
  