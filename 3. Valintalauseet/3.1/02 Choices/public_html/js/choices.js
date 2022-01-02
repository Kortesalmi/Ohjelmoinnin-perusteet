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

// Luen henkilön syntymävuosi (year) ja laske ikä tietokoneelta saatavaan kuluvaan vuoteenperustuen. Henkilö on tervetullut astumaan sisään, mikäli hän on 18 tai vanhempi. Nuoremmathenkilöt eivät pääse sisään. Tulosta Welcome! tai too young elementtiin allow riippuen henkilöniästä.
function v01() {
    let today = new Date(); 
    let current_year = today.getFullYear();
    let year = Number(document.getElementById('year').value);

    if (current_year - year >= 18) {
        document.getElementById('allow').innerHTML = 'Welcome!';
    } else {
        document.getElementById('allow').innerHTML = 'too young'; 
    }
}

// Lue kaksi lukua (number1, number2) ja tulosta pienempi niistä elemettiin smaller.
function v02() {
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);

    if (number1 < number2) {
        document.getElementById('smaller').innerHTML = number1;
    } else {
        document.getElementById('smaller').innerHTML = number2;
    }
}

// Lue kaksi lukua (number1, number2). Kerro ne keskenään. Negatiivinen tulo tarkoittaa, että toinenluvuista on negatiivinen. Positiivinen tulo tarkoittaa, että molemmat ovat positiivisia tai negatiivisia.Käytä funktioon määriteltyjä vakioita tuloksen ilmoittamiseen (elementtiin negative).
function v03() {
    const NEG = "One of the numbers is negative.";
    const POS = "Both numbers are either positive or negative.";
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let negative = (number1 * number2);

    if (negative > 0) {
        document.getElementById('negative').innerHTML = POS;
    } else {
        document.getElementById('negative').innerHTML = NEG;
    }
    
}

// Lue kaksi lukua (side1, side2). Tutki voiko niistä muodostaa neliön vai suorakaiteen. Käytäfunktioon määriteltyjä vakioita tuloksen ilmoittamiseen (elementtiin square).
function v04() {
    const REC = "rectangle";
    const SQ = "square";
    let side1 = Number(document.getElementById('side1').value);
    let side2 = Number(document.getElementById('side2').value);

    if (side1 == side2) {
        document.getElementById('square').innerHTML = SQ;
    } else {
        document.getElementById('square').innerHTML = REC;
    }

}

// Lue luku (number3) ja päättele onko se pariton vai parillinen. Ota esille jakojäännös, kun luku jaetaan2:lla. Mikäli jakojäännös on nolla, niin luku on parillinen (even). Käytä funktioon määriteltyjä vakioita tuloksen ilmoittamiseen (elementtiin even).
function v05() {
    const EVEN = "even";
    const ODD = "odd";
    let number3 = Number(document.getElementById('number3').value);

    if (number3 % 2 == 0) {
        document.getElementById('even').innerHTML = EVEN;
    } else {
        document.getElementById('even').innerHTML = ODD;
    }
}

// Lue luku (number3) ja päättele onko se positiivinen, negatiivinen vai nolla.
function v06() {
    let number3 = Number(document.getElementById('number3').value);

    if (number3 > 0) {
        document.getElementById('positive').innerHTML = "positive";
    } else if (number3 == 0) {
        document.getElementById('positive').innerHTML = "zero";
    } else {
        document.getElementById('positive').innerHTML = "negative";
    }
}

// Lue neljä lukua (digit_a, digit_b, digit_c, digit_d). Etsi pienin ja suurin niistä. Määrittele muuttujat smallest ja biggest. Logiikka pienimmän löytämiseen
// 1. Aseta muuttujan digit_a sisältö muuttujan smallest sisällöksi.
// 2. Tutki onko muuttuja digit_b pienempi kuin smallest. Jos on, aseta digit_b muuttujan smallest sisällöksi.
// 3. Tutki onko muuttuja digit_c pienempi kuin smallest. Jos on, aseta digit_c muuttujan smallest sisällöksi.
// 4. Tutki onko muuttuja digit_d pienempi kuin smallest. Jos on, aseta digit_d muuttujan smallest sisällöksi.
// 5. Muuttujassa smallest on pienin arvo.Vastaavalla logiikalla löydät suurimman.
// Tulosta tulos elementteihin smallest ja biggest. Tässä tehtävässä ei käytetä &&-operaattoria iflauseen ehdoissa.
function v07() {
    let digit_a = Number(document.getElementById('digit_a').value);
    let digit_b = Number(document.getElementById('digit_b').value);
    let digit_c = Number(document.getElementById('digit_c').value);
    let digit_d = Number(document.getElementById('digit_d').value);
    let smallest = digit_a;
    let biggest = digit_a;

    if (digit_b < smallest) {
        smallest = digit_b;
    }
    if (digit_c < smallest) {
        smallest = digit_c;
    }
    if (digit_d < smallest) {
        smallest = digit_d;
    }

    if (digit_b > biggest) {
        biggest = digit_b;
    }
    if (digit_c > biggest) {
        biggest = digit_c;
    }
    if (digit_d > biggest) {
        biggest = digit_d;
    }
    document.getElementById('smallest').innerHTML = smallest;
    document.getElementById('biggest').innerHTML = biggest;
}

// Tutki onko vuosi (yearx) karkausvuosi vai ei. Tulosta tulos 'is leap year' tai 'is not leap year'elementtin leap_year. Vuosi on karkausvuosi, jos se on jaollinen 4:llä (ei jakojäännöstä). Tässä tapauksessa mikäli vuosi onjaollinen 100:lla se on karkausvuosi, mikäli se on jaollinen myös 400:llä. Vuosi 1900 ei ole karkausvuosi, 2000 on. 2020 on karkausvuosi, 2019 ja 2018 eivät ole
function v08() {
    let yearx = Number(document.getElementById('yearx').value);
    
    if (yearx % 4 != 0) {
            document.getElementById('leap_year').innerHTML = 'is not leap year'
        } else if ((yearx % 100 == 0) && (yearx % 400 != 0)){
            document.getElementById('leap_year').innerHTML = 'is not leap year'
        } else {
            document.getElementById('leap_year').innerHTML = 'is leap year'
        }
}

// Tutki, onko käyttäjän syöttämä luku jaollinen 3:lla. Mikäli näin on tulosta vakion FLOWER1 sisältö flower-elementtiin, muussa tapauksessa tulosta vakion FLOWER2 sisältö. Edelleen tutki onko käyttäjän syöttämä luku suurempi kuin 10. Mikäli näin on tulosta vakion FLOWER3 sisältö flower-elementtiin edellisen tulostuksen perään, muussa tapauksessa tulosta vakion FLOWER4 sisältö edellisen tulostuksen perään.
function v09() {
	const FLOWER1 = '<img alt="flower1" src="img/flower1.png">';
	const FLOWER2 = '<img alt="flower2" src="img/flower2.png">';
	const FLOWER3 = '<img alt="flower3" src="img/flower3.png">';
	const FLOWER4 = '<img alt="flower4" src="img/flower4.png">';  
    let number4 = Number(document.getElementById('number4').value);

    if (number4 % 3 == 0) {
        document.getElementById('flower').innerHTML = FLOWER1;
    } else {
        document.getElementById('flower').innerHTML = FLOWER2;
    }
    if (number4 > 10) {
        document.getElementById('flower').innerHTML += FLOWER3;
    } else {
        document.getElementById('flower').innerHTML += FLOWER4;
    }
}
