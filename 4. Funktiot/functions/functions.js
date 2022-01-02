/*
Harjoitellaan erilaisten funktioiden käyttöä
*/

// Math.PI & Math.pow()
document.getElementById('pi').innerHTML = 'Piin arvo on ' + Math.PI;
// Lasketaan ympyrän pinta-ala säteen perusteella πr^2
document.getElementById('ympyränPintaAla').innerHTML = 'Ympyrän pinta-ala jos säde on 5 = ' +  Math.PI * Math.pow(5, 2);

// Math.round() 
let number1 = 0.1;
document.getElementById('round').innerHTML = 'Luku ' + number1 + ' pyöristettynä lähimpään kokonaislukuun on ' + Math.round(number1);

// Math.min(), Math.max() 
let number2 = 5;
let number3 = 78;
let number4 = 123456.123456;
document.getElementById('minMax').innerHTML = 'Luvuista ' + number1 + ', ' + number2 + ', ' + number3 + ', ' + number4 + ' pienin on ' + Math.min(number1, number2, number3, number4);
document.getElementById('minMax').innerHTML += '<br/>Suurin on ' + Math.max(number1, number2, number3, number4);

// Math.random()
let randomNumber = Math.floor(Math.random() * 7);
document.getElementById('random').innerHTML = 'Nopan luku on ' + randomNumber;


// String.slice()
let text = "Javascript";
document.getElementById('slice').innerHTML = "Merkkijonon " + text + " ensimmäiset kolme kirjainta ovat " + text.slice(0, 3);
document.getElementById('slice').innerHTML += "<br/>Viimeiset kolme kirjainta ovat " + text.slice(-3);

// String.toUpperCase() & String.toLowerCase()
document.getElementById('uppercase').innerHTML = 'Merkkijono ' + text + ' uppercasena on ' + text.toUpperCase();
document.getElementById('uppercase').innerHTML += '<br/>Ja lowercasena ' + text.toLowerCase();

// String.trim()
let trimmattuText = text.trim()
document.getElementById('trim').innerHTML = 'Merkkijonon ' + text + ' trimmattu pituus on ' + trimmattuText.length;

// String.charAt()
document.getElementById('charAt').innerHTML = 'Merkkijonon ' + text + ' viides kirjain on ' + trimmattuText.charAt(4);

// new Date()
let currenDate = new Date();
document.getElementById('currentDate').innerHTML = 'Nyt on ' + currenDate;
document.getElementById('currentDate').innerHTML += '<br/>Vuosi on ' + currenDate.getFullYear();
document.getElementById('currentDate').innerHTML += '<br/>Kuukausi on ' + currenDate.getMonth();
document.getElementById('currentDate').innerHTML += '<br/>Päivämäärä on ' + currenDate.getDate();
document.getElementById('currentDate').innerHTML += '<br/>Viikonpäivä on ' + currenDate.getDay();