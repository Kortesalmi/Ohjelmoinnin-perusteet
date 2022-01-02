/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */

/*
Lue etu- ja sukunimesi. Tulosta etunimesi for-toistolla 5 kertaa elementtiin first_name. Tulosta
sukunimesi while-toistolla 5 kertaa elementtiin last_name. Tulosta kukin nimesi esiintyminen eri
riville, käytä <br>.
*/
function l01() {    
    let firstname = document.getElementById('name1').value;
    let lastname = document.getElementById('name2').value;
    let counter = 1;

    for (let i = 0; i < 5; i++) {
    document.getElementById('first_name').innerHTML += firstname + '<br>';
    }

    while (counter <= 5) {
        document.getElementById('last_name').innerHTML += lastname + '<br>';
        counter++;
    }

}

/*
Tulosta luvut viiden välein luvusta 5 lukuun 50 käyttäen for-toistoa. Katso esimerkkitulostus.
Tulosta luvut kuuden välein luvusta 6 lukuun 60 käyttäen while-toistoa.
*/
function l02() {   
    document.getElementById('five').innerHTML = '';
    document.getElementById('six').innerHTML = '';
    
    for (let i = 5; i <= 50; i = i + 5) {
        document.getElementById('five').innerHTML += i + ' ';
    }

    let j = 6;
    while (j <= 60) {
        document.getElementById('six').innerHTML += j + ' ';
        j += 6;    
    }
}

/*
Tulosta tähtirakennelma käyttäjän antaman luvun mukaan. Ensimmäisellä rivillä on
yksi tähti, toisella kaksi, kolmannella kolme, jne. kunnes viimeisellä rivillä tähtien
määrä on sama kuin käyttäjän antama luku.
Tee ensin for-toistolla, sitten while-toistolla
*/
function l03() {
    let amount = document.getElementById('amount').value;
    let counter = 1;

    for (let i = 1; i <= amount; i++) {
        for (let j = 1; j <= i; j++) {
            document.getElementById('stars1').innerHTML += '*';
        }
        document.getElementById('stars1').innerHTML += '<br>';
    }

    let star = '';
    while (counter <= amount) {
        star += '*';
        document.getElementById('stars2').innerHTML += star + '<br>';
        counter++;
    }
}

/*
Tulosta numerot 10, 9, 8, …, -8, -9, -10 elementtiin numbers1.
Tulosta numerot -20, -18, -16, … , 16, 18, 20 elementtiin numbers2.
Tulosta numerot 29, 27, …, 1 elementtiin numbers3
*/
function l04() {
    for (let i = 10; i >= -10; i--) {
        document.getElementById('numbers1').innerHTML += i + ' ';
    }

    for (let i = -20; i <= 20; i = i + 2) {
        document.getElementById('numbers2').innerHTML += i + ' ';
    }

    for (let i = 29; i >= 1; i = i - 2) {
        document.getElementById('numbers3').innerHTML += i + ' ';
    }
}

/*
Tulosta 3:lla jaolliset luvut käyttäjän antamalta lukuväliltä (min, max) elementtiin divisibility3.
Tulostaa 5:llä jaolliset luvut käyttäjän antamalta lukuväliltä elementtiin divisibility5.
Luku on jaollinen toisella numerolla, kun jakojäännös on nolla.
*/
function l05() {
let min = Number(document.getElementById('min').value);
let max = Number(document.getElementById('max').value);

document.getElementById('divisibility3').innerHTML = '';
document.getElementById('divisibility5').innerHTML = '';

for (let i = 0; i <= max; i++) {
    min += 1;
    if (min % 3 == 0 && min <= max) {
        document.getElementById('divisibility3').innerHTML += min + ' ';
    } if (min % 5 == 0 && min <= max) {
        document.getElementById('divisibility5').innerHTML += min + ' ';
    }
}
    
}


// copy and paste here the random number generator function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } 
// and use it in the following functions


/*
Kirjoita ohjelma, joka arpoo 1000 kertaa luvun 0 tai 1. Laske kuinka monta kertaa tuli 1 ja kuinka
monta kertaa 0. Tulosta jakauma. Tarvitset tässä muuttujat, joihin lasket yksi kerrallaan lukujen 0 ja
1 esiintymiset. Määrittele muuttujat ennen for-toistoa ja tulosta sisältö for-toiston jälkeen.
Kopioi myös tähän js-tiedostoon satunnaisluvun arvontafunktio, jota olet käyttänyt edellisissä
tehtävissäkin. 
*/
function l06() {   
    let zeros = 0;
    let ones = 1;

    for (let i = 0; i < 1000; i++) {
    let arvottu_nro = getRndInteger(0, 1);
    if (arvottu_nro == 0) {
        zeros++;
    } else {
        ones++;
    }
}

    document.getElementById('zeros').innerHTML = zeros;
    document.getElementById('ones').innerHTML = ones;
}

/*
Tämä tehtävä simuloi jokerinumeron arvontaa, joka on osa viikkoittaista lottoarvontaa.
Kirjoita koodi, joka arpoo viikkonumeron (1 … 52) ja tulostaa sen. Sen jälkeen kirjoita koodi, joka
arpoo 7 satunnaista numeroa väliltä 0 … 9 ja tulostaa ne sivulle. Tulostettujen lukujen välissä on
välilyönti (" ").
*/
function l07() {
    let week = 1;
    let week_number = getRndInteger(1, 52);
    document.getElementById('joker').innerHTML = '';

    for (i = 0; i <= 7; i++) {
        let random = getRndInteger(0, 9);
    

    document.getElementById('week').innerHTML = week_number;
    document.getElementById('joker').innerHTML += random + ' ';
    }
    
}


// Lue kertoja input-elementistä. Tulosta kertotaulu numerosta 0 numeroon 10.
function l08() {
    let kerroin = Number(document.getElementById('multiplier').value);
    document.getElementById('table').innerHTML = '';

    for (let i = 0; i <= 10; i++) {
        document.getElementById('table').innerHTML += kerroin + ' * ' + i + ' = ' + (kerroin * i) + '<br>';
    }
}

/*
Tee ohjelma (kahta sisäkkäistä for –rakennetta käyttäen), joka tulostaa kaikki kertotaulut 0-10.
Jokaisen kertotaulun jälkeen on puolipiste ja kaksi välilyöntiä (&nbsp; = välilyönti, joka aina tulostuu,
nbsp = non-breakable space). Käytä määriteltyä vakiota. Sisemmän toiston loppumisen jälkeen on
rivinvaihto (<br>). 
*/
function l09() {
    const space = ";&nbsp;&nbsp;";
    document.getElementById('multiplication').innerHTML = '';

    for (let i = 0; i <= 10; i++){
        for (let j = 0; j <= 10; j++) {
            document.getElementById('multiplication').innerHTML += i + ' * ' + j + ' = ' + (i * j) + space;
        }
        document.getElementById('multiplication').innerHTML += '<br>'
    }

}