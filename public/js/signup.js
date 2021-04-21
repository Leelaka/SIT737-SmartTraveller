$(document).ready(function(){
    $('.datepicker').datepicker();
    $('.model').modal();
});

let first_name = null;
let last_name = null;
let birthdate = null;
let country = null; 
let email = null;
let password = null;

//submit trigger 
const submit=()=>{
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    let birthdate = $('#birthdate').val();
    let country = $('#country').val(); 
    let email = $('#email').val();
    let password = $('#password').val(); 

    if(first_name.length < 1 || first_name == null ) {
        alert("Sorry invalid entry, first name is mandatory");
        return false;
    }
    if(last_name.length < 1 || last_name == null ) {
        alert("Sorry invalid entry, last name is mandatory");
        return false;
    }
    if(birthdate == null) {
        alert("Sorry invalid entry, birth date is mandatory");
        return false;
    }
    if(country == null ) {
        alert("Sorry invalid entry, country is mandatory");
        return false;
    }
    if(email == null ) {
        alert("Sorry invalid entry, email is mandatory");
        return false;
    }
    if(password == null || password.length < 6 ) {
        alert("Sorry invalid entry, password is mandatory, must require atleast 6 characters");
        return false;
    }

    let account = {
        first_name: first_name,
        last_name: last_name,
        birthdate: birthdate,
        country: country,
        email: email,
        password: password
    }; //post and verify
    $.ajax({
        url: '/signup/api/account',
        contentType: 'application/json',
        data: JSON.stringify(account),
        type: 'POST',
        success: function(result){
            if(result.result == 200){
                alert('Congratulation! Your account has been created!');
            }
            else if (result.result == 404) {
                alert('Oh no! Sorry, this account cannot be created this e-mail already exits. Please try logging.');
            }
        }
    });
};

//replace window with no refresh
const back=()=>{
    window.location.replace('/index.html');
};


