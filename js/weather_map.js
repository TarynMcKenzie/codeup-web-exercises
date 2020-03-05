'use strict';

(function (){

    function percentageCreator(value){
        return Math.round(value * 100);
    }


    //29.4241° N, 98.4936° W (San Antonio)
    function getWeatherData(){

        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4241, -98.4936").done(function (data) {
            console.log(data);
            // console.log(new Date(data.currently.time * 1000));

            var html = '';
            var todayImg = '';
            var tomorrowImg = '';
            var dayAfterImg = '';

        // ------------------------ TODAY'S WEATHER ICON ------------------------
            switch (data.daily.data[0].icon){

                    case 'rain':
                        todayImg += '<img class="card-img-top" src="' + weatherIcons[0].image + '">';
                        break;
                    case 'clear-day':
                        todayImg += '<img class="card-img-top" src="' + weatherIcons[1].image + '">';
                        break;
                    case 'clear-night':
                        todayImg += '<img class="card-img-top" src="' + weatherIcons[2].image + '">';
                        break;
                    case 'snow':
                        todayImg += '<img class="card-img-top" src="' + weatherIcons[3].image + '">';
                        break;
                    case 'sleet':
                        todayImg += '<img class="card-img-top" src="' + weatherIcons[4].image + '">';
                        break;
                    case 'wind':
                        todayImg += '<img class="card-img-top" src="' + weatherIcons[5].image + '">';
                        break;
                    case 'fog':
                        todayImg += '<img class="card-img-top" src="' + weatherIcons[6].image + '">';
                        break;
                    case 'cloudy':
                        todayImg += '<img class="card-img-top" src="' + weatherIcons[7].image + '">';
                        break;
                    case 'partly-cloudy-day':
                        todayImg += '<img class="card-img-top" src="' + weatherIcons[8].image + '">';
                        break;
                    case 'partly-cloudy-night':
                        todayImg += '<img class="card-img-top" src="' + weatherIcons[9].image + '">';
                        break;
                    default:
                        console.log("There is no weather icon to display");

            }

            // ------------------------ TOMORROW'S WEATHER ICON ------------------------
            switch (data.daily.data[1].icon){

                case 'rain':
                    tomorrowImg += '<img class="card-img-top" src="' + weatherIcons[0].image + '">';
                    break;
                case 'clear-day':
                    tomorrowImg += '<img class="card-img-top" src="' + weatherIcons[1].image + '">';
                    break;
                case 'clear-night':
                    tomorrowImg += '<img class="card-img-top" src="' + weatherIcons[2].image + '">';
                    break;
                case 'snow':
                    tomorrowImg += '<img class="card-img-top" src="' + weatherIcons[3].image + '">';
                    break;
                case 'sleet':
                    tomorrowImg += '<img class="card-img-top" src="' + weatherIcons[4].image + '">';
                    break;
                case 'wind':
                    tomorrowImg += '<img class="card-img-top" src="' + weatherIcons[5].image + '">';
                    break;
                case 'fog':
                    tomorrowImg += '<img class="card-img-top" src="' + weatherIcons[6].image + '">';
                    break;
                case 'cloudy':
                    tomorrowImg += '<img class="card-img-top" src="' + weatherIcons[7].image + '">';
                    break;
                case 'partly-cloudy-day':
                    tomorrowImg += '<img class="card-img-top" src="' + weatherIcons[8].image + '">';
                    break;
                case 'partly-cloudy-night':
                    tomorrowImg += '<img class="card-img-top" src="' + weatherIcons[9].image + '">';
                    break;
                default:
                    console.log("There is no weather icon to display");

            }

            // ------------------------ THE DAY AFTER'S WEATHER ICON ------------------------
            switch (data.daily.data[2].icon){  // if the icon string pulled from the

                case 'rain':
                    dayAfterImg += '<img class="card-img-top" src="' + weatherIcons[0].image + '">';
                    break;
                case 'clear-day':
                    dayAfterImg += '<img class="card-img-top" src="' + weatherIcons[1].image + '">';
                    break;
                case 'clear-night':
                    dayAfterImg += '<img class="card-img-top" src="' + weatherIcons[2].image + '">';
                    break;
                case 'snow':
                    dayAfterImg += '<img class="card-img-top" src="' + weatherIcons[3].image + '">';
                    break;
                case 'sleet':
                    dayAfterImg += '<img class="card-img-top" src="' + weatherIcons[4].image + '">';
                    break;
                case 'wind':
                    dayAfterImg += '<img class="card-img-top" src="' + weatherIcons[5].image + '">';
                    break;
                case 'fog':
                    dayAfterImg += '<img class="card-img-top" src="' + weatherIcons[6].image + '">';
                    break;
                case 'cloudy':
                    dayAfterImg += '<img class="card-img-top" src="' + weatherIcons[7].image + '">';
                    break;
                case 'partly-cloudy-day':
                    dayAfterImg += '<img class="card-img-top" src="' + weatherIcons[8].image + '">';
                    break;
                case 'partly-cloudy-night':
                    dayAfterImg += '<img class="card-img-top" src="' + weatherIcons[9].image + '">';
                    break;
                default:
                    console.log("There is no weather icon to display");

            }


            // ------------------------ TODAY'S WEATHER CARD ------------------------

            html += '<div class="card">' + todayImg; //get the current weather icon
            html += '<div class="card-body">'+ Math.round(data.daily.data[0].temperatureLow) + ' / '+ Math.round(data.daily.data[0].temperatureHigh )+ '</div>'; // Get daily temperature high and low
            html += '<div class="card-body">'+ data.daily.data[0].summary + '</div>'; // Get daily temperature summary
            html += '<div class="card-body">'+ percentageCreator(data.daily.data[0].humidity)+ '% </div></div>'; // Get daily temperature humidity (decimal) and multiply by 100 to get percentage

            // ------------------------ TOMORROW'S WEATHER CARD ------------------------

            html += '<div class="card">' + tomorrowImg; //get the current weather icon
            html += '<div class="card-body">'+ Math.round(data.daily.data[1].temperatureLow) + ' / '+ Math.round(data.daily.data[1].temperatureHigh) + '</div>'; // Get daily temperature high and low
            html += '<div class="card-body">'+ data.daily.data[1].summary + '</div>'; // Get daily temperature summary
            html += '<div class="card-body">'+ percentageCreator(data.daily.data[1].humidity) + '% </div></div>'; // Get daily temperature humidity (decimal) and multiply by 100 to get percentage

            // ------------------------ THE DAY AFTER'S WEATHER CARD ------------------------

            html += '<div class="card">' + dayAfterImg; //get the current weather icon
            html +='<div class="card-body">'+ Math.round(data.daily.data[2].temperatureLow )+ ' / '+ Math.round(data.daily.data[2].temperatureHigh) + '</div>'; // Get daily temperature high and low
            html += '<div class="card-body">'+ data.daily.data[2].summary + '</div>'; // Get daily temperature summary
            html += '<div class="card-body">'+ percentageCreator(data.daily.data[2].humidity) + '% </div></div>'; // Get daily temperature humidity (decimal) and multiply by 100 to get percentage


            // ------------------------ INSERT CARDS TO HTML ------------------------
            $('#weather-card').append(html); //Within the #weather-card div --> add the html data
        })
    }

    getWeatherData();

    var weatherIcons= [
        {type: 'rain', image: './icon/003-rain.png'},
        {type: 'clear-day', image: './icon/007-contrast.png'},
        {type: 'clear-night', image: './icon/006-moon.png'},
        {type: 'snow', image: './icon/004-snowflake.png'},
        {type: 'sleet', image: './icon/004-snowflake.png'},
        {type: 'wind', image: './icon/014-wind.png'},
        {type: 'fog', image: './icon/005-clouds.png'},
        {type: 'cloudy', image: './icon/001-cloudy.png'},
        {type: 'partly-cloudy-day', image: './icon/001-cloudy.png'},
        {type: 'partly-cloudy-night', image: './icon/005-clouds.png'}
    ];


})();