const registrationForm = document.getElementById("studentRegistrationForm");


// Name Validation
function validateName(name, errorId, fieldName) {

    const namePattern = /^[A-Za-z ]+$/;
    const errorMessage = document.getElementById(errorId);

    if (name === "") {
        errorMessage.innerHTML = fieldName + " cannot be empty.";
        return false;
    }

    if (!namePattern.test(name)) {
        errorMessage.innerHTML = fieldName + " should contain only letters.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Email Validation
function validateEmail(email, errorId, fieldName) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = document.getElementById(errorId);

    if (email === "") {
        errorMessage.innerHTML = fieldName + " cannot be empty.";
        return false;
    }

    if (!emailPattern.test(email)) {
        errorMessage.innerHTML = "Enter a valid email address.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Password Validation
function validatePassword(password) {

    const errorMessage = document.getElementById("passwordError");
    const numberPattern = /[0-9]/;

    if (password === "") {
        errorMessage.innerHTML = "Password cannot be empty.";
        return false;
    }

    if (password.length < 6) {
        errorMessage.innerHTML = "Password must contain at least 6 characters.";
        return false;
    }

    if (!numberPattern.test(password)) {
        errorMessage.innerHTML = "Password must contain at least one number.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Confirm Password Validation
function validateConfirmPassword(password, confirmPassword) {

    const errorMessage = document.getElementById("confirmPasswordError");

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


// Phone Number Validation
function validatePhone(phone) {

    const errorMessage = document.getElementById("phoneError");
    const phonePattern = /^[0-9]{11}$/;

    if (phone === "") {
        errorMessage.innerHTML = "Phone number cannot be empty.";
        return false;
    }

    if (!phonePattern.test(phone)) {
        errorMessage.innerHTML = "Phone number must contain exactly 11 digits.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}


// Form Submit Event
registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get input values
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();

    const universityEmail =
        document.getElementById("university-email").value.trim();

    const personalEmail =
        document.getElementById("personal-email").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirm-password").value;

    const phone =
        document.getElementById("contact-number").value.trim();


    // Run validation functions
    const firstNameValid =
        validateName(firstName, "firstNameError", "First Name");

    const lastNameValid =
        validateName(lastName, "lastNameError", "Last Name");

    const universityEmailValid =
        validateEmail(
            universityEmail,
            "universityEmailError",
            "University Email"
        );

    const personalEmailValid =
        validateEmail(
            personalEmail,
            "personalEmailError",
            "Personal Email"
        );

    const passwordValid =
        validatePassword(password);

    const confirmPasswordValid =
        validateConfirmPassword(password, confirmPassword);

    const phoneValid =
        validatePhone(phone);


    // Check all validation results
    if (
        firstNameValid &&
        lastNameValid &&
        universityEmailValid &&
        personalEmailValid &&
        passwordValid &&
        confirmPasswordValid &&
        phoneValid
    ) {

        document.getElementById("registrationMessage").innerHTML =
            "Registration Successful!";

    }
    else {

        document.getElementById("registrationMessage").innerHTML =
            "Please correct the errors before submitting the form.";

    }

});