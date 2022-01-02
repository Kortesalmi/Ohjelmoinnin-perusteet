// Muuttujat
// Merkkijono eli string
let etunimi = "John's quote: \"Ces't la vie\"";
// numeerinen
let age = 20;
// päivämäärä eli date
let today = new Date();
// totuusarvo eli boolean
let kaikkiOk = true;
// taulukko eli array
let arvosanat = new Array();

// Alusta arvosanat-taulukkoon 10 alkiota, joiden kaikkien arvo on 0
for (let i = 0; i < 10; i++) {
    arvosanat.push(0);
}
// Vakiot
const ARVAUSTEN_LKM = 10;

if (kaikkiOk) {
    var sukunimi = 'Doe';
} else {
      
}

document.write(etunimi);
document.write(sukunimi);
// Tulosta sukunimen ensimmäinen kirjain
document.write(sukunimi[0]);
// Tulosta sukunimen viimeinen kirjain
document.write(sukunimi[sukunimi.length-1]);
// Tulosta päivämäärä
document.write('<p>' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear() + '</p>');

// Lisätään tapahtumakäsittelijä
document.getElementById('tallennaPainike').onclick = function() {
    // Haetaan tiedot syötekentistä
    let opiskelija = document.getElementById('opiskelija').value;
    let arvosana = document.getElementById('arvosana').value;
    // Tallennetaan arrayhyn
    arvosanat[opiskelija] = arvosana;
}

// Lisätään tapahtumakäsittelijä tulostus-painikkeelle
document.getElementById('tulostaPainike').onclick = function() {
    let html = '<tr><th>Opiskelija</th><th>Arvosana</th></tr>';
    // Käydään läpi taulukko
    for (let i = 0; i < arvosanat.length; i++) {
        // Lisätään tableen käsiteltävänä oleva opiskelija ja arvosana
        html += '<tr><td>' + i + '</td><td>';
        // Tarkistetaan onko arvosana 0
        if (arvosanat[i] == 0) {
            // -> jos on tulostetaan hylätty
            html += 'Hylätty';
        } else {
            // -> jos ei tulostetaan arvosana
            html += arvosanat[i];
        }
        

        
    }
    // Lisätään tablelle
    document.getElementById('arvosanat').innerHTML = html
}

