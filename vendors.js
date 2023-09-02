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
const vendorProfile = registerModal.nextElementSibling;
// 
// console.log(cancelVendor);

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

const vendorProfileHandler = (id) => {
    const vendor = vendorList.filter(vendor => vendor.id === id);
    const newProfile = document.createElement("div");
    vendorProfile.innerHTML = "";
    backdrop.classList.toggle("visible")
    vendorProfile.classList.toggle("visible");
   

    for(const profile of vendor) {
        newProfile.innerHTML = `<div class="vendor-profile" style="width: 90%; padding: 2rem 1rem; padding-bottom: 6rem; position: relative; background-color: #7A3085; margin: 7rem auto 0 auto; border-radius: 10px;">
                <img src="/images/cake.jpg" alt="TG Bakery" class="vendor--img" style="width: 150px; height: 150px; margin: auto; position: absolute; top: -35%; left: 0%;">
                <h3 style="text-align: center;">${profile.businessName}</h3>
                <p style="color: white; text-align: center;">
                    Mix n Bake Cake is a Lagos number 1 cake company, 
                    we have changed the wedding cake business with our 
                    range of aesthetically pleasing and delicious  cake 
                    that will delight your invitees on your big day.
                </p>
                <div style="position: absolute; left: 15px; bottom: 7%;">
                    <div>
                        <h4 style="margin-bottom: 0;">Find us on socials</h4>
                        <div style="margin-top: 0; display: flex; justify-content: center;">
                            <img src="images/faceb.png" alt="facebook icon" style="width: 30px; height: 30px;">
                            <img src="images/instagram.png" alt="instagram icon" style="width: 30px; height: 30px;">
                            <img src="images/whatsapp.png" alt="WhatsApp icon" style="width: 30px; height: 30px;">
                        </div>
                    </div>
                </div>
                <button id="cancel-vendor" style="position: absolute; right: 20px; bottom: 10%; border: none; padding: 10px; color: white; border-radius: 5px; background-color: #0A86F8;">Book now</button>
                <button id="book-vendor" style="position: absolute; right: 110px; bottom: 10%; border: none; padding: 10px; color: white; border-radius: 5px; background-color: rgb(94, 94, 95);">Cancel</button>
            </div>
            <div style="width: 90%; margin: 0 auto;">
                <h4>Our Services</h4>
                <p>Depending on your budget, we can offer you cakes of diferent sizes and 
                    shape with no compromise. from massive custom wedding cakes specifically 
                    tailored to your taste, to theme cakes, traditional cakes, cupcake etc.
                </p>
                <div>   
                    <button id="register" style="border: none; padding: 10px; color: white; border-radius: 5px; background-color: #0A86F8;">Photos</button>
                    <button id="register" style="border: none; padding: 10px; color: white; border-radius: 5px; background-color: black;">Reviews</button>
                </div>  
            </div>
            <div class="service-images" style="width: 90%; margin: 1rem auto;">
                <img src="/images/cake.jpg" alt="TG Bakery" style="width: 180px; height: 150px;">
                <img src="/images/cake.jpg" alt="TG Bakery" style="width: 180px; height: 150px;">
                <img src="/images/cake.jpg" alt="TG Bakery" style="width: 180px; height: 150px;">
            </div>
            <div style="width: 90%; margin: 0 auto;">
                <h3>Contact us</h3>
                <p>N0 73 Ogunusi Rosd, Ojodu Berger, Lagos</p>
                <p>Telephone: +2347032122211</p>
            </div>
        `
        vendorProfile.append(newProfile);
        const cancelVendor = vendorProfile.querySelector("button").nextElementSibling;
        cancelVendor.addEventListener("click", closeRegistrationModal);
    }
}

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
        const button = newVendor.querySelector("button");
        button.addEventListener("click", vendorProfileHandler.bind(null, button.value))
    }

    // detailsBtn = vendors.querySelectorAll("button");

    // console.log(detailsBtn)

    // let button;

    // const viewProfile = (id) => {
    //     for(const btn of detailsBtn) {
    //         button = btn;
    //         console.log(btn, button);
    //         // vendorList.filter(vendor => vendor.id === id);
    //     }
    // }

    // viewProfile();
    // console.log(button)

    
    

    // for(const btn of detailsBtn) {
    //     const alert = () => {
    //         alert("okay")
    //     }
    //     console.log(btn)
    //     console.log(btn.value )
    
    //     btn.addEventListener("click", alert)
    // }

    

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
    backdrop.classList.remove("visible");
    registerModal.classList.remove("visible");
    vendorProfile.classList.remove("visible");
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
allVendors.addEventListener("click", loadVendorList.bind(null, ""));
