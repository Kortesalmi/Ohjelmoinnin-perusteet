/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

// Tentin arvosana perustuu pisteisiin (points), pisterajat oikealla taulukossa. Jos pistemäärä on taulukon ulkopuolella, niin sopiva virheilmoitus tulostetaan (grade_error). Käytä funktioon määriteltyä vakiota virheilmoituksen tulostuksessa. Virhetilanteessa funktion toiminta lopetetaan. Pisteitä vastaava arvosana tulostetaan elementtiin grade.

function v10() {
    const ERROR = "Points should be between 0 - 60.";
    let points = Number(document.getElementById('points').value);

    document.getElementById('grade_error').innerHTML = '';
    
    if ((points >= 0) && (points <= 29)) {
        document.getElementById('grade').innerHTML = 'fail'; 
    } else if ((points >= 30) && (points <= 34)) {
        document.getElementById('grade').innerHTML = 'satisfactory'; 
    } else if ((points >= 35) && (points <= 39)) {
        document.getElementById('grade').innerHTML = 'fair'; 
    } else if ((points >= 40) && (points <= 49)) {
        document.getElementById('grade').innerHTML = 'good'; 
    } else if ((points >= 50) && (points <= 60)) {
        document.getElementById('grade').innerHTML = 'excellent'; 
    } else {
        document.getElementById('grade_error').innerHTML = ERROR;
        document.getElementById('grade').innerHTML = '';
    }
    
}

// Tervehdys perustuu kellotunteihin (clock) oikealla olevan taulukon mukaisesti. Jos kellotunnit ovat taulukon ulkopuolella, niin sopiva virheilmoitus tulostetaan (clock_error). Käytä funktioon määriteltyä vakiota virheilmoituksen tulostuksessa. Virhetilanteessa funktion toiminta lopetetaan. Kellotuntia vastaava arvosana tulostetaan elementtiin greeting.
function v11() {
    const ERROR = "Hours should be between 0 - 24.";
    let clock = Number(document.getElementById('clock').value);

    document.getElementById('clock_error').innerHTML = '';

    if ((clock >= 21) && (clock <= 24)) {
        document.getElementById('greeting').innerHTML = 'Good night';
    } else if ((clock >= 18) && (clock <= 20)) {
        document.getElementById('greeting').innerHTML = 'Good evening';
    } else if ((clock >= 12) && (clock <= 17)) {
        document.getElementById('greeting').innerHTML = 'Good afternoon';
    } else if ((clock >= 4) && (clock <= 11)) {
        document.getElementById('greeting').innerHTML = 'Good morning';
    } else if ((clock >= 0) && (clock <= 3)) {
        document.getElementById('greeting').innerHTML = 'Good night';
    } else {
        document.getElementById('clock_error').innerHTML = ERROR;
        document.getElementById('greeting').innerHTML = '';
    }
    
}

// Tarvitaan juhlien ostoslista. Ilmoittautuneiden osallistujien määrä vaikuttaa ostettavien ruokien ja juomien määrään sekä juhlatilan paikkaan. Perehdy funktioon määriteltyihin vakioihin.
/* Virhetilanteet:
~ vieraiden määrä on negatiivinen
~ vieraiden määrä on desimaaliluku
~ ilmoittautuneita vieraita on 3 tai vähemmän
*/
// Näin tutkit onko muuttujan sisältö kokonaisluku vai ei
// Tulosta osoite (elementtiin address) ja ostoslista (elementtiin shopping_list). Rivinvaihto tehdään sijoittamalla <br> tulostuslauseeseen.

function v12() {
    const ERROR_NEG = "Number of guests cannot be negative.";
    const ERROR_DIGIT = "Number of guests must be integer.";
    const ERROR_FEW = "Party is cancelled due to too few guests."; 
    
    const ADDRESS1 = "Naapuritie 1";
    const ADDRESS2 = "Naapuritie 12";
    const ADDRESS3 = "Juhlasalintie 34";
    let guests = Number(document.getElementById('guests').value);

    document.getElementById('party_error').innerHTML = '';
    document.getElementById('address').innerHTML = '';
    document.getElementById('shopping_list').innerHTML = '';

    if (guests < 0) {
        document.getElementById('party_error').innerHTML = ERROR_NEG;

    return;
    }
    if (Number.isInteger(guests) === false) {
        document.getElementById('party_error').innerHTML = ERROR_DIGIT;

    return;
    }
    if (guests <= 3) {
        document.getElementById('party_error').innerHTML = ERROR_FEW;

    return;
    }

    if ((guests >= 4) && (guests <= 15)) {
        document.getElementById('shopping_list').innerHTML = 'Shopping list: <br>- Sausages ' + (guests * 3) + ' pcs<br>- Drinks ' + (guests * 5) + ' bottles<br>- Tomatoes ' + (guests * 2) + ' pcs<br>- Eggs ' + (guests * 1) + ' pcs';
        document.getElementById('address').innerHTML = ADDRESS1;
    } else if ((guests >= 16) && (guests <= 50)) {
        document.getElementById('shopping_list').innerHTML = 'Shopping list: <br>- Sausages ' + (guests * 2) + ' pcs<br>- Drinks ' + (guests * 3) + ' bottles<br>- Tomatoes ' + (guests * 1) + ' pcs<br>- Eggs ' + (guests * 0.5) + ' pcs';
        document.getElementById('address').innerHTML = ADDRESS2;
    } else {
        document.getElementById('shopping_list').innerHTML = 'Shopping list: <br>- Sausages ' + (guests * 2) + ' pcs<br>- Drinks ' + (guests * 3) + ' bottles<br>- Tomatoes ' + (guests * 1) + ' pcs<br>- Eggs ' + (guests * 0.5) + ' pcs';
        document.getElementById('address').innerHTML = ADDRESS3;
    }
}

// Aluksi tarkistetaan, että oikeiden vastausten määrä ei ylitä esitettyjen kysymysten määrää. Oikeilla syöttötiedoilla lasketaan, montako prosenttia oli oikeita vastauksia (oikeita/kaikki). Tästä tulee desimaaliluku, missä esimerkiksi 0.34 tarkoittaa 34%.
function v13() {
	const ERROR = "Number of right answers cannot be bigger than number of questions.";
	const RES1 = "Less than 25% right, you should study more.<br>";
	const RES2 = "Less than 50% right, nearly passed.<br>";
	const RES3 = "More than 50% right, good work.<br>";
	const RES4 = "More than 75% right, excellent.<br>";
	
	const PRIZE1 = '<img src="img/prize1.png">';
	const PRIZE2 = '<img src="img/prize2.png">';
	const PRIZE3 = '<img src="img/prize3.png">';
	const PRIZE4 = '<img src="img/prize4.png">';

    let questions = Number(document.getElementById('amount').value);
    let answers = Number(document.getElementById('right').value);

    document.getElementById('quiz_error').innerHTML = '';
    document.getElementById('result').innerHTML = '';

    if (answers > questions) {
        document.getElementById('quiz_error').innerHTML = ERROR;
        document.getElementById('result').innerHTML = '';

    return;
    }

    if (answers / questions < 0.25) {
        document.getElementById('result').innerHTML = RES1 + PRIZE1;
    } else if ((answers / questions >= 0.25) && (answers / questions < 0.50)) {
        document.getElementById('result').innerHTML = RES2 + PRIZE2;
    } else if ((answers / questions >= 0.50) && (answers / questions < 0.75)) {
        document.getElementById('result').innerHTML = RES3 + PRIZE3;
    } else if ((answers / questions >= 0.75) && (answers / questions <= 1)) {
        document.getElementById('result').innerHTML = RES4 + PRIZE4;
    }
}