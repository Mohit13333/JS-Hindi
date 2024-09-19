function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    prompt("Enter email address");
    if (reg.test(emailField.value) == false) 
    {
        console.log("Invalid email adress");
        alert('Invalid Email Address');
        return false;
    }else if(reg.test == true){
        console.log("Email Address Verrified");
    }


    return true;

}
console.log(validateEmail());