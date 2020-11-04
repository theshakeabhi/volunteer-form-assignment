/*
var age;

function ageValidator(){
    var ageJS = document.volunteerSignup.age.value;
    age = ageJS;
    //console.log(ageJS);
    //console.log(age);
}
*/

function showHide() {
    var sh = document.volunteerSignup.license.value;
    var a = document.getElementById("vehicle");
    if (sh === "yes"){
        a.style.display = "block";
    }
    else if (sh === "no" || sh === ""){
        a.style.display = "none";
    }
}