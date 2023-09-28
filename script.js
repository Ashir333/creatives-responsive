//Side Menu Animation

// var menuBtn = document.getElementById("menuBtn")
        // var sideNav = document.getElementById("sideNav")
        // var menu = document.getElementById("menu")

        // menuBtn.onclick = function () {
        //     if (sideNav.style.right == "-250px") {
        //         sideNav.style.right == "0";
        //     }
        //     else {
        //         sideNav.style.right == "-250px";
        //     }
        // }
// ----------------

const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
const menu = document.getElementById('menu');

let isMenuVisible = false;

menuBtn.addEventListener('click', () => {
    if (isMenuVisible) {
        sideNav.style.right = '-250px';
    } else {
        sideNav.style.right = '0';
    }
    isMenuVisible = !isMenuVisible;
});

