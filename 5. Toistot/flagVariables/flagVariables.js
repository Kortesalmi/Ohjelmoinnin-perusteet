let number1 = 3;
let number2 = 15;

// Luodaan muuttuja, oletetaan alkuun, että kaikki on ok
let inputOk = true;

// Tarkista syötteet
if (number1 < 10) {
    inputOk = false;
}

if (number2 == 15) {
    inputOk = false;
}

// Kaikki tarkastukset tehty -> Suoritetaan laskenta jos kaikki ok
if (inputOk == true) {
    // Laske
}