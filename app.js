const toggleButton = document.getElementById("toggle-btn");
const registerVendorButton = document.getElementById("register");
const desktopRegisterVendorButton = document.getElementById("desktop-register");
const backdrop = document.querySelector("#backdrop");
const registerModal = document.querySelector("#add-modal");

const mobileNav = document.getElementById("mobile-nav");
// const firstToggle = toggleButton.querySelector("span");
// const secondToggle = toggleButton.children[1];
// const thirdToggle = toggleButton.children[2];
const searchBar = document.querySelector(".search_field");
const searchBtn = document.querySelector(".search-btn");

const navBar = document.querySelector("nav");
const searchIcon = document.querySelector("svg");
const search = document.querySelector(".search-bar");
const toggleBar = document.querySelector(".toggle-wrapper");
const mobileSearchBar = document.querySelector(".mobile-search_bar");
const searchField = mobileSearchBar.querySelector("input");


const contactUs = document.getElementById("contact-us");

console.log(search);







const appearSearchButton = () => {
    mobileSearchBar.classList.toggle("mobile-appear");
    search.classList.toggle("disappear");
}

const disappearSearchButton = () => {
    mobileSearchBar.classList.toggle("mobile-appear");
    search.classList.toggle("disappear");
}

const toggleNavbar = () => {
    mobileNav.classList.toggle("active");
    firstToggle.classList.toggle("top_true")
    secondToggle.classList.toggle("middle_true")
    thirdToggle.classList.toggle("bottom_true");
}

const showRegistrationModal = (e) => {
    backdrop.classList.toggle("visible");
    registerModal.classList.toggle("visible");
    mobileNav.classList.toggle("active");
    firstToggle.classList.toggle("top_true")
    secondToggle.classList.toggle("middle_true")
    thirdToggle.classList.toggle("bottom_true");
    document.body.style.overflow = "hidden";
}

const showDesktopRegistrationModal = () => {
    backdrop.classList.toggle("visible");
    registerModal.classList.toggle("visible");
    document.body.style.overflow = "hidden";
}

const closeRegistrationModal = (e) => {
    e.preventDefault();
    backdrop.classList.toggle("visible");
    registerModal.classList.toggle("visible");
    document.body.style.overflow = "auto";
}

const searchMovieHandler = (value) => {
    const searchValue = searchBar.value;
    loadVendorList(searchValue);
}

const filterMovieHandler = (value) => {
    loadVendorList(value);
    active = value;
}



// toggleButton.addEventListener("click", toggleNavbar);
registerVendorButton.addEventListener("click", showRegistrationModal);
// desktopRegisterVendorButton.addEventListener("click", showDesktopRegistrationModal);
// backdrop.addEventListener("click", closeRegistrationModal);
// cancelRegisterModal.addEventListener("click", closeRegistrationModal);
searchIcon.addEventListener("click", appearSearchButton);
navBar.addEventListener("blur", disappearSearchButton);
searchField.addEventListener("blur", disappearSearchButton);
contactUs.addEventListener("click", toggleNavbar)
