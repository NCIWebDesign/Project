/* Timothy Bergin 
   Form Submission Web Page 
   in JavaScript
 
/*COMPANY INFORMATION IN HEADER*/



function validateForm() {
    var x = document.forms["myForm"]["fname"].value.required;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
} 

function validateForm() {
    var y = document.forms["myForm"]["femail"].value.required;
    if (y == "") {
        alert("Email must be filled out");
        return false;
    }
}  

function validateForm() {
    var z = document.forms["myForm"]["fphonenumber"].value. required;
    if (z == "") {
        alert("Phone Number must be filled out");
        return false;
    }
}  

function c_function() { 
var a ; if (confirm("Press a button!") 
== true) { a = "You pressed OK!"; } 
else { a = "You pressed Cancel!"; } 
document.getElementById("demo").innerHTML= x; } 

function initMap() {
        var Waterford, Ireland = {lat: 52° 05' 37" N, lang: -7° 59' 08" W};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          right: =Waterford
        });
        var marker = new google.maps.Marker({
          position: Waterford,
          map: map
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    </script>