$(document).ready(function(){
    console.log('form is running!');
    $('.model').modal();
})

const clear=()=>{
}

const back=()=>{
    window.location.replace('../html/journal.html');
};

let destination = null;
let comfort = null;
let budget = null;
let description = null;
let link = null;
let rate = null;

//submit trigger 
const submit=()=>{
    let destination = $("#destination").val();
    let comfort = $("#comfort").val();
    let budget = $("#budget").val();
    let description = $("#description").val();
    let link = $("#link").val();
    let rate = $("#rate").val();

    if(destination == null) {
        alert("Sorry invalid entry, destination is mandatory, e.g. (place)");
        return false;
    }
    if(budget == null) {
        alert("Sorry invalid entry, budget is mandatory, e.g. (50 aud)");
        return false;
    }
    if(description == null || description.length < 20 ) {
        alert("Sorry invalid entry, description is mandatory. Atleast 20 characters.");
        return false;
    }
    if(rate == null) {
        alert("Sorry invalid entry, rate is mandatory e.g 1- 10");
        return false;
    }

    let journal = {
        destination: destination,
        comfort: comfort,
        budget: budget,
        description: description,
        link: link,
        rate: rate
    };
    
    //post and verify whether posted
    $.ajax({
        url: '/journal/api/journal',
        contentType: 'application/json',
        data: JSON.stringify(journal),
        type: 'POST',
        success: function(result){
            if(result.result == 200){
                alert('Congratulation! Your journal has been created!');
                window.location.replace('../html/journal.html');
            }
            else if (result.result == 404) {
                alert('Failed to publish!');
            }
        }
    });
};

$(document).ready(function(){
    console.log('Home page running');
    $(".dropdown-trigger").dropdown(); //dropdown 

});

const sideNavigation = document.querySelector('.sidenav');
M.Sidenav.init(sideNavigation, {});