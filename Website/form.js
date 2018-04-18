 /* Timothy Bergin 
   Form Submission Web Page 
   in JavaScript
 
/*COMPANY INFORMATION IN HEADER*/



function validateForm() {
    var x = document.forms["myForm"]["Name"].value.required;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
} 

function validateForm() {
    var y = document.forms["myForm"]["Email"].value.required;
    if (y == "") {
        alert("Email must be filled out");
        return false;
    }
}  

function validateForm() {
    var z = document.forms["myForm"]["Phonenumber"].value. required;
    if (z == "") {
        alert("Phone number must be filled out");
        return false;
    }
}  

