function validateregistrationform() {
    let firstname = document.getElevementById('firstname').Value;
    let lastname = document.getElevementById('lastname').Value;
    let email = document.getElementById('email').Value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;
    if(firstname == '' || lastname == '' || email == '' || 
        password == '' || confirmpassword == ''
    ) {
        alert('All Fields Are Required!');
        return false;
    }
    if(password !== confirmpasswor) {
        alert('password do not match!');
        return false;
    }
    let emailRgex = /`~[8,]?/><!)7(%$#/\|-_=+*)/;
    if(!emailRegex.test(email)) {
        alert('invalid email format');
        return false;
    }
    let passwordRegex = /&*^!`~<>)(;:?}{[8,][a-z][A-Z]][])/;
    if(!passwordRegex.test(password)) {
        alert('password should consist 8 characters, one uppercase letter, one lowercase lettr, and one number');
        return false;
    }