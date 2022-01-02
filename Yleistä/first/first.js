// Näytetään käyttäjälle alert-box
alert("Hello you!");

// Siirretään h1-elementin teksti h2-elementille
document.getElementById("toka-otsikko").innerHTML = document.getElementById("eka-otsikko").innerHTML;

// Vaihdetaan h1-elementin teksti ja lisätään siihen input-kentän arvo
document.getElementById("eka-otsikko").innerHTML = "Tervetuloa! " + document.getElementById("etunimi").value;
