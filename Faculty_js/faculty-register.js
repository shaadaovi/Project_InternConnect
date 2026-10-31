
// Get the registration form
const form = document.getElementById("facultyForm");

// Listen for form submission
form.addEventListener("submit", function(event) {

    let isValid = true;

    // Get input values
    const fullName = document.getElementById("fullName").value.trim();
    const facultyId = document.getElementById("facultyId").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(function(error) {
        error.innerText = "";
    });

    // 1. Full Name Validation
    if (/\d/.test(fullName)) {
        document.getElementById("nameError").innerText =
            "Please enter a valid name without numbers.";
        isValid = false;
    }

    // 2. Faculty / Employee ID Validation
    if (!/^[FE]/i.test(facultyId)) {
        document.getElementById("idError").innerText =
            "Please enter a valid ID starting with F or E.";
        isValid = false;
    }

    // 3. Official Email Validation
    if (!email.includes("@")) {
        document.getElementById("emailError").innerText =
            "Please enter a valid email address.";
        isValid = false;
    }

    // 4. Contact Number Validation
    if (!/^[0-9]+$/.test(contact)) {
        document.getElementById("contactError").innerText =
            "Contact number must contain numbers only.";
        isValid = false;
    }

    // 5. Password Matching Validation
    if (password !== confirmPassword) {
        document.getElementById("passwordError").innerText =
            "Passwords do not match. Please try again.";
        isValid = false;
    }

    // Stop form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }

});
