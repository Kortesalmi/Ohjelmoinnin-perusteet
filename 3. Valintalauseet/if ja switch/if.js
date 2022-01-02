// Luetaan käyttäjän syöte
// Haetaan elementti muuttujaan
let numberInput = document.getElementById('numberInput');
// Tehdään tapahtumakäsittelijä input-kentän change-eventille
numberInput.onchange = function() {
    // Check if entered number is 0
    if (numberInput.value == 0) {
        // If yes -> print out "You entered a zero".
        document.write('You entered a zero');
    }    else {
        // If no -> print out "You entered something else".
        document.write('You entered something else');
    }  
}

// x pitää olla väliltä 1-10
if ( x <= 10 && x >= 1)
// x pitää olla välin 1-10 ulkopuolella
if ( x < 1 || x > 10)
// x pitää olla väliltä 1-10 ja y pitää olla välin 1-10 ulkopuolella
if (( x <= 10 && x >= 1) && ( y < 1 || y > 10))