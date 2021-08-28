//Toggle Password Visibility
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // toggle the eye / eye slash icon
    if (document.getElementById("togglePassword").classList.contains('fa-eye-slash')) {
        document.getElementById("togglePassword").classList.remove('fa-eye-slash');
        document.getElementById("togglePassword").classList.add('fa-eye');
    } else {
        document.getElementById("togglePassword").classList.remove('fa-eye');
        document.getElementById("togglePassword").classList.add('fa-eye-slash');
    }
});


//Toggle Confirm Password Visibility
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const confirmPassword = document.querySelector('#confirmPassword');

toggleConfirmPassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);

    // toggle the eye / eye slash icon
    if (document.getElementById("toggleConfirmPassword").classList.contains('fa-eye-slash')) {
        document.getElementById("toggleConfirmPassword").classList.remove('fa-eye-slash');
        document.getElementById("toggleConfirmPassword").classList.add('fa-eye');
    } else {
        document.getElementById("toggleConfirmPassword").classList.remove('fa-eye');
        document.getElementById("toggleConfirmPassword").classList.add('fa-eye-slash');
    }
});

// Check if Full Name is empty 
function validationInputs() {
    //get the Full Name without space
    const fullNameValue = document.getElementById('fullName').value.replace(/\s+/g, '').trim();
    //get the Password without space
    const password = document.getElementById('password').value.replace(/\s+/g, '').trim();
    //We compare the Password with the Confirmation Password
    const confirmPassword = document.getElementById('confirmPassword').value.replace(/\s+/g, '').trim();

    // Full Name Validation
    //check if the Full Name is empty
    if (fullNameValue.length === 0) {
        document.getElementById("span-fullName").textContent = "Le nom complet ne doit pas être vide";
        document.getElementById("span-fullName").style.color = "red";
        document.getElementById("fullName-validation").style.display = "block";

        /*Hide the validation of password and confirm Password*/
        document.getElementById("password-validation").style.display = "none";
        document.getElementById("confirmPassword-validation").style.display = "none";

        return;
    } else {
        document.getElementById("fullName-validation").style.display = "none";
    }

    //Fulle Name Accept only Letters
    //Regex for Valid Characters i.e. Alphabets and Space
    var regex = /^[A-Za-z]+$/;
    //Validate Full Name value against the Regex.
    var isValid = regex.test(fullNameValue);
    if (!isValid) {
        document.getElementById("span-fullName").textContent = "Le nom ne doit pas contenir des caractères spéciaux";
        document.getElementById("span-fullName").style.color = "red";
        document.getElementById("fullName-validation").style.display = "block";

        /*Hide the validation of password and confirm Password*/
        document.getElementById("password-validation").style.display = "none";
        document.getElementById("confirmPassword-validation").style.display = "none";
        document.getElementById("div-password-size").style.display = "block";

        return;
    } else {
        document.getElementById("fullName-validation").style.display = "none";
    }

    //Fulle Name size is between 5 and 20 caracters
    if (fullNameValue.length < 5 || fullNameValue.length > 20) {
        document.getElementById("span-fullName").textContent = "Le nom complet doit être entre 5 et 20 caractéres";
        document.getElementById("span-fullName").style.color = "red";
        document.getElementById("fullName-validation").style.display = "block";

        /*Hide the validation of password and confirm Password*/
        document.getElementById("password-validation").style.display = "none";
        document.getElementById("confirmPassword-validation").style.display = "none";
        document.getElementById("div-password-size").style.display = "block";
        return;

    } else {
        document.getElementById("fullName-validation").style.display = "none";
    }

    //Password Validation
    //check if password is empty
    if (password.length === 0) {
        document.getElementById("span-password").textContent = "Le mot de passe ne doit pas être vide";
        document.getElementById("span-password").style.color = "red";
        document.getElementById("password-validation").style.display = "block";
        /*Hide the validation of Size password and confirm Password*/

        document.getElementById("confirmPassword-validation").style.display = "none";
        document.getElementById("div-password-size").style.display = "none";
        return;
    }
    //check the password size
    else if (password.length < 4 || password.length > 6) {
        document.getElementById("span-password").textContent = "Le mot de passe doit comporter entre 4 et 6 caractéres";
        document.getElementById("span-password").style.color = "red";
        document.getElementById("password-validation").style.display = "block";
        /*Hide the validation of Size password and confirm Password*/

        document.getElementById("confirmPassword-validation").style.display = "none";
        document.getElementById("div-password-size").style.display = "none";
        return;
    } else {
        document.getElementById("password-validation").style.display = "none";
    }
    //Confirmation Password Validation
    if (confirmPassword !== password) {
        document.getElementById("span-confirmPassword").textContent = "Les mots de passe ne sont pas identiques";
        document.getElementById("span-confirmPassword").style.color = "red";
        document.getElementById("confirmPassword-validation").style.display = "block";

        document.getElementById("div-password-size").style.display = "block";
        return;
    } else {
        document.getElementById("confirmPassword-validation").style.display = "none";
    }
    alert(`Bonjour ${fullNameValue} votre compte est bien crée`)
    return;
}