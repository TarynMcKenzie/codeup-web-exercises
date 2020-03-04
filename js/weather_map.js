'use strict';

(function (){

    //29.4241° N, 98.4936° W (San Antonio)
    function getWeatherData(){
        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4241, -98.4936").done(function (data) {
            console.log(data);
            console.log(new Date(data.currently.time * 1000));

            var html = '';

            html += '<div>'+ Date(data.currently.time * 1000) + '</div>'; //Each increment --> add the specified data
            html += '<div>'+ data.currently.temperature + '</div>'; //Each increment --> add the specified data
            html += '<div>'+ data.currently.summary + '</div>'; //Each increment --> add the specified data
            html += '<div>'+ (data.currently.humidity * 100) + '% </div>'; //Each increment --> add the specified data


            weatherIcons.forEach(function(item){

                if (data.summary === 'rain'){
                    html+= '<img src= "' + item.image + '">'
                }

            });

            $('#weather-card').append(html); //Within the #weather-card div --> add the html data
        })
    }

    getWeatherData();

    var weatherIcons= [
        {type: 'rain', image: 'icon/003-rain.png'},
        {type: 'clear-day', image: '007-contrast.png'},
        {type: 'clear-night', image: 'icon/006-moon.png'},
        {type: 'snow', image: 'icon/004-snowflake.png'},
        {type: 'sleet', image: 'icon/004-snowflake.png'},
        {type: 'wind', image: 'icon/014-wind.png'},
        {type: 'fog', image: 'icon/005-clouds.png'},
        {type: 'cloudy', image: 'icon/001-cloudy.png'},
        {type: 'partly-cloudy-day', image: 'icon/001-cloudy.png'},
        {type: 'partly-cloudy-night', image: 'icon/005-clouds.png'}
    ]



})();