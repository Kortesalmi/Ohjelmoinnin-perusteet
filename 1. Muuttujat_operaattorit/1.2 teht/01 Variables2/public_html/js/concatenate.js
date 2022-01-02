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

function j01() {
    // Lue kaksi syntymävuotta (year1, year2) ja laske henkilöiden iät kuluvan vuoden perusteella (kts.T6 edellisissä harjoituksissa). Laske myös kuinka paljon vanhempi person 1 on kuin person 2. Tulostatulokset elementteihin age1, age2 ja difference.
    let today = new Date(); 
    let current_year = today.getFullYear();
    let year1 = (document.getElementById('year1').value);
    let year2 = (document.getElementById('year2').value);
    let age1 = (current_year - year1);
    let age2 = (current_year - year2);

    document.getElementById('age1').innerHTML = 'Person 1 age is ' + (age1);
    document.getElementById('age2').innerHTML = 'Person 2 age is ' + (age2);
    document.getElementById('difference').innerHTML = 'Person 1 is ' + (age1 - age2) + ' years older than person 2';
}

function j02() {
    // Lue width ja height. Laske ja tulosta suorakaiteen pinta-ala (area).
    let height = Number(document.getElementById('height').value);
    let width = Number(document.getElementById('width').value);

    document.getElementById('area').innerHTML = 'The area is ' + (width * height) + ' m2.';
}

function j03() {
    // Lue number1 ja number2. Laske ja tulosta summa (sum).
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let sum = (number1 + number2);

    document.getElementById('sum').innerHTML = number1 + ' + ' + number2 + ' = ' + (sum);
}

function j04() {
    // Lue henkilön nimi (name) ja syntymävuosi (year3), laske ikä. Tulostettaessa (message-elementtiin)käytä funktioon määriteltyjä vakioita.
    let name = document.getElementById('name').value;
    let today = new Date(); 
    let current_year = today.getFullYear();
    let year3 = current_year - Number(document.getElementById('year3').value);
    const START = "Hello " + name;
    const MIDDLE = ", you are " + year3;
    const END = " years of age.";

    document.getElementById('message').innerHTML = START + MIDDLE + END;
}

function j05() {
    // Kuten tehtävä J3, mutta nyt tulostat jokaisen summan edellisen summan alapuolelle omalle rivilleen. Lue number3 ja number4. Laske ja tulosta summa elementtiin sums. Kun käyttäjä klikkaapainiketta, tulostetaan summa uudelle riville edellisen alapuolelle, katso esimerkkitulostus allaolevasta kuvasta.Tulostat samaan elementtiin ilman edellisen tulostuksen poistamista käyttämällä += operaattoria.Uusi rivi saadaan html-elementillä <br>. Sijoita se viimeiseksi tulostuslauseeseen merkkitietona.
    let number3 = Number(document.getElementById('number3').value);
    let number4 = Number(document.getElementById('number4').value);
    let sums = number3 + number4;

    document.getElementById('sums').innerHTML += number3 + ' + ' + number4 + ' = ' + sums + '<br>';
}

