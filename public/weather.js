$(document).ready(function() {

    $('#submitWeather').click(function() {
        let city = $('#city').val();
        if (city != '') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/forecast/?q=" + city + "&units=metric" + "&APPID=98b64b8a1094b7b9e011578dc1ca69b8",
                type: "GET",
                dataType: "jsonp",
                success: function(data) {
                    let widget = show(data);
                    $("#showWeather").html(widget);
                    $('#city').val('');
                    // for (var i = 0; i <= data.list.length; i++) {

                    //     console.log(data.list[i]);

                    // }
                }


            });

        } else {
            $('#error').html('Field can not be empty');
        }
    });

});

function show(data) {

    $('#showWeather').empty();
    $.each(data.list, function(i, item) {
        $("#showWeather").append(
            "<div class='col-md-2' style='background-color: #999; margin: 2px;'><h5>" + item.main.temp + "</h5><h5>" + item.weather[0].main + "</h5><h5>" + item.weather[0].description + "</h5></div>"
        )
    });
}