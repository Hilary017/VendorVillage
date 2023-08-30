const toggleButton = document.getElementById("toggle-btn");
const registerVendorButton = document.getElementById("register");
const desktopRegisterVendorButton = document.getElementById("desktop-register");
const backdrop = document.querySelector("#backdrop");
const registerModal = document.querySelector("#add-modal");
const cancelRegisterModal = document.querySelector("#cancel-btn");
const mobileNav = document.getElementById("mobile-nav");
const firstToggle = toggleButton.querySelector("span");
const secondToggle = toggleButton.children[1];
const thirdToggle = toggleButton.children[2];
const vendors = document.getElementById("vendors-container");
const searchBar = document.querySelector(".search_field");
const searchBtn = document.querySelector(".search-btn");

// const photography = document.querySelector(".photography"); 
// const allVendors = photography.previousElementSibling;
// const decoration = photography.nextElementSibling; 
// const cakeDesign = decoration.nextElementSibling; 
// const venue = cakeDesign.nextElementSibling; 
// const markupArt = venue.nextElementSibling; 
// const bridal = markupArt.nextElementSibling; 
// const hairDressing = bridal.nextElementSibling; 
// const dj = hairDressing.nextElementSibling; 

let active;


const vendorList = [
    {
        id: "a0",
        businessName: "TG Bakery",
        service: "Baking",
        displayImage: "",
        phoneNumber: "+2347056897834",
        description: "",
    },
    {
        id: "a1",
        businessName: "Klala Photography and film",
        service: "Photography",
        displayImage: "",
        phoneNumber: "+2347066897834",
        description: "",
    },
    {
        id: "a2",
        businessName: "Moloti DJ services",
        service: "DJ",
        displayImage: "",
        phoneNumber: "+2348056897834",
        description: "",
    },
    {
        id: "a3",
        businessName: "TI Decoration",
        service: "Decoration",
        displayImage: "",
        phoneNumber: "+2347036897834",
        description: "",
    },
    {
        id: "a4",
        businessName: "Jide Events",
        service: "Events Planning",
        displayImage: "",
        phoneNumber: "+2347066897834",
        description: "",
    },
    {
        id: "a5",
        businessName: "Avil Stylist",
        service: "Hair Dressing",
        displayImage: "",
        phoneNumber: "+2347036897834",
        description: "",
    },
] 





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

toggleButton.addEventListener("click", toggleNavbar);
registerVendorButton.addEventListener("click", showRegistrationModal);
desktopRegisterVendorButton.addEventListener("click", showDesktopRegistrationModal);
backdrop.addEventListener("click", closeRegistrationModal);
cancelRegisterModal.addEventListener("click", closeRegistrationModal);

