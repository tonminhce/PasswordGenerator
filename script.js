const ccEl = document.getElementById("cc");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getlower() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getupper() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getnumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getsymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value;

    let password = "";

    if (upperEl.checked) {
        password += getupper();
    }

    if (lowerEl.checked) {
        password += getlower();
    }

    if (numberEl.checked) {
        password += getnumber();
    }

    if (symbolEl.checked) {
        password += getsymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    ccEl.innerText = password;
}

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getupper());
    }

    if (lowerEl.checked) {
        xs.push(getlower());
    }

    if (numberEl.checked) {
        xs.push(getnumber());
    }

    if (symbolEl.checked) {
        xs.push(getsymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

