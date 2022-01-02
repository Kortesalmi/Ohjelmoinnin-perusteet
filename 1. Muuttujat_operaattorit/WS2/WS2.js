// Tehtävä 1.
let age = 5;
document.getElementById("age").innerHTML = age;

// Tehtävä 2.
let x = 5;
let y = 7;
document.getElementById("dogsAge").innerHTML = x * y;

// Tehtävä 3.
let firstname = document.getElementById("firstname-input").value;
let lastname = document.getElementById("lastname-input").value;
document.getElementById("fullname-input").value = firstname + " " + lastname;

// Tehtävä 4.
var counter = 0;
onEvent(document.getElementById("btnCounter"), "click", function( ) {
    document.getElementById("counter").value = counter + 1;
    setProperty(document.getElementById("counter"), "text", counter);
});