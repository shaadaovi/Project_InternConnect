const adminForm = document.getElementById("adminRegistrationForm");
const formMessage = document.getElementById("registrationMessage");
const showPasswordBox = document.getElementById("show-password");

const namePattern = /^[A-Za-z]+( [A-Za-z]+)*$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
const digitsOnlyPattern = /^[0-9]+$/;
const phonePattern = /^01[3-9][0-9]{8}$/;
const securityCodePattern = /^[A-Z0-9]{8,12}$/;
const staffIdPattern = /^[A-Za-z][A-Za-z0-9_]{3,19}$/;
const postalCodePattern = /^[0-9]{4,6}$/;
const strongPasswordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;

function getValue(id) {
    return document.getElementById(id).value.trim();
}

function getErrorBox(id) {
    const camelName = id.replace(/-([a-z])/g, function (match, letter) {
        return letter.toUpperCase();
    });
    return document.getElementById(camelName + "Error");
}

function setError(id, message) {
    const field = document.getElementById(id);
    const errorBox = getErrorBox(id);

    errorBox.innerHTML = message;

    if (message === "") {
        field.classList.remove("input-error");
        return true;
    }

    field.classList.add("input-error");
    return false;
}

function validateSecurityCode() {
    const code = getValue("security-code").toUpperCase();

    if (code === "") {
        return setError("security-code", "Security code is required");
    }
    if (!securityCodePattern.test(code)) {
        return setError("security-code",
            "Security code must be 8 to 12 letters or numbers with no spaces");
    }
    return setError("security-code", "");
}

function validateRole() {
    if (getValue("admin-role") === "") {
        return setError("admin-role", "Please select an administrator role");
    }
    return setError("admin-role", "");
}

function validateFullName() {
    const name = getValue("full-name");

    if (name === "") {
        return setError("full-name", "Name cannot be empty");
    }
    if (!namePattern.test(name)) {
        return setError("full-name", "Name should contain only letters");
    }
    return setError("full-name", "");
}

function validateStaffId() {
    const staffId = getValue("staff-id");

    if (staffId === "") {
        return setError("staff-id", "Staff ID is required");
    }
    if (!staffIdPattern.test(staffId)) {
        return setError("staff-id",
            "Staff ID must start with a letter and contain 4 to 20 letters, numbers or underscores");
    }
    return setError("staff-id", "");
}

function validateDateOfBirth() {
    const value = getValue("date-of-birth");

    if (value === "") {
        return setError("date-of-birth", "Date of birth is required");
    }

    const birthDate = new Date(value);
    const today = new Date();

    if (birthDate > today) {
        return setError("date-of-birth", "Date of birth cannot be in the future");
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    if (age < 18) {
        return setError("date-of-birth",
            "You must be at least 18 years old to register as an administrator");
    }
    return setError("date-of-birth", "");
}

function validatePhone() {
    const phone = getValue("phone");

    if (phone === "") {
        return setError("phone", "Phone number cannot be empty");
    }
    if (!digitsOnlyPattern.test(phone)) {
        return setError("phone", "Phone number should contain only digits");
    }
    if (!phonePattern.test(phone)) {
        return setError("phone",
            "Enter a valid 11-digit phone number, for example 01XXXXXXXXX");
    }
    return setError("phone", "");
}

function validateEmail() {
    const email = getValue("email");

    if (email === "") {
        return setError("email", "Email cannot be empty");
    }
    if (!emailPattern.test(email)) {
        return setError("email", "Enter a valid email address");
    }
    return setError("email", "");
}

function validateStreetAddress() {
    const street = getValue("street-address");

    if (street === "") {
        return setError("street-address", "Street address is required");
    }
    if (street.length < 10) {
        return setError("street-address",
            "Street address must be at least 10 characters");
    }
    return setError("street-address", "");
}

function validateCity() {
    const city = getValue("city");

    if (city === "") {
        return setError("city", "City is required");
    }
    if (!namePattern.test(city)) {
        return setError("city", "City should contain only letters");
    }
    return setError("city", "");
}

function validatePostalCode() {
    const postalCode = getValue("postal-code");

    if (postalCode === "") {
        return setError("postal-code", "Postal code is required");
    }
    if (!postalCodePattern.test(postalCode)) {
        return setError("postal-code", "Postal code must be 4 to 6 digits");
    }
    return setError("postal-code", "");
}

function validateCountry() {
    const country = getValue("country");

    if (country === "") {
        return setError("country", "Country is required");
    }
    if (!namePattern.test(country)) {
        return setError("country", "Country should contain only letters");
    }
    return setError("country", "");
}

function validateEmergencyName() {
    const name = getValue("emergency-name");

    if (name === "") {
        return setError("emergency-name", "Contact name cannot be empty");
    }
    if (!namePattern.test(name)) {
        return setError("emergency-name", "Contact name should contain only letters");
    }
    return setError("emergency-name", "");
}

function validateEmergencyRelationship() {
    const relationship = getValue("emergency-relationship");

    if (relationship === "") {
        return setError("emergency-relationship", "Relationship is required");
    }
    if (!namePattern.test(relationship)) {
        return setError("emergency-relationship",
            "Relationship should contain only letters");
    }
    return setError("emergency-relationship", "");
}

function validateEmergencyPhone() {
    const emergencyPhone = getValue("emergency-phone");
    const ownPhone = getValue("phone");

    if (emergencyPhone === "") {
        return setError("emergency-phone", "Contact phone number cannot be empty");
    }
    if (!digitsOnlyPattern.test(emergencyPhone)) {
        return setError("emergency-phone", "Phone number should contain only digits");
    }
    if (!phonePattern.test(emergencyPhone)) {
        return setError("emergency-phone",
            "Enter a valid 11-digit phone number, for example 01XXXXXXXXX");
    }
    if (emergencyPhone === ownPhone) {
        return setError("emergency-phone",
            "Emergency contact number must be different from your own number");
    }
    return setError("emergency-phone", "");
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const staffId = getValue("staff-id").toLowerCase();

    if (password === "") {
        return setError("password", "Password cannot be empty");
    }
    if (!strongPasswordPattern.test(password)) {
        return setError("password",
            "Password is too weak. Use at least 8 characters with an uppercase letter, a lowercase letter, a number and a special character");
    }
    if (staffId !== "" && password.toLowerCase().includes(staffId)) {
        return setError("password", "Password must not contain your staff ID");
    }
    return setError("password", "");
}

function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (confirmPassword === "") {
        return setError("confirm-password", "Please confirm your password");
    }
    if (password !== confirmPassword) {
        return setError("confirm-password", "Passwords do not match");
    }
    return setError("confirm-password", "");
}

function validateTerms() {
    if (!document.getElementById("agree-terms").checked) {
        return setError("agree-terms", "You must agree before registering");
    }
    return setError("agree-terms", "");
}

const validators = [
    { id: "security-code", check: validateSecurityCode },
    { id: "admin-role", check: validateRole },
    { id: "full-name", check: validateFullName },
    { id: "staff-id", check: validateStaffId },
    { id: "date-of-birth", check: validateDateOfBirth },
    { id: "phone", check: validatePhone },
    { id: "email", check: validateEmail },
    { id: "street-address", check: validateStreetAddress },
    { id: "city", check: validateCity },
    { id: "postal-code", check: validatePostalCode },
    { id: "country", check: validateCountry },
    { id: "emergency-name", check: validateEmergencyName },
    { id: "emergency-relationship", check: validateEmergencyRelationship },
    { id: "emergency-phone", check: validateEmergencyPhone },
    { id: "password", check: validatePassword },
    { id: "confirm-password", check: validateConfirmPassword },
    { id: "agree-terms", check: validateTerms }
];

for (let i = 0; i < validators.length; i++) {
    const item = validators[i];
    document.getElementById(item.id).addEventListener("change", item.check);
}

document.getElementById("password").addEventListener("change", function () {
    if (document.getElementById("confirm-password").value !== "") {
        validateConfirmPassword();
    }
});

document.getElementById("phone").addEventListener("change", function () {
    if (getValue("emergency-phone") !== "") {
        validateEmergencyPhone();
    }
});

showPasswordBox.addEventListener("click", function () {
    const type = showPasswordBox.checked ? "text" : "password";
    document.getElementById("password").type = type;
    document.getElementById("confirm-password").type = type;
});

adminForm.addEventListener("reset", function () {
    for (let i = 0; i < validators.length; i++) {
        setError(validators[i].id, "");
    }
    formMessage.className = "form-message";
    formMessage.innerHTML = "";
    document.getElementById("password").type = "password";
    document.getElementById("confirm-password").type = "password";
});

adminForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let allValid = true;

    for (let i = 0; i < validators.length; i++) {
        if (!validators[i].check()) {
            allValid = false;
        }
    }

    if (!allValid) {
        formMessage.className = "form-message form-message-error";
        formMessage.innerHTML =
            "Please correct the errors shown above and try again.";

        const firstError = document.querySelector(".input-error");
        if (firstError) {
            firstError.focus();
        }
        return;
    }

    formMessage.className = "form-message form-message-success";
    formMessage.innerHTML = "Registration Successful!";
});