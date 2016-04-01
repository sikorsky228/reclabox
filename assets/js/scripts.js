$(".search-button").click(function(event){
    event.preventDefault();
    $(".search-panel").toggle();
});


/*up to top button*/

$(window).scroll(function(event){  
   event.preventDefault();
   if ( $(window).scrollTop() >= 150 ){                   
      $('.scroll-top').show();
   } else{
      $('.scroll-top').hide();
   }
});


 $('#up').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0},500);
    return false;
  });




/*Google map*/
function contactMap() {
      var latlng = new google.maps.LatLng(52.5159693, 13.3939313);
      var settings = {
        zoom: 17,
        scrollwheel: false,
        center: latlng,
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP};
      var map = new google.maps.Map(document.getElementById("google-map"), settings);
      var contentString = '<div id="content">';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var trainImage = new google.maps.MarkerImage('img/point.png',
        new google.maps.Size(46,60),
        new google.maps.Point(0,0),
        new google.maps.Point(30,55)
      );
      var trainPos = new google.maps.LatLng(52.5159693, 13.3939313);
      var trainMarker = new google.maps.Marker({
        position: trainPos,
        map: map,
        icon: trainImage,
        zIndex: 2
      });
}
$(function() {
    contactMap();
});  