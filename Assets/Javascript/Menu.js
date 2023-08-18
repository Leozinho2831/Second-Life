function mobileMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('view__menu')){
        menuMobile.classList.remove('view__menu');
    } else {
        menuMobile.classList.add('view__menu');
    }
}