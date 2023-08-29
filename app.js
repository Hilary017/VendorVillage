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
const photography = document.querySelector(".photography"); 
const allVendors = photography.previousElementSibling;
const decoration = photography.nextElementSibling; 
const cakeDesign = decoration.nextElementSibling; 
const venue = cakeDesign.nextElementSibling; 
const markupArt = venue.nextElementSibling; 
const bridal = markupArt.nextElementSibling; 
const hairDressing = bridal.nextElementSibling; 
const dj = hairDressing.nextElementSibling; 

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

const loadVendorList = (filterValue = "") => {
    vendors.innerHTML = "";

    const filteredVendors = !filterValue ? vendorList : vendorList.filter(vendor => {
       return vendor.businessName.toLowerCase().includes(filterValue) ||
             vendor.service.toLowerCase().includes(filterValue) ||
             vendor.phoneNumber.includes(filterValue)
    }) 

    let newVendor;
    let detailsBtn
    for(const vendor of filteredVendors) {
        newVendor = document.createElement("div");
        newVendor.className = "cartitem__div";
        newVendor.innerHTML = `
            <img src="/images/cake.jpg" alt=${vendor.businessName} class="cartitem_img"} />
            <div class="movie__actions">
                <div style="padding: 0 0.5rem;">
                    <h3>Name: <span>${vendor.businessName}</span></h3>
                    <h3>Service/Industry: <span>${vendor.service}</span></h3>
                </div>
            </div>
            <div class="details_btn">
                <button value=${vendor.id}>View Profile</button>
            </div>
        `
        vendors.append(newVendor);

        detailsBtn = newVendor.querySelectorAll("button");
    }

    console.log(detailsBtn)

    const alert = () => {
        alert("okay")
    }

    // detailsBtn.addEventListener("click", alert)

    if(filteredVendors.length < 1) {
        vendors.innerHTML = `
            <div style="text-align: center;">
                <h3>No Results</h3>
                <p>Sorry! no result was found for this page/search.</p>
            </div>
        `
    }
    
    
    // for(const button of vendorsBtn) {
    //     const singleMovie = vendorList.filter(vendor => {
    //         return vendor.id === button.value
    //     })

    //     console.log(singleMovie);
    //     // console.log(button.value)

    //     button.addEventListener("click", () => alert("clicked!"))
    // }
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

loadVendorList();
toggleButton.addEventListener("click", toggleNavbar);
registerVendorButton.addEventListener("click", showRegistrationModal);
desktopRegisterVendorButton.addEventListener("click", showDesktopRegistrationModal);
backdrop.addEventListener("click", closeRegistrationModal);
cancelRegisterModal.addEventListener("click", closeRegistrationModal);
searchBtn.addEventListener("click", searchMovieHandler);
photography.addEventListener("click", filterMovieHandler.bind(null, "photography"));
decoration.addEventListener("click", filterMovieHandler.bind(null, "decoration"));
cakeDesign.addEventListener("click", filterMovieHandler.bind(null, "cake design"));
venue.addEventListener("click", filterMovieHandler.bind(null, "venue"));
markupArt.addEventListener("click", filterMovieHandler.bind(null, "makeup Art"));
bridal.addEventListener("click", filterMovieHandler.bind(null, "bridal gown"));
hairDressing.addEventListener("click", filterMovieHandler.bind(null, "hair dressing"));
dj.addEventListener("click", filterMovieHandler.bind(null, "dj"));
allVendors.addEventListener("click", searchMovieHandler);