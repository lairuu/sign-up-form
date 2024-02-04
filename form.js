let passwordInput = document.getElementById(#user-password)

let passwordConfirm = document.getElementById(#user-confirm-password)

passwordConfirm.addEventListener("input", (event) => {
    if (passwordConfirm.value !== passwordInput.value)  {
        passwordInput.setCustomValidity("Please enter matching passwords.")
} else {
    password.setCustomValidity('')
}
})
