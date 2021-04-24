$(document).ready(function(){
    console.log('Home page running');
    $(".dropdown-trigger").dropdown();

});

const sideNavigation = document.querySelector('.sidenav');
M.Sidenav.init(sideNavigation, {});

const slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicator: false,
    height: 500,
    transition: 500,
    interval: 6000
});