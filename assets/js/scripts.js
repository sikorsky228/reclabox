$("body").click(function(){
    $(".search-panel").toogle;
});

/*Google map*/
function contactMap() {
      var latlng = new google.maps.LatLng(55.7527938, 37.6470594);
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
      var trainPos = new google.maps.LatLng(59.936289, 30.320837);
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