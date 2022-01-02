/* Oma nimesi tänne */

/* Ajoneuvotehtävä 
******************** */
function tankille() {
    let valinta = document.getElementById('tankki');
    let tankille = document.getElementById('ttankille');
    let valittu = false;

    if (valinta.checked === true) {
        tankille.classList.remove('piilossa')
        valittu = true
    } else {
        tankille.classList.add('piilossa')
        document.getElementById('tankilletulos').innerHTML = '';
        document.getElementById('autovirhe').innerHTML = '';
        valittu = false
    }
}

function toimintasäde() {
    let valinta = document.getElementById('toimsäde');
    let toimintasäde = document.getElementById('tsäde');
    let valittu = false;

    if (valinta.checked === true) {
        toimintasäde.classList.remove('piilossa')
        valittu = true
    } else {
        toimintasäde.classList.add('piilossa')
        document.getElementById('sädetulos').innerHTML = '';
        document.getElementById('autovirhe').innerHTML = '';
        valittu = false
    }
}

function tyhjennä() {

    document.getElementById('autovirhe').innerHTML = '';
    document.getElementById('tankilletulos').innerHTML = '';
    document.getElementById('sädetulos').innerHTML = '';
    
}

const valintapuuttuu = "Valitse ainakin toinen valintaruuduista.";
const arvotpuuttuu = "Kulutus ja jäljellä pitää olla yli nollan.";

function laskeriittävyys() {

    document.getElementById('tankilletulos').innerHTML = '';
    document.getElementById('sädetulos').innerHTML = '';

    let tankki = document.getElementById('tankki');
    let säde = document.getElementById('toimsäde');

    if (tankki.checked === true || säde.checked === true) {
        let jäljellä = Number(document.getElementById('polttoaine').value);
        let kulutus = Number(document.getElementById('kulutus').value);

        let toimintasäde = (jäljellä / kulutus) * 100;
        let tankkaa = ((jäljellä - 2) / kulutus) * 100;
    
        if (jäljellä > 0 && kulutus > 0) {
            if (säde.checked === true) {
                document.getElementById('sädetulos').innerHTML = Math.floor(toimintasäde);
            } else if (tankki.checked === true) {
                document.getElementById('tankilletulos').innerHTML = Math.floor(tankkaa);
            } if (säde.checked === true && tankki.checked === true) {
                document.getElementById('tankilletulos').innerHTML = Math.floor(tankkaa);
                document.getElementById('sädetulos').innerHTML = Math.floor(toimintasäde);
            } 
        } else {
            document.getElementById('autovirhe').innerHTML = arvotpuuttuu;
        }
    } else {
        document.getElementById('autovirhe').innerHTML = valintapuuttuu;
    }
}

/* Sauvatehtävät 
****************** */
let tekstit = [
    "Perinteisen sauvan pituus on ",
    "Vapaan sauvan pituus on ",
    "Sauvakävelysauvan pituus on "
];

let kertoimet = [0.83, 0.9, 0.68]

const sauvavirhe = "Lasketaan vain vähintään 120 cm pitkille.";
const sauvavirhe2 = "Valitse ainakin yksi sauvatyyppi.";

let valittuSauva = 0;
function valintanapit(valinta) {
    // Funktiossa asetetaan valinta-parametrin arvo valittuSauva-muuttujan arvoksi, jotta muualla ohjelmassa tiedetääån, mikä sauvatyyppi on valittu
    valittuSauva = valinta;
    // Ohjelmoi funktioon myös kohdistimen siirtäminen elementtiin pituus1 [ elementti.focus() ].
    document.getElementById('pituus1').focus();

}

/* kirjoita tästä eteenpäin muut tarvittavat funktiot Sauva-tehtäviin */
function tyhjennä1() {
    // Henkilön pituuden vaihtuessa tulostus pitää tyhjentää. Tämä on ohjelmoidaan onfocustapahtumaan. Tyhjennä sekä tulostuspaikka, että virheilmoitus.
    document.getElementById('sauvatulos1').innerHTML = '';
    document.getElementById('sauvavirhe1').innerHTML = '';
}

function tyhjennä2() {
    // Henkilön pituuden vaihtuessa tulostus pitää tyhjentää. Tämä on ohjelmoidaan onfocustapahtumaan. Tyhjennä sekä tulostuspaikka, että virheilmoitus.
    document.getElementById('sauvatulos2').innerHTML = '';
    document.getElementById('sauvavirhe2').innerHTML = '';
}

// Laske-painike (onsubmit-funktio)
function yksivalittu() {
    // Lue henkilön pituus numeerisena
    let pituus = Number(document.getElementById('pituus1').value);
    // Jos pituus on 120 tai alle,
    if (pituus < 120) {
        // niin tulostetaan virheilmoitus (kts. vakiot)
        document.getElementById('sauvavirhe1').innerHTML = sauvavirhe;
        // ja lopetetaan ohjelman suoritus.
        return;
    }
    
    // Sauvan pituus lasketaan ottamalla kerroin kertoimet-taulukosta. Käytä indeksinä muuttujaa valittuSauva. Sauvan pituus saadaan kaavalla: kerroin * pituus.
    let sauvanPituus = kertoimet[valittuSauva] * pituus;
    document.getElementById("sauvatulos1").innerHTML = tekstit[valittuSauva] + Math.round(sauvanPituus);
    // Tulostukseen tarvitaan teksti (ota taulukosta tekstit käyttämällä indeksinä valittuSauva-muuttujaa) ja sen perään laskettu sauvan pituus pyöristettynä matematiikan sääntöjen mukaan (Math.roundfunktio).
}

function montavalittu() {
    // Funktiossa luetaan aluksi tekstilaatikon sisältö numeerisena.
    let pituus = Number(document.getElementById('pituus2').value);
    // Tehdään sen tarkistus
    if (pituus < 120) {
        // niin tulostetaan virheilmoitus (kts. vakiot)
        document.getElementById('sauvavirhe2').innerHTML = sauvavirhe;
        // ja lopetetaan ohjelman suoritus.
        return;
    }

    // Seuraavaksi aletaan käsitellä valintaruutuja. Niistä voi olla valittuna 0 - 3. Luetaan kaikki valintaruudut muuttujaan, josta tulee ns. kokoelma, jota käsitellään taulukon tavoin. Kokoelma on joukko olioita. Käytä valintaruutujen lukemiseen komentoa document.getElementsByName('haluttu_nimi').
    let valintaruudut = document.getElementsByName('valinta2');
    // Käy läpi kokoelma for-toistolla.
    let valittu = false;
    for(let i = 0; i < valintaruudut.length; i++) {
        // Yksittäisen olion checked-arvoa tutkit if (muuttuja[i].checked === true).
        if (valintaruudut[i].checked === true) {
            // Mikäli näin on, niin kertoimen saat käyttöön kertoimet-taulukosta indeksillä, samoin tulostustekstin
            // Laske sauvan pituus ja tee tulostus. Lisää myös rivinvaihto tulostukseen.

            document.getElementById("sauvatulos2").innerHTML += tekstit[i] + Math.round(kertoimet[i] * pituus) + '<br>';
            // For-toistolla muutat em. muuttujan arvoksi true, kun valintaruutu on valittu.
            valittu = true;
        }
    }
    // For-toiston jälkeen tutkit onko valittu-muuttujassa false.
    if (valittu === false) {
        // Mikäli näin on, niin tulostetaan virheilmoitus.
        document.getElementById("sauvavirhe2").innerHTML = sauvavirhe2;
    }
    

}
