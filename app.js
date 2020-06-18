$(document).ready(function () {
    $(".sections").hide();
    $("#myButton").click(function () {
        $(".sections").show();
        $( ".even.section" ).animate({
            marginLeft: 0
          }, 1500 );

          $( ".odd.section" ).animate({
            marginRight: 0
          }, 1500 );
    });
});

