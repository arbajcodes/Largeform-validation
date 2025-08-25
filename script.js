

const form = document.getElementById("myForm")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const country = document.getElementById("country")
const successMessage = document.getElementById("successMessage")
const genderInputs = document.querySelectorAll('input[name= "gender"]');
const termsCheckBox = document.getElementById("terms")
const togglepass =  document.querySelector(".toggle-password")

function setError(input, message) {
    const error = input.parentElement.querySelector(".error")
    error.innerText = message
    input.classList.add("is-error")
    input.classList.remove("is-success")
}

function clearError(input) {
    const error = input.parentElement.querySelector(".error")
    error.innerText = ""
    input.classList.add("is-success")
    input.classList.remove("is-error")
}

function nameValidation() {
    if (username.value.trim() === "") {
        setError(username, "Name is Required!")
        return false
    }
    else if (username.value.trim().length < 8) {
        setError(username, "Type Name at least 8 charcater!")
        return false
    }
    else {
        clearError(username)
        return true
    }
}
function nameValidation() {
    if (username.value.trim() === "") {
        setError(username, "Name is Required!")
        return false
    }
    else if (username.value.trim().length < 8) {
        setError(username, "Type Name at least 8 charcater!")
        return false
    }
    else {
        clearError(username)
        return true
    }
}
function emaiValidation() {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        setError(email, "Eamil is Required!")
        return false
    }
    else if (!regex.test(email.value.trim())) {
        setError(email, "Enter Valid Email Address!")
        return false
    }
    else {
        clearError(email)
        return true
    }
}
function passwordValidation() {
    let passregex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (password.value.trim() === "") {
        setError(password, "Password is Required!")
        return false
    }
    else if (!passregex.test(password.value.trim())) {
        setError(password, "Type Password must be 6+ chars, include Uppercase, Number & Special char!")
        return false
    }
    else {
        clearError(password)
        return true
    }
}
function confirmPassValidation() {
    if (confirmPassword.value.trim() === "") {
        setError(confirmPassword, "Confirm is Required!")
        return false
    }
    else if (confirmPassword.value.trim() !== password.value.trim()) {
        setError(confirmPassword, "Enter valid Confim Password!")
        return false
    }
    else {
        clearError(confirmPassword)
        return true
    }
}
function togglePassword() {
    const passwordField = document.getElementById("password")
    const toggleIcon = document.querySelector(".toggle-password")

    if (passwordField.type === "password") {
        passwordField.type = "text"
        toggleIcon.innerText = "👁‍🗨"
    } else {
        passwordField.type = "password"
        toggleIcon.innerText = "👁"

    }
}
function toggleConfirmPass() {
    const passwordField = document.getElementById("confirmPassword")
    const toggleIcon = document.querySelector(".toggle-confirmpass")

    if (passwordField.type === "password") {
        passwordField.type = "text"
        toggleIcon.innerText = "👁‍🗨"
    } else {
        passwordField.type = "password"
        toggleIcon.innerText = "👁"

    }
}

function DropdownValidation() {
    if (country.value.trim() === "") {
        setError(country, "Please Select Your Country!")
        return false
    }
    else {
        clearError(country)
        return true
    }
}
function genderValidation() {
    let Selected = false;

    genderInputs.forEach((input) => {
        if (input.checked) {
            Selected = true
        }


    })

    let error = genderInputs[0].parentElement.querySelector(".error")

    if (!Selected) {
        error.innerText = "Please Select Gender!"
        return false
    }
    else {
        error.innerText = ""
        return true
    }
}

function termsCheck() {
    if (!termsCheckBox.checked) {
        setError(termsCheckBox, "You must agree to continue!")
        return false
    }
    else {
        clearError(termsCheckBox)
        return true
    }
}

username.addEventListener("input", nameValidation)
email.addEventListener("input", emaiValidation)
password.addEventListener("input", passwordValidation)
confirmPassword.addEventListener("input", confirmPassValidation)
country.addEventListener("input", DropdownValidation)
genderInputs.forEach((input) => {
    input.addEventListener("change", genderValidation)
})

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let validName = nameValidation()
    let validEmail = emaiValidation()
    let validPass = passwordValidation()
    let validConPass = confirmPassValidation()
    let validCountry = DropdownValidation()
    let validGender = genderValidation()
    let validTerms = termsCheck()
 


    if (validName && validEmail && validPass && validConPass && validCountry && validGender && validTerms ) {
        successMessage.innerText = "Form Submitted Successfully 🎉🐱‍👤"
        alert("Form Submitted Successfully 🎉🐱‍👤")
        form.reset()

        username.style.border = ""
        email.style.border = ""
        password.style.border = ""
        confirmPassword.style.border = ""
        country.style.border = ""
        genderInputs.forEach((input) => {
            input.style.outline = "";
        });

        termsCheckBox.style.border = ""

    }
    else {
        successMessage.innerText = ""
    }
})