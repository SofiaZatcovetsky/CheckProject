var firstLoc = new google.maps.LatLng(31.689684, 34.578958);//אשקלון
    var secondLoc = new google.maps.LatLng(31.8890183, 34.7399122);//יבנה
    var thirdLoc = new google.maps.LatLng(31.9006858, 34.7909239);//רחובות
    var fourthLoc = new google.maps.LatLng(31.964915, 34.8027831);//ראשון לציון
    var fifthLoc = new google.maps.LatLng(32.3441203, 34.909045);//עמק חפר
    var sixthLoc = new google.maps.LatLng(32.064683, 34.8551989);//קרית אונו
    var seventhLoc = new google.maps.LatLng(32.1811854, 34.870311);//רעננה
    var eighthLoc = new google.maps.LatLng(31.9285088, 34.8654313);//רמלה
        function initialize() {
            var mapOptions = {
        center: sixthLoc,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
var myIcon = "imagesR/icons8-marker-50.png";
            var firstM = new google.maps.Marker({
        position: firstLoc,
    animation: google.maps.Animation.BOUNCE,
    icon: myIcon
});
firstM.setMap(map);
            var secondM = new google.maps.Marker({
        position: secondLoc,
    animation: google.maps.Animation.BOUNCE,
    icon: myIcon
});
secondM.setMap(map);
            var thirdM = new google.maps.Marker({
        position: thirdLoc,
    animation: google.maps.Animation.BOUNCE,
    icon: myIcon
});
thirdM.setMap(map);
            var fourthM = new google.maps.Marker({
        position: fourthLoc,
    animation: google.maps.Animation.BOUNCE,
    icon: myIcon
});
fourthM.setMap(map);
            var fifthM = new google.maps.Marker({
        position: fifthLoc,
    animation: google.maps.Animation.BOUNCE,
    icon: myIcon
});
fifthM.setMap(map);
            var sixthM = new google.maps.Marker({
        position: sixthLoc,
    animation: google.maps.Animation.BOUNCE,
    icon: myIcon
});
sixthM.setMap(map);
            var seventhM = new google.maps.Marker({
        position: seventhLoc,
    animation: google.maps.Animation.BOUNCE,
    icon: myIcon
});
seventhM.setMap(map);
            var eighthM = new google.maps.Marker({
        position: eighthLoc,
    animation: google.maps.Animation.BOUNCE,
    icon: myIcon
});
eighthM.setMap(map);
            var infowindow1 = new google.maps.InfoWindow({
        content: " אשקלון "
});
            var infowindow2 = new google.maps.InfoWindow({
        content: " יבנה "
});
            var infowindow3 = new google.maps.InfoWindow({
        content: " רחובות "
});
            var infowindow4 = new google.maps.InfoWindow({
        content: " ראשון לציון "
});
            var infowindow5 = new google.maps.InfoWindow({
        content: " עמק חפר "
});
            var infowindow6 = new google.maps.InfoWindow({
        content: " קרית אונו "
});
            var infowindow7 = new google.maps.InfoWindow({
        content: " רעננה "
});
            var infowindow8 = new google.maps.InfoWindow({
        content: " רמלה "
});
            google.maps.event.addListener(firstM, 'click', function () {
        infowindow1.open(map, firstM);
    });
            google.maps.event.addListener(secondM, 'click', function () {
        infowindow2.open(map, secondM);
    });
            google.maps.event.addListener(thirdM, 'click', function () {
        infowindow3.open(map, thirdM);
    });
            google.maps.event.addListener(fourthM, 'click', function () {
        infowindow4.open(map, fourthM);
    });
            google.maps.event.addListener(fifthM, 'click', function () {
        infowindow5.open(map, fifthM);
    });
            google.maps.event.addListener(sixthM, 'click', function () {
        infowindow6.open(map, sixthM);
    });
            google.maps.event.addListener(seventhM, 'click', function () {
        infowindow7.open(map, seventhM);
    });
            google.maps.event.addListener(eighthM, 'click', function () {
        infowindow8.open(map, eighthM);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

///////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#fold").fadeOut();
            if ($(window).scrollTop() > 1200) {
                $("#n1").addClass("animate1");
                $("#n2").addClass("animate1");
                $("#n3").addClass("animate2");
                $("#n4").addClass("animate2");
                $("#n5").addClass("animate3");
                $("#n6").addClass("animate3");
                $("#n7").addClass("animate4");
                $("#n8").addClass("animate4");
            }
        }
        else {
            $("#fold").fadeIn();
        }
    });
});