// Mikael Kortesalmi

// Globaalit taulukot palkinnoille ja henkilöille
let allPrizes = new Array();
let allPersons = new Array();

/**
 * Print the global prizes array contents to a page
 */
function printPrizes() {    
    // Palkintojen määrä taulukossa
    let prizesAmount = allPrizes.length;

    document.getElementById('prizes').innerHTML = '';

    for (let i = 0; i < allPrizes.length; i++) {
        document.getElementById('prizes').innerHTML += '<li>' + allPrizes[i] + '</li>';      
    }

    document.getElementById('prizesAmount').innerHTML = prizesAmount;
}

/**
 * Print the global prizes array contents to a page
 */
 function printPersons() {    
    // Henkilöiden määrä taulukossa
    let personsAmount = allPersons.length;

    document.getElementById('persons').innerHTML = '';

    for (let j = 0; j < allPersons.length; j++) {
        document.getElementById('persons').innerHTML += '<li>' + allPersons[j] + '</li>';   
    }
    
    document.getElementById('personsAmount').innerHTML = personsAmount;
}

// satunnaislukugeneraattori
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


function newPrize() {
    
    // Käyttäjä syöttää palkinnon palkinto-elementtiin
    let prize = document.getElementById('prize').value;

    // Elementtien tyhjennys
    document.getElementById('prizeError').innerHTML = '';
    document.getElementById('prizes').innerHTML = '';
    document.getElementById('prizesAmount').innerHTML = '';

    // Jos palkinto-elementti on tyhjä, tulostaa virhe ilmoituksen
    // muuten lisää syötetyn palkinnon palkinto-taulukkoon.
    if (prize == '') {
        document.getElementById('prizeError').innerHTML = 'Insert prize.';
    return;
    } else {
        allPrizes.push(prize);
        printPrizes();
    }

    // Tyhjennetään input-kenttä ja viedään kohdistin takaisin siihen
    document.getElementById('prize').value = '';
    document.getElementById('prize').focus();

}

function newPerson() {
    
    // Käyttäjä syöttää henkilön henkilö-elementtiin
    let person = document.getElementById('person').value;

    // Elementtien tyhjennys
    document.getElementById('personError').innerHTML = '';
    document.getElementById('persons').innerHTML = '';
    document.getElementById('personsAmount').innerHTML = '';

    // Jos henkilö-elementti on tyhjä, tulostaa virhe ilmoituksen
    // muuten lisää syötetyn henkilön henkilö-taulukkoon.
    if (person == '') {
        document.getElementById('personError').innerHTML = 'Insert person.';
    return;
    } else {
        allPersons.push(person);
        printPersons();
    }

    // Tyhjennetään input-kenttä ja viedään kohdistin takaisin siihen
    document.getElementById('person').value = '';
    document.getElementById('person').focus();

}

function toPerson() {
    
    // Jos taulukoissa ei ole mitään jäljellä, ilmoitetaan asiasta
    if (allPrizes.length === 0) {
        alert('No more prizes.');
    return;
    } else if (allPersons.length === 0) {
        alert('No more persons.');
    return;
    }

    //arvotaan satunnainen henkilö
    let randomPerson = getRndInteger(0, allPersons.length);

    // Tulostetaan ensimmäisestä palkinnosta lähtien:
    // palkinto ja satunnainen voittaja
    document.getElementById('personAndPrice').innerHTML += '<li>' + allPrizes[0] + ' : ' + allPersons[randomPerson] + '</li>';
    
    // Poistetaan tulostetut palkinnot ja henkilöt taulukoista
    allPersons.splice(randomPerson, 1);
    allPrizes.shift();

    // Päivitetään molemmat taulukot ja niiden sisältämien palkintojen/henkilöiden määrä
    printPrizes();
    printPersons();
}