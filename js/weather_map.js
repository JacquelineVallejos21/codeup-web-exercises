"use strict";

$(document).ready(function() {

    $.get("https://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_API_KEY,
        q: "San Antonio, US",
        units: "imperial"
    }).done(function (data) {
        console.log(data)

        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_API_KEY,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial"
        }).done(function (data) {
            console.log('5 day forecast', data);


            function FiveDayForecast() {
                $.get("https://api.openweathermap.org/data/2.5/onecall", {
                    lat: 29.423017,
                    lon: -98.48527,
                    APPID: OPEN_WEATHER_API_KEY,
                }).done(function (data) {
                    console.log(data);
                    console.log(data.daily);
                    console.log(data.daily[0]);
                    data.daily.forEach(function (day, index) {
                        if (index <= 4) {
                            var grabDate = new Date(day.dt * 1000);
                            console.log(grabDate);
                            var html = "<div class='card-body'>";
                            html += "<div class='card-header text-center'>" + " " + (grabDate.getMonth() + 1) + "/" + grabDate.getDate() + "/" + grabDate.getFullYear() + "</div>";
                            html += "<li class='list-group-item'>" + "High/Lows: " + day.temp.max + " &#8457;" + "/" + day.temp.min + " &#8457;" + "</li>";
                            html += "<li class='list-group-item'>" + "Description: " + day.weather[0].description + "</li>";
                            html += "<li class='list-group-item'>" + "Humidity: " + day.humidity + "</li>";
                            html += "<li class='list-group-item'>" + "Wind: " + day.wind_speed + "</li>";
                            html += "<li class='list-group-item'>" + "Pressure: " + day.pressure + "</li>";
                            html += "</div>";
                            $('#weather-info').append(html);
                        }
                    });

                });
            };
            FiveDayForecast();


            function markerDaily() {
                var lngLat = marker.getLngLat();
                var longitude = lngLat.lng;
                var latitude = lngLat.lat;
                weatherOptions.lat = latitude
                weatherOptions.lon = longitude
                reverseGeocode({lng: longitude, lat: latitude}, mapboxAPIkey).then(function (result) {
                    $('#current-city').empty()
                    $('#current-city').append("Current Location " + result)
                });
                marketDaily();

            }

        });
    });
    mapboxgl.accessToken =  mapboxAPIkey;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 14,
        center: ([-98.48527, 29.423017]),
    });
    console.log();
    // var marker = new mapboxgl.Marker()
    // .addTo(map);


    var searchBar = document.querySelector("input");

    $("#button").click(function (e) {
        var searchBar = "Chicago"
        geocode(searchBar, mapboxAPIkey).then(function (result) {
            // lon: -98.48527,
            // lat: 29.423017,
            console.log(result);
            map.setCenter(result);
            map.setZoom(14);

            var marker = new mapboxgl.Marker()
                .setLngLat(Chicago)
                .addTo(map);

            var FranklinBarbecue = new mapboxgl.Popup()
                .setHTML('Chicago');
            marker.setPopup(Chicago);

        });
    });
});