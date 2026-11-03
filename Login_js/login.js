const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const showPasswordBox = document.getElementById("show-password");

const emailPattern = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
const userIdPattern = /^[A-Za-z0-9_-]{3,30}$/;

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

function validateAccountType() {
    if (getValue("account-type") === "") {
        return setError("account-type", "Please select your account type");
    }
    return setError("account-type", "");
}

function validateUserId() {
    const userId = getValue("user-id");

    if (userId === "") {
        return setError("user-id", "User ID or email cannot be empty");
    }

    if (userId.includes("@")) {
        if (!emailPattern.test(userId)) {
            return setError("user-id", "Enter a valid email address");
        }
    } else if (!userIdPattern.test(userId)) {
        return setError("user-id",
            "Enter a valid email address or a user ID (3 to 30 letters, numbers, hyphens or underscores)");
    }

    return setError("user-id", "");
}

function validatePassword() {
    const password = document.getElementById("password").value;

    if (password === "") {
        return setError("password", "Password cannot be empty");
    }
    if (password.length < 6) {
        return setError("password", "Password must contain at least 6 characters");
    }
    return setError("password", "");
}

const validators = [
    { id: "account-type", check: validateAccountType },
    { id: "user-id", check: validateUserId },
    { id: "password", check: validatePassword }
];

for (let i = 0; i < validators.length; i++) {
    const item = validators[i];
    document.getElementById(item.id).addEventListener("change", item.check);
}

showPasswordBox.addEventListener("click", function () {
    const type = showPasswordBox.checked ? "text" : "password";
    document.getElementById("password").type = type;
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let allValid = true;

    for (let i = 0; i < validators.length; i++) {
        if (!validators[i].check()) {
            allValid = false;
        }
    }

    if (!allValid) {
        loginMessage.className = "form-message form-message-error";
        loginMessage.innerHTML =
            "Please correct the errors shown above and try again.";

        const firstError = document.querySelector(".input-error");
        if (firstError) {
            firstError.focus();
        }
        return;
    }

    loginMessage.className = "form-message form-message-success";
    loginMessage.innerHTML = "Login details are valid.";
});