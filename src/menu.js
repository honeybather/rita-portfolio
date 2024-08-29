document.getElementById('menu-button').addEventListener('click', function() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.classList.toggle('open');
    this.classList.toggle('change');
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});