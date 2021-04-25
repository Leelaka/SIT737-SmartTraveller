$(document).ready(function(){
    console.log('Home page running');
    $(".dropdown-trigger").dropdown(); //dropdown 

});

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwcGNyZWF0ZXIiLCJhIjoiY2tlMTMxczc4M2ptNjMxbGpwNXM0czdvbCJ9.6_Jl8aNY1wzCylqVJA7Tmw';

//side bar nav
const sideNavigation = document.querySelector('.sidenav');
M.Sidenav.init(sideNavigation, {});

//get current location

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});
//if location received position there
function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude]);
}
//else to melbourne
function errorLocation(){
    setupMap([37.8136, 144.9631])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: "map", // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center, // starting position
        zoom: 15 // starting zoom
        });

// Add zoom and rotation controls to the map.
const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
});
const direction = new MapboxDirections({
    accessToken: mapboxgl.accessToken
});


map.addControl(directions, 'top-left');

}


