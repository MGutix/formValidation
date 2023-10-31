const inputEmail = document.getElementById('inputEmail')
const inputCountry = document.getElementById('inputCountry')
const inputZip = document.getElementById('inputZip')

const inputPassword1 = document.getElementById('inputPassword1')
const inputPassword2 = document.getElementById('inputPassword2')

const msjArea = document.getElementById('demo')
const submit = document.getElementById('submit')

submit.addEventListener('click', validate)


function validate() {
    
    if (!inputEmail.checkValidity()) {
        msjArea.innerHTML = inputEmail.validationMessage;
    } else {
        msjArea.innerHTML = `msjArea Input OK`;
    } 

    if (!inputCountry.checkValidity()) {
        msjArea.innerHTML += inputCountry.validationMessage;
    } else {
        msjArea.innerHTML += `msjArea Input OK`;
    } 

    if (!inputZip.checkValidity()) {
        msjArea.innerHTML += inputZip.validationMessage;
    } else {
        msjArea.innerHTML += `msjArea Input OK`;
    } 

    if (!inputPassword1.checkValidity()) {
        msjArea.innerHTML += inputPassword1.validationMessage;
    } else {
        msjArea.innerHTML += `msjArea Input OK`;
    } 

    if (!inputPassword2.checkValidity()) {
        msjArea.innerHTML += inputPassword2.validationMessage;
    } else {
        msjArea.innerHTML += `msjArea Input OK`;
    } 
  } 