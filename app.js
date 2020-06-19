$(document).ready(function () {
  $(".sections").hide();
  $("#myButton").click(function () {
    $(".sections").show();
    $("#myButton").hide();
    $('html, body').animate({
      scrollTop: $(".sections").offset().top
    }, 1000)
    $(".even.section").animate({
      marginLeft: 0
    }, 1500);
    $(".odd.section").animate({
      marginRight: 0
    }, 1500, function () {
      $(".section").css("background-color", "#d0d0d0");
    });

  });

  $(".card").click(function () {
    var cardBack = $(this).find(".face.back");
    var cardFront = $(this).find(".face.front");

    cardBack.addClass("front");
    cardBack.removeClass("back");

    cardFront.addClass("back");
    cardFront.removeClass("front");

  });


  var baliCityId = 550671;
  weatherBalloon(baliCityId, setWeather, "#bali");

  var cairoCityId = 360630;
  weatherBalloon(cairoCityId, setWeather, "#cairo");

  var londonCityId = 1006984;
  weatherBalloon(londonCityId, setWeather, "#london");

  var caicosCityId = 3576916;
  weatherBalloon(caicosCityId, setWeather, "#caicos");

  function weatherBalloon(cityId, setWeather, idValue) {
    var appId = '1e2c5c69bcb9a5024c88c8d0bb7d6e8a'; // Check README to create your own key
    fetch('https://api.openweathermap.org/data/2.5/weather?units=imperial&id=' + cityId + '&appid=' + appId)
      .then(function (resp) { return resp.json() }) // Convert data to json
      .then(function (data) {
        setWeather(data.main.temp, idValue);
      })
      .catch(function () {
        // catch any errors
      });
  }

  function setWeather(temperature, idValue) {
    $(idValue).html(temperature);
  }
});
