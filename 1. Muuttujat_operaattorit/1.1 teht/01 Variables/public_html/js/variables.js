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


document.getElementById('t1-button').onclick = function() {
        t01();
}



function t01() {
    // Lue data input-elementistä name 
    let name = document.getElementById('name').value
    // ja tulosta se elementiin welcome.
    document.getElementById('welcome').innerHTML = name;
}

function t02() {    
    // Määrittele muuttujat hoursInDay ja dayInYear sekä sijoita niihin sopivat alkuarvot. 
    let secInMinutes = 60;
    let minInHours = 60;
    let hoursInDays = 24;
    let daysInYear = 365;

    // Muokkaa kaavaa, jotta saat laskettua sekuntien määrän vuodessa.
    let secInYear = secInMinutes * minInHours * hoursInDays * daysInYear;    
    // Tulosta laskutoimituksen tulos elementtiin seconds.
    document.getElementById('seconds').innerHTML = secInYear;
}

function t03() {
    // Lue arvot input-elementeistä first, second ja third.
    let first = Number(document.getElementById('first').value);
    let second = Number(document.getElementById('second').value);
    let third = Number(document.getElementById('third').value);
    // Laske luettujen arvojen keskiarvo 
    let average = ( first + second + third) / 3;
    // ja tulosta tulostelementtiin average. Desimaalien määrä riippuu lähtötiedoista.
    document.getElementById('average').innerHTML = average;
    
}

function t04() {
    // Lue arvot input-elementeistä number1 ja number2.
let number1 = Number(document.getElementById('number1').value);
let number2 = Number(document.getElementById('number2').value);
    // Laske summa
    document.getElementById('d1').innerHTML = number1;
    document.getElementById('d2').innerHTML = number2;
    document.getElementById('d3').innerHTML = number1 + number2;
    // erotus
    document.getElementById('d4').innerHTML = number1;
    document.getElementById('d5').innerHTML = number2;
    document.getElementById('d6').innerHTML = number1 - number2;
    // tulo
    document.getElementById('d7').innerHTML = number1;
    document.getElementById('d8').innerHTML = number2;
    document.getElementById('d9').innerHTML = number1 * number2;
    // osamäärä
    document.getElementById('d10').innerHTML = number1;
    document.getElementById('d11').innerHTML = number2;
    document.getElementById('d12').innerHTML = number1 / number2;
    // jakojäännös käyttäen luettuja arvoja. Tulosta lähtötiedot ja tulokset.
    document.getElementById('d13').innerHTML = number1;
    document.getElementById('d14').innerHTML = number2;
    document.getElementById('d15').innerHTML = number1 % number2;
}

function t05() { 
    // Laske tuotteelle alennettu hinta, kun tiedetään alkuperäinen hinta (input-elementissä price) jaalennusprosentti (input-elementissä percent). Tulosta alennettu hinta (elementtiin newprice).Desimaalien määrä riippuu lähtötiedoista.  
    let price = Number(document.getElementById('price').value);
    let percent = Number(document.getElementById('percent').value);

    document.getElementById('newprice').innerHTML = (price *(1 - (percent / 100)));

}

function t06() {
    // Laske henkilön ikä, kun syntymävuosi (input-elementissä year) tiedetään. Tulosta ikä elementtiin age.Ohjelmointikieliin on ohjelmoitu valmiiksi metodit, joiden avulla tietokoneesta saa kuluvan päivämäärän ja kelloajan. JavaScriptillä saat kuluvan vuoden seuraavasti:
    let today = new Date(); 
    let current_year = today.getFullYear();
    let year = (document.getElementById('year').value);

    document.getElementById('age').innerHTML = (current_year - year);

}

function t07() {
    // Lue istuimien lukumäärä (seats) ja vieraiden määrä (guests). Laske ja tulosta ylijäävien istuimien määrä(remaining). Entä, jos vieraita on enemmän kuin istuimia? Ei tarvitse vielä tässä vaiheessa kirjoittaa iflausetta, kokeile vain syöttötiedoilla.
    let seats = Number(document.getElementById('seats').value);
    let guests = Number(document.getElementById('guests').value);

    document.getElementById('remaining').innerHTML = (seats - guests);

}

function t08() {
    // Lue taimien määrä (plants) ja niiden istutusetäisyys senttimetreinä (distance). Ensimmäinen taimiistutetaan istutusetäisyyden päähän talon seinästä. Laske ja tulosta pensasaidan pituus senttimetreinä(length_cm) ja metreinä (length_m).
    let plants = Number(document.getElementById('plants').value);
    let distance = Number(document.getElementById('distance').value);
    let length_cm = (plants * distance);

    document.getElementById('length_cm').innerHTML = (plants * distance);
    document.getElementById('length_m').innerHTML = (length_cm / 100);

}

function t09() {
    // Tarvitaan juhlien ostoslista. Lue vieraiden määrä (participant) ja laske tarvittavien juomien ja ruuanmäärät. Kullekin vieraalle ostetaan 3 makkaraa, 5 pulloa juomaa, 2 tomaattia ja 1 kananmuna. Tulosta ostoslista. Etsi index.html-tiedostosta tulostuselementtien nimet.
    let participants = Number(document.getElementById('participant').value);

    document.getElementById('sausages').innerHTML = (participants * 3);
    document.getElementById('drinks').innerHTML = (participants * 5);
    document.getElementById('tomatoes').innerHTML = (participants * 2);
    document.getElementById('eggs').innerHTML = (participants * 1);

}




