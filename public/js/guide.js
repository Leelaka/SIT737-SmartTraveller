$(document).ready(function(){
    console.log('Home page running');
    $(".dropdown-trigger").dropdown(); //dropdown 

});

//side bar nav
const sideNavigation = document.querySelector('.sidenav');
M.Sidenav.init(sideNavigation, {})

const search=()=>{
    let response = $('#search').value();
    
}