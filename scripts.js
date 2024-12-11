const password = document.getElementById('pwd');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('form');
const pwdErr = document.querySelector('.form-item span')

function validatePasswords() {
    if (confirmPassword.value != password.value) {
        confirmPassword.setCustomValidity('Password must match')
        pwdErr.textContent = "Passwords do not match!";
    } else {
        confirmPassword.setCustomValidity('');
        pwdErr.textContent = "";
    }
}

password.addEventListener('input', validatePasswords)
confirmPassword.addEventListener('input', validatePasswords)

form.addEventListener('submit', (event) => {
    validatePasswords()
    if (!form.checkValidity()) {
        event.preventDefault();
    }
})