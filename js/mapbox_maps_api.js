"use strict";

// Initialize the Mapbox container (display the Mapbox)
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({ //constructing the mapboxgl object from mapbox
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]

});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


//
// //-----HEB Plus [ -98.277852, 29.597811]-----
//
// //Add marker for favorite places to eat (3)
// var hebMarker = new mapboxgl.Marker()   //create the marker
//     .setLngLat([ -98.277852, 29.597811]) //set the markers location
//     .addTo(map); //add the marker to the map
//
// //create a popup for place
// var hebPlus = new mapboxgl.Popup()
//     .setHTML("<p>HEB Plus</p>")
//     .addTo(map);
//
// hebMarker.setPopup(hebPlus); //tie the marker to the popup
// hebMarker.togglePopup();
//
//
//
// //------Big Aloha's Ali'i Cove [ -98.297809, 29.551270 ]-----
//
// //Add marker for favorite places to eat (3)
// var bAlohaMarker = new mapboxgl.Marker()   //create the marker
//     .setLngLat([ -98.297809, 29.551270 ]) //set the markers location
//     .addTo(map); //add the marker to the map
//
// //create a popup for place
// var bAloha = new mapboxgl.Popup()
//     .setHTML("<p>Big Aloha's Ali'i Cove</p>")
//     .addTo(map);
//
// bAlohaMarker.setPopup(bAloha); //tie the marker to the popup
// bAlohaMarker.togglePopup();
//
//
//
//
//-----Lai Sinh - Vietnamese Cuisine [ -98.306124, 29.519367 ]-----

//Add marker for favorite places to eat (3)
// var laiSinhMarker = new mapboxgl.Marker()   //create the marker
//     .setLngLat([ -98.306124, 29.519367 ]) //set the markers location
//     .addTo(map); //add the marker to the map
//
// //create a popup for place
// var laisinh = new mapboxgl.Popup()
//     .setHTML("<p>Lai Sinh - Vietnamese Cuisine</p>")
//     .addTo(map);
//
// laiSinhMarker.setPopup(laisinh); //tie the marker to the popup
// laiSinhMarker.togglePopup();



//-----Refactor using a forEach loop-----

//create an array of objects (Restaurants)
var favRestaurant = [

    {
        ll: [-98.306124, 29.519367],
        image: '<img class="thumbimg" src="img/laiSinh.jpg">',
        name: "<p>Lai Sinh - Vietnamese Cuisine</p>",
        address: "<p>9160 FM78, Converse, TX 78109</p>"
    },
    {
        ll: [-98.297809, 29.551270],
        image: '<img class="thumbimg" src="img/aloha.jpg">',
        name: "<p>Big Aloha's Ali'i Cove</p>",
        address: "<p>9160 FM78, Converse, TX 78109</p>"
    },
    {
        ll: [ -98.277852, 29.597811],
        image: '<img class="thumbimg" src="img/hebPlus.jpg">',
        name: "<p>HEB Plus</p>",
        address: "<p>9160 FM78, Converse, TX 78109</p>"
    }

];

favRestaurant.forEach(function (restaurant) {
    // console.log(restaurant.ll);
    // console.log(restaurant.name);
    // console.log(restaurant.address);

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    //Add marker for favorite places to eat (3)
    var Marker = new mapboxgl.Marker(el)   //create the marker
        .setLngLat(restaurant.ll) //set the markers location
        .addTo(map); //add the marker to the map

    //create a popup for place
    var markerPopup = new mapboxgl.Popup()
        .setHTML(restaurant.image + restaurant.name + restaurant.address)
        .addTo(map);

    Marker.setPopup(markerPopup); //tie the marker to the popup
    Marker.togglePopup();
});



