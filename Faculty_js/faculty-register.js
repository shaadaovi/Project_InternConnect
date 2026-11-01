const registrationForm = document.getElementById("facultyForm");



function validateName(name) {

    const errorMessage = document.getElementById("nameError");
    const namePattern = /^[A-Za-z ]+$/;

    if (name === "") {
        errorMessage.innerHTML = "Full name cannot be empty.";
        return false;
    }

    if (!namePattern.test(name)) {
        errorMessage.innerHTML = "Name should contain only letters.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}



function validateFacultyID(facultyId) {

    const errorMessage = document.getElementById("idError");
    const idPattern = /^[FE]/i;

    if (facultyId === "") {
        errorMessage.innerHTML = "Faculty ID cannot be empty.";
        return false;
    }

    if (!idPattern.test(facultyId)) {
        errorMessage.innerHTML = "Faculty ID must start with F or E.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}



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



function validatePhone(phone) {

    const errorMessage = document.getElementById("contactError");
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



function validateConfirmPassword(password, confirmPassword) {

    const errorMessage = document.getElementById("passwordError");

    if (password === "") {
        errorMessage.innerHTML = "Password cannot be empty.";
        return false;
    }

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
