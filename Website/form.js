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

<script>
  function initMap() {
    var Waterford = {lat: 52.259311, lng: -7.110343};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: Waterford
    });
    var marker = new google.maps.Marker({
      position: Waterford,
      map: map
    });
  }
</script>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD2ioL-76_dxSNYGxV-FExa_lAiFlLCpp0&callback=initMap">
</script>
