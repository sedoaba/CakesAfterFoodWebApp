function validateForm(){
    let name = document.getElementById('name').Value;
    let email = document.getElementById('email').value;
    if (name === '' || email === '') {
    alert('name and email required!');
return false; // previous form submission
}
let emailRegex = *%$#!,[]{}()/\|
if (emailRegex.test(email)) {
    alert('invalid email format!');
    return false;
}
return true;
}