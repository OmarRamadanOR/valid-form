let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let textareaError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");


//Name
function validateName() {
    let ipName = document.getElementById("input-name").value;
    
    if (ipName.length === 0) {
        nameError.innerHTML = "Name is required";
        return false
    }
    if (!ipName.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)) {
        nameError.innerHTML = "Write Your FullName"
        return false
    }
    nameError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true
}
//Phone

function validatePhone() {
    let ipPhone = document.getElementById("input-phone").value;

    if (ipPhone.length === 0) {
        phoneError.innerHTML = `Phone is required`;
        return false
    }
    if (ipPhone.length !== 11) {
        phoneError.innerHTML = `Must Right 11 Numbers`;
        return false;
    }

    if (!ipPhone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = `Enter Right Number`;
        return false;
    }

    phoneError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}
//Email
function validateEmail() {
    let ipEmail = document.getElementById("input-email").value;

    if (ipEmail.length === 0) {
        emailError.innerHTML = `Email is required`;
        return false;
    }

    if (!ipEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = `Enter Valid Email`;
        return false;
    }
    
    emailError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

//Textarea
function validateTextarea() {
    let ipTextarea = document.getElementById("input-textarea").value;

    let required = 30;
    let left = required - ipTextarea.length;

    if (left > 0) {
        textareaError.innerHTML = `must write at least ${left} char`
        return false
    }
    textareaError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}