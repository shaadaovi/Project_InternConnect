
const registrationForm = document.getElementById("facultyForm");



function validateName(name) {

    const errorMessage = document.getElementById("nameError");
    const namePattern = /^[A-Za-z ]+$/;
    const input = document.getElementById("fullName");

    if (name === "") {
        errorMessage.innerHTML = "Full name cannot be empty.";
        input.setCustomValidity("Full name cannot be empty.");
        input.reportValidity();
        return false;
    }

    if (!namePattern.test(name)) {
        errorMessage.innerHTML = "Name should contain only letters.";
        input.setCustomValidity("Name should contain only letters.");
        input.reportValidity();
        return false;
    }

    input.setCustomValidity("");
    errorMessage.innerHTML = "";
    return true;
}



function validateFacultyID(facultyId) {

    const errorMessage = document.getElementById("idError");
    const idPattern = /^[FE]/i;
    const input = document.getElementById("facultyId");

    if (facultyId === "") {
        errorMessage.innerHTML = "Faculty ID cannot be empty.";
        input.setCustomValidity("Faculty ID cannot be empty.");
        input.reportValidity();
        return false;
    }

    if (!idPattern.test(facultyId)) {
        errorMessage.innerHTML = "Faculty ID must start with F or E.";
        input.setCustomValidity("Faculty ID must start with F or E.");
        input.reportValidity();
        return false;
    }

    input.setCustomValidity("");
    errorMessage.innerHTML = "";
    return true;
}




function validateEmail(email) {

    const errorMessage = document.getElementById("emailError");
    const input = document.getElementById("email");

    // Clear previous popup error
    input.setCustomValidity("");

    if (email === "") {
        errorMessage.innerHTML = "Email cannot be empty.";
        input.setCustomValidity("Email cannot be empty.");
        input.reportValidity();
        return false;
    }

    if (!input.checkValidity()) {
        errorMessage.innerHTML = "Please enter a valid email address.";
        input.setCustomValidity("Please enter a valid email address.");
        input.reportValidity();
        return false;
    }

    input.setCustomValidity("");
    errorMessage.innerHTML = "";
    return true;
}




function validatePhone(phone) {

    const errorMessage = document.getElementById("contactError");
    const phonePattern = /^[0-9]+$/;
    const input = document.getElementById("contact");

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

    input.setCustomValidity("");
    errorMessage.innerHTML = "";
    return true;
}



function validateConfirmPassword(password, confirmPassword) {

    const errorMessage = document.getElementById("passwordError");
    const passwordInput = document.getElementById("password");
    const confirmInput = document.getElementById("confirm-password");

    if (password === "") {
        errorMessage.innerHTML = "Password cannot be empty.";
        passwordInput.setCustomValidity("Password cannot be empty.");
        passwordInput.reportValidity();
        return false;
    }

    if (confirmPassword === "") {
        errorMessage.innerHTML = "Please confirm your password.";
        confirmInput.setCustomValidity("Please confirm your password.");
        confirmInput.reportValidity();
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.innerHTML = "Passwords do not match.";
        confirmInput.setCustomValidity("Passwords do not match.");
        confirmInput.reportValidity();
        return false;
    }

    passwordInput.setCustomValidity("");
    confirmInput.setCustomValidity("");
    errorMessage.innerHTML = "";
    return true;
}



registrationForm.addEventListener("submit", function(event) {

  
    const fullName =
        document.getElementById("fullName").value.trim();

    const facultyId =
        document.getElementById("facultyId").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const contact =
        document.getElementById("contact").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirm-password").value;


    
    const nameValid = validateName(fullName);

    const facultyIDValid = validateFacultyID(facultyId);

    const emailValid = validateEmail(email);

    const phoneValid = validatePhone(contact);

    const passwordValid =
        validateConfirmPassword(password, confirmPassword);


    if (
        !nameValid ||
        !facultyIDValid ||
        !emailValid ||
        !phoneValid ||
        !passwordValid
    ) {
        event.preventDefault();
    }

});
