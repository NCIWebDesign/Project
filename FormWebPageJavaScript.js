
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