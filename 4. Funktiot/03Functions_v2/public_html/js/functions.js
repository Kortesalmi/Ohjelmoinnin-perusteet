/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    License    : CC-BY-4.0
*/

let whatShape = 1;
/**
 * What is selected, circle or square?
 * @param {number} i    1 = circle, 2 = square
 */
function shape(i) {
    whatShape = i;
    document.getElementById('result').innerHTML = "";
}

/**
 * Print result on the page
 * @param {element} place   where to print
 * @param {string} shape    shape as text
 * @param {number} area     area of the shape
 * @param {number} around   around of the shape
 */
function print(place, shape, area, around) {
    place.innerHTML = shape + " area is " + area + ", around is " + around + ".";
}

/**
 * Calculate circle around
 * @param {number} r    radius of a circle
 * @returns {number}    around of a circle
 */
function calculateCircleAround (r) {
    return Math.round(2 * Math.PI * r);
}

/**
 * Calculate circle area
 * @param {number} r    radius of a circle
 * @returns {number}    area of a circle 
 */
function calculateCircleArea (r) {
    return Math.round(Math.PI * Math.pow(r, 2));
}

// Write Square functions here
function calculateSquareAround (s) {
    return s + s + s + s;
}

function calculateSquareArea (s) {
    return s * s;
}


// Paste here the random number generator function 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// Button functions

// Lue säde (radius) input-elementistä (radius1). Laske ympyrän pinta-ala ja piiri. Tulosta tuloksetelementteihin c_around ja c_area. Pyöristä tulokset kokonaisluvuiksi tulostettaessa. Ympyrän piiri lasketaan: 2 * PI * radius, Pin arvon saat Math-luokasta komennolla Math.PI. Ympyrän pinta-ala lasketaan: PI * radius2. Potenssiin korottaminen tehdään Math-luokan funktiolla Math.pow(number, power). Aseta sopiva muuttuja number-muuttujan paikalle (siis säde) ja power-muuttujan paikalle 2. Kokonaisluvuksi pyöristäminen tehdään Math-luokan funktiolla Math.round(number).
function f01() {           
    let säde = Number(document.getElementById('radius1').value);
    let c_around = 2 * Math.PI * säde;
    let c_area = Math.PI * Math.pow(säde, 2);

    document.getElementById('c_around').innerHTML = Math.round(c_around);
    document.getElementById('c_area').innerHTML = Math.round(c_area);

}

// Laske ja tulosta tasakylkisen kolmion korkeus, pinta-ala ja ympärys, kun sivun ja kannan pituus on tunnettu. Tasakylkisessä kolmiossa sivut ovat yhtä pitkät. Kylki kuvassa on merkitty c:llä. b on kolmion korkeus ja kannan pituus on 2*a. Mikäli tiedetään kolmion kanta, niin a:n pituus saadaan kanta/2. Jos tiedetään a ja b, niin c saadaan Pythagoraan lauseesta 𝑐 = √𝑎 2 + 𝑏 2 Tässä tehtävässä pitää ratkaista muuttuja b, joka lasketaan 𝑏 = √𝑐 2 − 𝑎 2 Kun tiedetään suorakulmaisen kolmion kanta ja korkeus, niin voidaan laskea pinta-ala kaavalla, pinta-ala = (kanta * korkeus)/2 Pyöristä tulokset kokonaisluvuksi tulostettaessa.
function f02() {
    let side = Number(document.getElementById('side').value);
    let bottom = Number(document.getElementById('bottom').value);
    let bottom2 = bottom / 2;
    let height = Math.sqrt( Math.pow(side, 2) - Math.pow(bottom2, 2));
    let area = (height * bottom) / 2;

    document.getElementById('t_height').innerHTML = Math.round(height);
    document.getElementById('t_around').innerHTML = Math.round(side + bottom + side);
    document.getElementById('t_area').innerHTML = Math.round(area);
}

// Etsi JavaScript-tiedostosta funktioiden calculateCircleAround ja calculateCircleArea rungot. Kirjoitafunktioihin lauseet, joilla lasketaa ympyrän piiri sekä pinta-ala parametrin r avulla ja palautalaskutoimitusten tulos kutsuvalle. Lue funktiossa f03 ympyrän säde ja laske piiri sekä pinta-ala juuri kirjoittamiesi funktioiden avulla. Etsi JavaScript-tiedostosta funktio print. Käytä sitä tulostamisessa. Pyöristä tulokset kokonaisluvuksi tulostamisen yhteydessä. Älä muuta print-funktiota.
function f03() {
    let r = Number(document.getElementById('radius2').value);
    let cAround = calculateCircleAround(r);
    let cArea = calculateCircleArea(r);
    let p = document.getElementById('circle');
    print(p, 'Circle:', cArea, cAround);
//    how to find the element where to print and use it    
//    let p = document.getElementById('circle');
//    print(p, ...);    
}

// Määrittele funktiot calculateSquareAround(s) ja calculateSquareArea(s). Kirjoita funktioihin lauseet, joilla lasketaan neliön pinta-ala ja piiri perustuen parametrin s sisältöön. Lue neliön sivun pituus ja laske pinta-ala sekä piiri juuri kirjoittamiesi funktioiden avulla. Käytä funktiota print tulostamisessa. Ei ole tarvetta pyöristää tulostettavia arvoja.
function f04() {
    let s = Number(document.getElementById('side2').value);
    let sAround = calculateSquareAround(s);
    let sArea = calculateSquareArea(s);
    let p = document.getElementById('square');
    print(p, 'Square:', sArea, sAround);
}

// Etsi funktio shape(i) JavaScript-tiedostosta. Huomaa globaalimuuttuja whatShape. Tutki, miten funktiota kutsutaan html-tiedostosta. Selvitä itsellesi, mitä tarkoittaa, kun muuttujalla whatShape on arvo 1 tai 2. Lue data radius/circle. Perustuen whatShape-muuttujan arvoon laske joko ympyrän tai neliön tulokset. Käytä funktiota print tulostamisessa. Ympyrän tulokset pyöristetään kokonaisluvuksi, neliön ei.
function f05() {
    let amount = document.getElementById('amount').value;
    let area;
    let around;

    if (whatShape == 1) {
        area = Math.round(Math.PI * Math.pow(amount, 2));
        around = Math.round(2 * Math.PI * amount);
        shapeAsText = 'Circle:';
    } else {
        area = amount * amount;
        around = 4 * amount;
        shapeAsText = 'Square:';
    }
    let element = document.getElementById('result');
    print(element, shapeAsText, area, around);
}

// Perehdy funktioon Math.random()w3schools-sivustolla https://www.w3schools.com/js/js_random.asp. Monissa harjoituksissa sinun tulee arpoa luku halutulta lukuväliltä. Kopioi-ja-liitä satunnaisluvun arpova funktio w3schoos-sivustolta. Kopioi funktio, joka arpoo satunnaisluvun halutulta arvoalueelta siten, että parametreina annetaan arvoalueen ylä- ja alaraja (molemmat voivat tulla arvotuksi). Etsi funktiot.js-tiedostosta paikka, johon satunnaisluvun arvontafunktion kirjoitat. Löydät paikan lukemalla kommenttitekstejä. Käytä funktiota simuloimaan nopan (dice) heittämistä. Nopassa on silmäluvut 1 … 6. Tulosta saatu silmäluku html-sivulle
function f06() {
    document.getElementById('dice').innerHTML = getRndInteger(1, 6);
}
// Ohjelmoi funktioon satunnaislukujen arpominen käyttäjän ilmoittamalta arvoalueelta (min ja max). Käytä edellisessä tehtävässä kirjoittamaasi funktiota. Tulosta kukin satunnaisluku elementtiin randoms. Luvut erotetaan toisistaan välilyönnillä ” ”, kts. esimerkkitulostus.
function f07() {
    let min = Number(document.getElementById('min').value);
    let max = Number(document.getElementById('max').value);

    document.getElementById('randoms').innerHTML += getRndInteger(min, max) + " ";
}

// Write getCharacter and getDigit functions here
function getCharacter(text, index, uppercase) {
    let result = text.toString().charAt(index);
    if (uppercase) {
        result = result.toUpperCase();
    } else {
        result = result.toLowerCase();
    }
    return result;
}

function getDigit() {
    // luetaan kuluva päiväys
    let currenDate = new Date();
    // otetaan siitä vuosiluku
    let currentYear = currenDate.getFullYear();
    // muutetaan vuosiluku merkkijonoksi
    let currentYearAsString = currentYear.toString();
    // lopuksi otetaan viimeinen merkki
    let lastCharacter = currentYearAsString.charAt(currentYearAsString.length - 1);
    // palautetaan kutsuvalle
    return lastCharacter;
}

function f08() {
    // write here the user id and password by hand to have an example of 
    // the desired result of the task, use your own name
     let firstname = document.getElementById('firstName').value;
     let lastname = document.getElementById('lastName').value;

    // first name:
    let part1 = getDigit();
    let part2 = getCharacter(firstname, 0, false);
    let part3 = getCharacter(firstname, 1, false);
    // last name:
    let part4 = getCharacter(lastname, 0, false);
    let part5 = getCharacter(lastname, 1, false);
    // password:
    let part6 = getCharacter(firstname, 0, false);
    let part7 = getCharacter(firstname, firstname.length -1, true);
    let part8 = getCharacter(lastname, 0, false);
    let part9 = getCharacter(lastname, lastname.length -1, true);
    let part10 = getCharacter(lastname, lastname.length -2, true);
    let part11 = Number(getDigit()) + 1;

    // user id and password:
    let username = 'n' + part1 + part2 + part3 + part4 + part5 + '00';
    document.getElementById('userid').innerHTML = username;
    let password = '!?' + part6 + part7 + part8 + part9 + part10 + '+/' + part11;
    document.getElementById('password').innerHTML = password;
}

// Write checkDate and luckyNumber functions here
function checkDate(day, month, year) {
    let message = '';
    let currentYear = new Date().getFullYear();

    if (day < 1 || day > 31) {
        message = 'Day must be 1-31.';
    } else if (month < 1 || month > 12) {
        message = 'Month must be 1-12.';
    } else if (year < 1900 || year > currentYear) {
        message = 'Year must be between 1900 and current year.';
    }
    return message;
}

function luckyNumber(day, month, year) {
    const LUCKY = "2468013579";
    return LUCKY.charAt((day + month + year) % 10);
}

function f09() {
    document.getElementById('check_error').innerHTML = '';
    document.getElementById('check_result').innerHTML = '';
    let day = Number(document.getElementById('dd').value);
    let month = Number(document.getElementById('mm').value);
    let year = Number(document.getElementById('yy').value);
    let check = checkDate(day, month, year);

    if (check != '') {
        document.getElementById('check_error').innerHTML = check;
    return;
    }

    let currentYear = new Date().getFullYear();
    let age = currentYear - year;
    let lucky = luckyNumber(day, month, year);

    document.getElementById('check_result').innerHTML = 'Your date is right and you are ' + age + ' years old.<br>Your lucky number is ' + lucky;
}
