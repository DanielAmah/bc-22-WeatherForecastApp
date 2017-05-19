window.onload = function() {
    $(function() {
        if (window.location.protocol === "https:")
            window.location.protocol = "http";
    });
}



$(document).ready(function() {

    $('#submitWeather').click(function() {
        let city = $('#city').val();
        if (city != '') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&units=metric&cnt=7" + "&APPID=98b64b8a1094b7b9e011578dc1ca69b8",
                type: "GET",
                dataType: "jsonp",
                success: function(data) {
                    let widget = show(data);
                    $("#showWeather").html(widget);
                    $('#city').val('');

                }


            });

        } else {
            $('#error').html('Field can not be empty');
        }
    });

});

function show(data) {
	 var timestamp = data.list[0].dt;
	var pubDate = new Date(timestamp * 1000); //expects milliseconds

var weekday=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");

var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

var formattedDate1 = weekday[pubDate.getDay()] + ' ' 

                    + monthname[pubDate.getMonth()] + ' ' 

                    + pubDate.getDate() + ', ' + pubDate.getFullYear()
					
					
					var iconCode2 = data.list[0].weather[0].icon;
		var iconUrl2 = "http://openweathermap.org/img/w/" + iconCode2 + ".png";
		
	
	$("#date").html(formattedDate1);
    $("#cityName").html(data.city.name);
    $("#temp").html(data.list[0].temp.day + "°C");
	
	$("#icon").html("<img src='" + iconUrl2  + "'>");
    $("#weather").html(data.list[0].weather[0].main);
    $("#pressure").html(data.list[0].pressure);
   

    $("#showWeather").empty();

    $.each(data.list, function(i, item) {
		
		var iconCode = item.weather[0].icon;
		var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
		 
		 var timestamp = item.dt;

var pubDate = new Date(timestamp * 1000); //expects milliseconds

var weekday=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");

var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

var formattedDate = weekday[pubDate.getDay()] + ' ' 

                    + monthname[pubDate.getMonth()] + ' ' 

                    + pubDate.getDate() + ', ' + pubDate.getFullYear()
		 
	
        $("#showWeather").append(
            "<center><div class='col-md-1' style=' margin: 2px; background-color: wheat;'>" +
            "<h5> " + formattedDate + " </h5><h5> " + item.temp.day + " °C </h5>" + "<img src='" + iconUrl  + "'>" +
            "<h5> " + item.weather[0].main + " </h5><h5> " + item.pressure + " </h5></div></center>"

        )


    });
}