/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    License    : CC-BY-4.0
*/

let numbers = [15, 4, 68, 23, 22, 7, 15, 10, 32, 15];

// copy and paste here the random number generator function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function t01a() {
    // Tulosta elementin result_a1 ominaisuuteen innerHTML edellä oleva taulukko numbers.
    document.getElementById('result_a1').innerHTML = numbers;

    // Elementtiin result_a2 tulostat taulukon arvot yksi kerrallaan alkaen ensimmäisestä taulukkoalkiosta käyttäen for-toistoa. Laita välilyönti (" ") tulostettujen arvojen väliin.
    for (let i = 0; i <= numbers.length - 1; i++) {
        document.getElementById('result_a2').innerHTML += numbers[i] + ' ';
    }
}

function t01b() {
    /*
    Elementtiin result_b tulostat taulukon arvot yksi kerrallaan alkaen
    viimeisestä taulukkoalkiosta käyttäen for-toistoa. Laita välilyönti (" ")
    tulostettujen arvojen väliin.
    */
    for (let i = numbers.length - 1; i >= 0; i--) {
        document.getElementById('result_b').innerHTML += numbers[i] + ' ';
    }
}

function t01c() {
    // Laske taulukkoalkioiden summa ja keskiarvo. Tulosta molemmat.
    sum = 0;
    average = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
   
    average += sum / numbers.length;
    document.getElementById('result_c1').innerHTML = sum;
    document.getElementById('result_c2').innerHTML = average;
}
/*
Etsi suurin ja pienin taulukkoalkion arvo. Logiikka::
- määrittele muuttujat smallest ja biggest
- laita ensimmäinen taulukkoalkio molempien arvoksi
- käy taulukko läpi for-toistolla ja tutki onko käsiteltävä taulukkoalkio pienempi kuin arvo muuttujassa smallest; jos on, aseta käsiteltävän taulukkoalkion arvo muuttujan smallest arvoksi.
- vastaava logiikka suurimman etsimiseksi
Lopuksi tulosta smallest ja biggest.
Vastaavan tyyppinen tehtävä oli Choices, V7: Smallest and biggest
*/ 
function t01d() {
    let smallest = numbers[0];
    let biggest = numbers[0];

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }

        if (numbers[i] > biggest) {
            biggest = numbers[i];
        }
    }

    document.getElementById('result_d1').innerHTML = smallest;
    document.getElementById('result_d2').innerHTML = biggest;
}

/*
JavaScriptissä on funktio sort() lajittelua varten. Kokeile sitä; kirjoita numbers.sort(). Tulosta
taulukkoalkiot yhdelle riville ensimmäisestä viimeiseen ja välilyönti välissä.
Huomaat – lajittelu ei ole oikein. Perehdy lajitteluun w3schools-sivustolla
https://www.w3schools.com/jsref/jsref_sort.asp ja kirjoita oikea lajittelukomento. 
*/
function t01e() {
    for (let i = 0; i < numbers.length; i++) {
        sort = numbers.sort(function(a, b){return a-b});
    }
    document.getElementById('result_e').innerHTML= numbers.join(' ') + ' ';
}

/*
Tyhjennä taulukko luomalla uusi: numbers = new Array();
Käytä satunnaislukugeneraattorifunktiota ja luo 20 uutta satunnaislukua taulukkoon väliltä 1 … 20.
Lisäät taulukkoon arvoja push()-funktiolla, https://www.w3schools.com/jsref/jsref_obj_array.asp
Tämän jälkeen kutsu jokaista painikefunktiota oheisen mallin mukaisesti:
t01a();
t01b();
…
t01e();
Mitä tässä tapahtui?
*/
function t01f() {
    numbers = new Array();
    for (let i = 0; i < 20; i++) {
        numbers.push(getRndInteger(0, 20));
    }
    t01a()
    t01b()
    t01c()
    t01d()
    t01e()
}

/*
Luo paikallinen taulukko jokerinumeroille käyttäen lausetta let jokers = new Array();
Käytä satunnaislukugeneraattorifunktiota ja luo 7 numeroa taulukkoon väliltä 0 … 9 (for-toisto).
Tämän jälkeen kirjoita toinen for-toisto, jossa käyt läpi jokers-taulukon ensimmäisestä viimeiseen,
tulostat jokaisen taulukkoalkion ja välilyönnin numeroiden väliin.
*/
function t02() {  
    let jokers = new Array();

    for (let i = 0; i < 7; i++) {
        jokers.push(getRndInteger(0, 9));
    }
    for (let i = 0; i < jokers.length; i++) {
        document.getElementById('joker').innerHTML += jokers[i] + ' ';
    }
}

function t03() {
    // Tehdään uusi array, jossa vika indeksi 40 ja kaikki arvot on 0
    let lotto = new Array();

    for (let i = 0; i < 40; i++) {
        lotto.push(Number(0));
    }

    // Loopataan kunnes sum = 7, sum arvo kasvaa, jos arrayn lotto arvo 0 muuttuu 1:ksi.
    let sum = 0;
    let nbr = 0;

    while (sum < 7) {
        nbr = getRndInteger(1, 40);
        if (lotto[nbr] == 0) {
            lotto[nbr] = 1;
            sum++;
        }
    }

    // Loopataan kunnes yksi arrayn arvo muuttuu 0:sta -> 2:ksi.
    let sum2 = 0;
    while (sum2 < 1) {
        nbr = getRndInteger(1, 40);
        if (lotto[nbr] == 0) {
            lotto[nbr] = 2;
            sum2++;
        }
    }

    // Käydään array läpi ja tulostetaan luvut, joiden arvo on 1 tai 2.
    for (let j = 0; j <= lotto.length; j++) {
        if (lotto[j] == 1) {
            document.getElementById('lotto').innerHTML += j + ' ';
        }
        if (lotto[j] == 2) {
            document.getElementById('extra').innerHTML += j;
        }
    }

    document.getElementById('plus').innerHTML = getRndInteger(1, 40);
}

function t04() {    
    let random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    document.getElementById('random').innerHTML = '';

    while (random.length > 0) {
        let number = getRndInteger(0, (random.length - 1));
        document.getElementById('random').innerHTML += random[number] + ' ';
        random.splice(number, 1);
    }

}
/*
Heitä noppaa 100 kertaa. Tulosta heitettyjen noppien kuvat sivulle (dices) ja laske montako kertaa
tuli noppa 6 (sixes). Noppien kuvat ovat taulukossa dices.
*/
function t05() {    
    let dices = ["",
        '<img alt="dice 1" src="img/noppa1.png">',
        '<img alt="dice 2" src="img/noppa2.png">',
        '<img alt="dice 3" src="img/noppa3.png">',
        '<img alt="dice 4" src="img/noppa4.png">',
        '<img alt="dice 5" src="img/noppa5.png">',
        '<img alt="dice 6" src="img/noppa6.png">'
    ];

    let times = 0;
    let sixes = 0;
    
    for (i = 0; i < 100; i++) {
        let number = getRndInteger(1, (dices.length -1));
        document.getElementById('dices').innerHTML += dices[number];
        if (number == 6) {
            sixes++;
        }
        times++;
    }
    document.getElementById('sixes').innerHTML = sixes;
}
