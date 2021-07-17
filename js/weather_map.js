'use strict';
$(document).ready(function() {
    <script>
        "use strict"

        $(document).ready(function() {

        $.get("https://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_API_KEY,
            q: "San Antonio, US",
            units: "imperial"
        }).done(function (data) {
            console.log(data)


        });
    });
    </script>
}