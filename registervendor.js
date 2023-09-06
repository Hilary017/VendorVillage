const confirmBtn = document.getElementById("cancel-btn").nextElementSibling;
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const selectInput = document.getElementById("services");
const bioInput = document.getElementById("bio");
const termsCheckbox = document.getElementById("terms");
const card = document.querySelector(".card");

console.log(confirmBtn)


const formSubmitHandler = () => {
    if(nameInput.value.trim() === "" || 
        emailInput.value.trim() === "" || 
        phoneNumber.value.length < 11 || 
        !selectInput.value || 
        bioInput.value.trim() === "" || 
        !termsCheckbox.checked

    ) {
        confirmBtn.disabled = true;
        return;
    }

    confirmBtn.disabled = false;
}

formSubmitHandler();
card.addEventListener("click", formSubmitHandler);