// Luo arvattava sana
const ARVATTAVA_SANA = 'JavaScript';

// Tulosta arvattavan sanan verran alaviivoja
// Tehdään array sana
let sana = new Array();
for (let i = 0; i < ARVATTAVA_SANA.length; i++) {
    sana.push('_');
}

function tulostaSana() {
    document.getElementById('arvattuSana').innerHTML = '';
    // Tulostetaan sana näytölle
    for (let i = 0; i < sana.length; i++) {
        document.getElementById('arvattuSana').innerHTML += sana[i] + ' ';
    }
}
tulostaSana();
// Käsittele arvaa kirjain -painike
document.getElementById('arvaaKirjainPainike').onclick = function() {
    // Lue input muuttujaan
    let kirjain = document.getElementById('arvattuKirjainInput').value;
    // Käydään sana läpi kirjain kirjaimelta
    for (let i = 0; i < ARVATTAVA_SANA.length; i++) {
    // Tutki löytyykö arvattu kirjain sanasta
    if (ARVATTAVA_SANA[i] == kirjain) {
        // Lisää arvattu kirjain sanaan oikeille paikoille arrayhyn
        sana[i] = kirjain;
    }  
}   
    // Lisää arvattu kirjain arvattuihin kirjaimiin
    document.getElementById('arvatutKirjaimet').innerHTML += kirjain + ' ';
    // Päivitä arvattu sana
    tulostaSana();
    // Tyhjennä input-kenttä
    document.getElementById('arvattuKirjainInput').value = '';
}