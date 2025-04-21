const passwordBox = document.getElementById("password");
const passlength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$%^&*()_+~|{}[]<>/-="

const allChars = upperCase + lowerCase + number + symbol

function createRandomPassword(){
    let password = ""
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)]
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password = password + number[Math.floor(Math.random() * number.length)]
    password = password + symbol[Math.floor(Math.random() * symbol.length)]

    while(password.length < passlength){
        password = password + allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select()
    document.execCommand("Copy")

    //navigator.clipboard.writeText(passwordBox.value)
}
