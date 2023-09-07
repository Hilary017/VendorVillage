const searchBar = document.querySelector(".search_field");
const navBar = document.querySelector("nav");
const searchIcon = document.querySelector("svg");
const search = document.querySelector(".search-bar");
const toggleBar = document.querySelector(".toggle-wrapper");
const mobileSearchBar = document.querySelector(".mobile-search_bar");
const searchField = mobileSearchBar.querySelector("input");
const contactUs = document.getElementById("contact-us");



const appearSearchButton = () => {
    mobileSearchBar.classList.toggle("mobile-appear");
    search.classList.toggle("disappear");
}

const disappearSearchButton = () => {
    mobileSearchBar.classList.toggle("mobile-appear");
    search.classList.toggle("disappear");
}



searchIcon.addEventListener("click", appearSearchButton);
navBar.addEventListener("blur", disappearSearchButton);
searchField.addEventListener("blur", disappearSearchButton);
