// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navUl = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Dropdown toggle on mobile
const navItems = document.querySelectorAll('nav ul li');

navItems.forEach(item => {
    const dropdown = item.querySelector('.dropdown');
    if (dropdown) {
        // Create a toggle button for dropdown on mobile
        const toggleBtn = document.createElement('button');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Toggle submenu');
        toggleBtn.classList.add('dropdown-toggle');
        toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
        item.insertBefore(toggleBtn, dropdown);

        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isShown = dropdown.classList.toggle('show');
            toggleBtn.setAttribute('aria-expanded', isShown);
        });
    }
});
// Nutritional section toggle
const nutritionalSection = document.querySelector('.nutritional');
const nutritionalBtn = document.querySelector('.nutritional-show-btn');

if (nutritionalSection && nutritionalBtn) {
    nutritionalSection.style.display = 'none';
    nutritionalBtn.addEventListener('click', () => {
        const isHidden = nutritionalSection.style.display === 'none';
        nutritionalSection.style.display = isHidden ? 'block' : 'none';
    });
}