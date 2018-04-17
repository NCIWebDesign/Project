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

