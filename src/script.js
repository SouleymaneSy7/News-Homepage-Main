
const showMenu = (hamburgerMenu, navItems) => {
    const hamburger = document.querySelector(hamburgerMenu);
    const nav = document.querySelector(navItems);

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active')
        })
    }
};

showMenu('#hamburger-menu', '#mobile-menu');