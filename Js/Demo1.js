window.addEventListener('DOMContentLoaded', function () {
    var pathName = window.location.pathname;
    var homeLink = document.getElementById('homeLink');
    var productLink = document.getElementById('productLink');
    var aboutLink = document.getElementById('aboutLink');
    var contactLink = document.getElementById('contactLink');

    if (pathName === '/Demo1.html') {
        homeLink.classList.add('active');
    } else if (pathName === '/TrangCon/Product.html') {
        productLink.classList.add('active');
    } else if (pathName === '/gioi-thieu') {
        aboutLink.classList.add('active');
    } else if (pathName === '/lien-he') {
        contactLink.classList.add('active');
    }
});