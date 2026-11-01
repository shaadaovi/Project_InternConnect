const registrationForm = document.getElementById("companyForm");


// Website Validation
function validateWebsite(website) {

    const errorMessage = document.getElementById("websiteError");
    const websitePattern = /^https:\/\/www\..+/i;

    if (website === "") {
        errorMessage.innerHTML = "";
        return true;
    }

    if (!websitePattern.test(website)) {
        errorMessage.innerHTML = "Website must start with https://www.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Email Validation
function validateEmail(email) {

    const errorMessage = document.getElementById("emailError");

    if (email === "") {
        errorMessage.innerHTML = "Email cannot be empty.";
        return false;
    }

    if (!email.includes("@")) {
        errorMessage.innerHTML = "Email must contain @.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Company Address Validation
function validateAddress(address) {

    const errorMessage = document.getElementById("addressError");
    const postalCodePattern = /\b\d{4}\b/;

    if (address === "") {
        errorMessage.innerHTML = "Company address cannot be empty.";
        return false;
    }

    if (!postalCodePattern.test(address)) {
        errorMessage.innerHTML = "Address must include a 4-digit postal code.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Recruiter / Contact Name Validation
function validateName(name) {

    const errorMessage = document.getElementById("nameError");
    const namePattern = /^[A-Za-z ]+$/;

    if (name === "") {
        errorMessage.innerHTML = "Contact name cannot be empty.";
        return false;
    }

    if (!namePattern.test(name)) {
        errorMessage.innerHTML = "Contact name should contain only letters.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Contact Number Validation
function validatePhone(phone) {

    const errorMessage = document.getElementById("phoneError");
    const phonePattern = /^[0-9]+$/;

    if (phone === "") {
        errorMessage.innerHTML = "Contact number cannot be empty.";
        return false;
    }

    if (!phonePattern.test(phone)) {
        errorMessage.innerHTML = "Contact number should contain only digits.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Confirm Password Validation
function validateConfirmPassword(password, confirmPassword) {

    const errorMessage = document.getElementById("passwordError");

    if (confirmPassword === "") {
        errorMessage.innerHTML = "Please confirm your password.";
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.innerHTML = "Passwords do not match.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Form Submit Event
registrationForm.addEventListener("submit", function(event) {

    // Get input values
    const website = document.getElementById("website").value.trim();

    const email = document.getElementById("email").value.trim();

    const address = document.getElementById("address").value.trim();

    const recruiterName =
        document.getElementById("recruiter-name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirm-password").value;


    // Run validation functions
    const websiteValid = validateWebsite(website);

    const emailValid = validateEmail(email);

    const addressValid = validateAddress(address);

    const nameValid = validateName(recruiterName);

    const phoneValid = validatePhone(phone);

    const passwordValid =
        validateConfirmPassword(password, confirmPassword);


    // Check all validation results
    if (
        !websiteValid ||
        !emailValid ||
        !addressValid ||
        !nameValid ||
        !phoneValid ||
        !passwordValid
    ) {
        event.preventDefault();
    }

});