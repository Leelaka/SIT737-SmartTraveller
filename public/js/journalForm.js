$(document).ready(function(){
    console.log('form is running!');

})

const clear=()=>{
    $('#place').val('');
    $('#description').val(''); 
    //console.log('clicked');
}

const back=()=>{
    window.location.replace('../html/journal.html');
};

let logo = null;
let place = null;
let description = null;

//submit trigger 
const submit=()=>{
    let logo = $('#logo').val();
    let place = $('#place').val();
    let description = $('#description').val();

    if(logo == null) {
        alert("Sorry invalid entry, logo is mandatory, e.g. (place)");
        return false;
    }
    if(place == null || place.length < 2 ) {
        alert("Sorry invalid entry, place is mandatory.");
        return false;
    }
    if(description == null || description.length < 20 ) {
        alert("Sorry invalid entry, description is mandatory. Atleast 20 characters.");
        return false;
    }

    let journal = {
        logo: logo,
        place: place,
        description: description
    };
    
    //post and verify whether posted
    $.ajax({
        url: '/journalForm/api/journal',
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