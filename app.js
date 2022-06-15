const nav_btn = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.navbar');
const arr_down = document.querySelector('.first');
const arr_down2 = document.querySelector('.second');
const dropdown_container = document.querySelector('.dropdown-container');
const dropdown_container2 = document.querySelector('.dropdown-container-second');
const learnmore = document.querySelector('.more_btn');

// const dropdowns = document.querySelectorAll('.dropdown-container');

nav_btn.addEventListener('click', function(){
    nav_btn.classList.toggle("isactive");
    nav_menu.classList.toggle("isactive");
});
arr_down.addEventListener('click', function(){
    arr_down.classList.toggle("isactive");
    dropdown_container.classList.toggle("isactive");

});
arr_down2.addEventListener('click', function(){
    arr_down2.classList.toggle("isactive");
    dropdown_container2.classList.toggle("isactive");
});
learnmore.addEventListener('click', function(){
    learnmore.classList.toggle("click");
})
