const registrationForm = document.getElementById("companyForm");


// Website Validation
function validateWebsite(website) {

    const errorMessage = document.getElementById("websiteError");
    const websitePattern = /^https:\/\/www\..+/i;
    const input = document.getElementById("website");

    input.setCustomValidity("");

    if (website === "") {
        errorMessage.innerHTML = "";
        return true;
    }

    if (!websitePattern.test(website)) {
        errorMessage.innerHTML = "Website must start with https://www.";
        input.setCustomValidity("Website must start with https://www.");
        input.reportValidity();
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Email Validation
function validateEmail(email) {

    const errorMessage = document.getElementById("emailError");
    const input = document.getElementById("email");

    input.setCustomValidity("");

    if (email === "") {
        errorMessage.innerHTML = "Email cannot be empty.";
        input.setCustomValidity("Email cannot be empty.");
        input.reportValidity();
        return false;
    }

    if (!email.includes("@")) {
        errorMessage.innerHTML = "Email must contain @.";
        input.setCustomValidity("Email must contain @.");
        input.reportValidity();
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Company Address Validation
function validateAddress(address) {

    const errorMessage = document.getElementById("addressError");
    const postalCodePattern = /\b\d{4}\b/;
    const input = document.getElementById("address");

    input.setCustomValidity("");

    if (address === "") {
        errorMessage.innerHTML = "Company address cannot be empty.";
        input.setCustomValidity("Company address cannot be empty.");
        input.reportValidity();
        return false;
    }

    if (!postalCodePattern.test(address)) {
        errorMessage.innerHTML = "Address must include a 4-digit postal code.";
        input.setCustomValidity("Address must include a 4-digit postal code.");
        input.reportValidity();
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Recruiter / Contact Name Validation
function validateName(name) {

    const errorMessage = document.getElementById("nameError");
    const namePattern = /^[A-Za-z ]+$/;
    const input = document.getElementById("recruiter-name");

    input.setCustomValidity("");

    if (name === "") {
        errorMessage.innerHTML = "Contact name cannot be empty.";
        input.setCustomValidity("Contact name cannot be empty.");
        input.reportValidity();
        return false;
    }

    if (!namePattern.test(name)) {
        errorMessage.innerHTML = "Contact name should contain only letters.";
        input.setCustomValidity("Contact name should contain only letters.");
        input.reportValidity();
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Contact Number Validation
function validatePhone(phone) {

    const errorMessage = document.getElementById("phoneError");
    const phonePattern = /^[0-9]+$/;
    const input = document.getElementById("phone");

    input.setCustomValidity("");

    if (phone === "") {
        errorMessage.innerHTML = "Contact number cannot be empty.";
        input.setCustomValidity("Contact number cannot be empty.");
        input.reportValidity();
        return false;
    }

    if (!phonePattern.test(phone)) {
        errorMessage.innerHTML = "Contact number should contain only digits.";
        input.setCustomValidity("Contact number should contain only digits.");
        input.reportValidity();
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Confirm Password Validation
function validateConfirmPassword(password, confirmPassword) {

    const errorMessage = document.getElementById("passwordError");
    const input = document.getElementById("confirm-password");

    input.setCustomValidity("");

    if (confirmPassword === "") {
        errorMessage.innerHTML = "Please confirm your password.";
        input.setCustomValidity("Please confirm your password.");
        input.reportValidity();
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.innerHTML = "Passwords do not match.";
        input.setCustomValidity("Passwords do not match.");
        input.reportValidity();
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