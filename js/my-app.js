// Initialize your app
var myApp = new Framework7({
  init: false //Disable App's automatica initialization
});

// Export selectors engine
var $$ = Dom7;



	
	//Now we add our callback for initial page
myApp.onPageInit('index', function (page) {
  //Do something here with home page


askLocation();
functionEmpty();




});











	
myApp.onPageInit('location', function (page) {

alert('on location page');

document.getElementsByName('numPeople')[0].placeholder=localStorage.getItem("position");

//Autocomplete JSON Google
$$('#numPeople').keyup(function(){
$$("#resulty li").remove();
$$.getJSON('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+ this.value +'&types=(cities)&key=AIzaSyAssayN33K28DkBxPB8iWOM0NG2-sCNHEk', function(response){
$$("#resulty li").remove();
for (i = 0; i < 5; i++) 
{ 
	

	
$$( '#resulty' ).append('<li class="item-content"><div class="item-inner"><div class="item-title button" onclick="savePosition(\''+ response.predictions[i].place_id  +'\')">' + response.predictions[i].description + '</div></div></li>');
}
});    
    
});

//Get Latitude and Longitude onclick

$$('.item-title').on('click', function (e) {
    alert('clicked');
});

	
});	



 
//And now we initialize app
myApp.init();




var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

	
myApp.onPageInit('register', function (page) {

alert('on register page');
mainView.hideNavbar();

});



var register = localStorage.getItem('register');
if (register) {

if(latitude) {}
else{mainView.loadPage('location.html');}
	
	



	
}
else {

// Load page from about.html file to main View:
mainView.loadPage('register.html');
	
}	










// Callbacks to run specific code for specific pages, for example for About page:

myApp.onPageInit('about', function (page) {

alert('on about page');

	$$('.create-page').on('click', function () {
        createContentPage();
    });
});





function functionEmpty() {
$$(".load_more").removeAttr("disabled", "disabled");
$$(".load_previous").attr("disabled", "disabled");
var track_click = 0;

$$.getJSON('http://www.smilesavers.net.au/jsonp.php?callback=?', function(response){

// Store
localStorage.setItem("total_pages", response.length);
$$("#loader-container").hide();
for (i = 0; i < 5; i++) {        
$$( '#result' ).append('<li><a href="#" class="item-link item-content"><div class="item-media"><img src="http://graph.facebook.com/'+response[i][2]+'/picture?width=120&height=120" /></div><div class="item-inner">'+ '<div class="item-title-row"><div class="item-title">Yellow Submarine</div><div class="item-after">$15</div></div><div class="item-subtitle">Beatles</div><div class="item-text">Lorem ipsum dolor sit amet...</div></div></a></li>');

}
track_click++;
$$(".load_more").show();
$$(".load_previous").show();

});


$$(".load_previous").click(function (e) {

$$(".load_more").removeAttr("disabled", "disabled");

track_click--;

$$.getJSON('http://www.smilesavers.net.au/jsonp.php?callback=?', function(response){
$$("#result li").remove();


var start = track_click * 5;
var finish = start + 5;

for (i = start; i < finish; i++) {        
$$( '#result' ).append('<li><a href="#" class="item-link item-content"><div class="item-media"><img src="http://graph.facebook.com/'+response[i][2]+'/picture?width=120&height=120" /></div><div class="item-inner">'+ '<div class="item-title-row"><div class="item-title">Yellow Submarine</div><div class="item-after">$15</div></div><div class="item-subtitle">Beatles</div><div class="item-text">Lorem ipsum dolor sit amet...</div></div></a></li>');

}





});




	
	
});

$$(".load_more").click(function (e) {

var number_pages = localStorage.getItem("total_pages");
var stop = Math.ceil(number_pages / 5);

if (track_click >= (stop-1)) {
$$(".load_more").attr("disabled", "disabled");
}



$$.getJSON('http://www.smilesavers.net.au/jsonp.php?callback=?', function(response){
$$("#result li").remove();


var start = track_click * 5;
var finish = start + 5;

for (i = start; i < finish; i++) {        
$$( '#result' ).append('<li><a href="#" class="item-link item-content"><div class="item-media"><img src="http://graph.facebook.com/'+response[i][2]+'/picture?width=120&height=120" /></div><div class="item-inner">'+ '<div class="item-title-row"><div class="item-title">Yellow Submarine</div><div class="item-after">$15</div></div><div class="item-subtitle">Beatles</div><div class="item-text">Lorem ipsum dolor sit amet...</div></div></a></li>');

}

$$(".load_previous").removeAttr("disabled", "disabled");

track_click++;


});	
	
});




}


// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}


function askLocation() {
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          +                                   position.timestamp          + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }

function savePosition(place_id) {


$$.getJSON('https://maps.googleapis.com/maps/api/place/details/json?placeid='+ place_id +'&key=AIzaSyAssayN33K28DkBxPB8iWOM0NG2-sCNHEk', function(response){

localStorage.setItem("latitude", response.result.geometry.location.lat);
localStorage.setItem("longitude", response.result.geometry.location.lng);
localStorage.setItem("position", response.result.formatted_address);

alert (response.result.geometry.location.lng);

});    	
alert(place_id);	
	
	
}
