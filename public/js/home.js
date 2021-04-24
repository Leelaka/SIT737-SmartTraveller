$(document).ready(function(){
    console.log('Home page running');
    $(".dropdown-trigger").dropdown(); //dropdown 

});
//side bar nav
const sideNavigation = document.querySelector('.sidenav');
M.Sidenav.init(sideNavigation, {});

//home page slider 
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicator: false,
    height: 500,
    transition: 500,
    interval: 6000
});

//autocomplete list of cities in australia
// const autocomp = document.querySelector('.autocomplete');
// M.Autocomplete.init(autocomp, {
//     data: {

//     }
// })

