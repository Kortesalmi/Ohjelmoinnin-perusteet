// Luetaan käyttäjän syöte

// Haetaan elementti muuttujaan

let numberInput = document.getElementById('numberInput');

// Tehdään tapahtumakäsittelijä input-kentän change-eventille

numberInput.onchange = function() {

    // Check if entered number is 0

    switch (Number(numberInput.value)) {
        case 0:
        // If yes -> print out "You entered a zero".
        document.write("You entered a zero");
            break;
         default :

        // If no -> print out "You entered something else".

        document.write("You entered something else");
    }
}