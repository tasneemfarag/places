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
      $(".section").css("background-color","#C0C0C0;");
    });
   
  });

  $("#card").click(function(){
    var cardBack = $("#card .face.back");    
    var cardFront = $("#card .face.front");
    
    cardBack.addClass("front");
    cardBack.removeClass("back");

    cardFront.addClass("back");
    cardFront.removeClass("front");
  });

});

