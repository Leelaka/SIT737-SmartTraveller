$(document).ready(function(){
    console.log('page running');
    $(".dropdown-trigger").dropdown(); //dropdown 

});

$(document).ready(function(){
    console.log('Home page running');
    $(".dropdown-trigger").dropdown(); //dropdown 

});

const sideNavigation = document.querySelector('.sidenav');
M.Sidenav.init(sideNavigation, {});