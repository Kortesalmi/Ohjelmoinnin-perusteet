/* Tapahtumakäsittelijä painikkeelle
document.getElementById('nameButton').onclick = function() {
   // Luetaan käyttäjän syöttämä nimi
    let name = document.getElementById('nameInput').value;
    // Luodaan laskurimuuttuja
    let counter = 1;
    // Toista 5 kertaa 
    while ( counter <= 5) {
        // Tulostaa nimi sivulle
        document.getElementById('printElement').innerHTML += '<p>' + name + '</p>';
        counter++;
    }    
}
*/

// Tapahtumakäsittelijä painikkeelle
document.getElementById('nameButton').onclick = function() {
    // Luetaan käyttäjän syöttämä nimi
     let name = document.getElementById('nameInput').value;
     // Luodaan laskurimuuttuja
     let counter = 6;
     // Toista 5 kertaa 
     do {
         // Tulostaa nimi sivulle

         counter++;
     } while ( counter <= 5);
 }

// Tulosta numerot 0-10
// Luo silmukka for
for (let i = 0; i <= 10; i++) {
    // Tulostaa numerot sivulle
     document.getElementById('printElement').innerHTML += '<p>' + i + '</p>';
}

// Tulosta numerot 10-0
for (let i = 10; i >= 0; i--) {
    // Tulostaa numerot sivulle
    document.getElementById('printElement').innerHTML += '<p>' + i + '</p>';
}