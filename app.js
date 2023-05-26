const password = document.getElementById('password')
const confirmPwd = document.getElementById('confirm-password')
console.log(password, confirmPwd)


confirmPwd.addEventListener('keyup', () => {
    console.log(password.value === confirmPwd.value)
})
