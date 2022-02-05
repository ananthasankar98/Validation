var error_number = document.getElementById("error_number");
var error_password = document.getElementById("error_password");
var email = document.getElementById("email");
var phone = document.getElementById("email");
var pwd = document.getElementById("password");
var strength1 = document.getElementById("strength1");
var strength2 = document.getElementById("strength2");
var strength3 = document.getElementById("strength3");
var comment = document.getElementById("comment");
var progress = document.getElementById("progress");

let regexp_email = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
let regexp_number = /^([0-9]{10})$/
let regexp_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
var result;

function validate(){
    //Validation for Email
    if(regexp_email.test(email.value))
    {
        result =result && true;
    }
    else
    {
        error_email.innerHTML = "Invalid Email";
        error_email.style.color = "red";
        result =result && false;
    }
    //Validation for Password
    if(password.value.length <= 8)
    {   
        progress.removeAttribute("hidden", "true");
        strength1.removeAttribute("hidden", "true");
        comment.innerText = "Weak Password; Minimum 8 characters required";
        result = result && false;
    }
    else if(regexp_password.test(password.value))
    {
        comment.innerText = "Strong Password.";
        progress.removeAttribute("hidden", "true");
        strength1.removeAttribute("hidden", "true");
        strength2.removeAttribute("hidden", "true");
        strength3.removeAttribute("hidden", "true");
        result = result && true;
        
        //strength1.style.color="red";
        //strength2.style.color="orange";
        //strength3.style.color="green";

    }
    else 
    {
        progress.removeAttribute("hidden", "true");

        strength1.removeAttribute("hidden", "true");
        strength2.removeAttribute("hidden", "true");

        comment.innerText = "Medium Password: Try adding atleast one uppercase, one lower case, one number";
        result = result && false;
        //strength1.style.color="red";
        //strength2.style.color="orange";
    }
    //Validation for Phone Number
    if(regexp_number.test(number.value))
        {
            result =result && true;
        }
        else
        {
            error_number.innerHTML = "Invalid phone number";
            error_number.style.color = "red";
            result =result && false;
        }
}