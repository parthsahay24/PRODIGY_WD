// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     var navbar = document.getElementById("navbar");
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         navbar.classList.add("navbar-scrolled");
//     } else {
//         navbar.classList.remove("navbar-scrolled");
//     }
// }


function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
}


window.addEventListener("scroll", toggleNavbar);
