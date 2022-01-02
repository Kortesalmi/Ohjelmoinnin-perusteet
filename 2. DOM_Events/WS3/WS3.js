// Tehtävä 1.
document.getElementById("browserInfo").innerHTML = "You're using " + navigator.appName + ". The page you're in is " + location;

// Tehtävä 2.
document.getElementById("back").onclick = function() {
    history.back();
}
document.getElementById("next").onclick = function() {
    location.href = "http://www.iltalehti.fi";
}

// Tehtävä 3.
document.getElementById("eka").innerHTML = "Minut löydettiin ID:n perusteella.";
document.getElementById("eka").className = "bordered";
document.getElementsByTagName("h1")[0].innerHTML = "Minä olen h1-elementti.";
document.getElementsByClassName("bordered")[0].classList.add("red-border");

// Tehtävä 4.
let newElement = document.createElement("span");
newElement.className = "red-border";
newElement.innerHTML = "Sain lisättyä tämän elementin tähän.";
document.getElementById("addElementHere").appendChild(newElement);