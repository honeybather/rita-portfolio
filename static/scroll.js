window.addEventListener('scroll', function() {
    const scrolldown = document.querySelector('.scrolldown');
    if (window.scrollY > 100) { 
        scrolldown.style.display = 'none';
    } else {
        scrolldown.style.display = 'block';
    }
});