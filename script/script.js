const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!menuList.contains(e.target) && !menuToggle.contains(e.target)) {
        menuList.classList.remove('active');
    }
});

// Get all the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Get all the sections
const sections = document.querySelectorAll('section');

// Function to check which section is currently in view
function checkActiveSection() {
    const scrollPosition = window.scrollY;

    // Loop through each section and check if it's in the viewport
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // Adjust offset as needed
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove 'active' class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the corresponding navigation link
            navLinks.forEach(link => {
                if (link.getAttribute('href').substring(1) === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Add event listener for scrolling
window.addEventListener('scroll', checkActiveSection);

// Initial check when the page loads
checkActiveSection();
