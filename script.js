window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 200) { // Show the button after 200px of scrolling
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}