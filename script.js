function generatePassword() {
    var length = document.getElementById("length").value;
    var includeUppercase = document.getElementById("uppercase").checked;
    var includeLowercase = document.getElementById("lowercase").checked;
    var includeNumbers = document.getElementById("numbers").checked;
    var includeSymbols = document.getElementById("symbols").checked;

    var charset = "";
    var password = "";

    if (!(includeUppercase || includeLowercase || includeNumbers || includeSymbols)) {
        alert("Please select at least one character set.");
        return;
    }

    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+?><:{}[]";

    if (includeUppercase) password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * 26));
    if (includeLowercase) password += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26));
    if (includeNumbers) password += "0123456789".charAt(Math.floor(Math.random() * 10));
    if (includeSymbols) password += "!@#$%^&*()_+?><:{}[]".charAt(Math.floor(Math.random() * 20));

    for (var i = password.length; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    password = password.split('').sort(function(){return 0.5-Math.random()}).join('');

    document.getElementById("password").value = password;
}

function copyPassword() {
    var passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard: " + passwordField.value);
}
