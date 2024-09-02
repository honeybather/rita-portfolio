// Toggle menu on button click
document.getElementById('menu-button').addEventListener('click', function() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.classList.toggle('open');
    this.classList.toggle('change');
});

// Handle menu item clicks
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all items and add to the clicked item
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        // Close the menu when an item is clicked
        document.getElementById('menu-container').classList.remove('open');
        document.getElementById('menu-button').classList.remove('change');
    });
});

// Change active menu item on scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    const menuItems = document.querySelectorAll('.menu-item');

    function changeActiveMenu() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        menuItems.forEach((item) => item.classList.remove('active'));
        menuItems[index].classList.add('active');
    }

    changeActiveMenu();
    window.addEventListener('scroll', changeActiveMenu);
});