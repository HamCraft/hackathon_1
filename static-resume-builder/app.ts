document.addEventListener('DOMContentLoaded', () => {
  // Section Toggle Button
  const toggleButton = document.getElementById('toggle') as HTMLButtonElement | null;
  const educationSection = document.getElementById('education') as HTMLElement | null;
  const skillsSection = document.getElementById('skills') as HTMLElement | null;
  const workExperienceSection = document.getElementById('work-experience') as HTMLElement | null;

  // Ensure all elements are present
  if (toggleButton && educationSection && skillsSection && workExperienceSection) {
    toggleButton.addEventListener('click', () => {
      educationSection.classList.toggle('hidden');
      skillsSection.classList.toggle('hidden');
      workExperienceSection.classList.toggle('hidden');
    });
  }

  // Navbar Menu Toggle Button
  const menuToggle = document.getElementById("menu-toggle") as HTMLButtonElement | null;
  const navLinks = document.querySelector(".nav-links") as HTMLElement | null;

  // Check if elements exist and add event listener
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
