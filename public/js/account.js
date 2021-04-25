$(document).ready(function(){
    console.log(' page running');
    $(".dropdown-trigger").dropdown(); //dropdown 

});

const sideNavigation = document.querySelector('.sidenav');
M.Sidenav.init(sideNavigation, {});