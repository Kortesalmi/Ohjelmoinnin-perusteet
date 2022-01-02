function getRandomNumber(min, max) {
    return Math.floor((Math.random() * max) + min)
}
// - Luo paikallinen taulukko.
let numbers = new Array();

/* Täytä taulukko nollilla siten, että viimeisen
taulukkoalkion indeksi on 40 (for loop). Taulukkoalkiota indeksillä nolla
ei käytetä tässä tehtävässä. */
for (let i = 0; i <= 40; i++) {
    numbers.push(0);
}

// - Arvo satunnaislukugeneraattoria käyttäen 7 eri lukua välitä 1 … 40.
/* Tarvitset tässä while-toistoa. Arvo luku. Käytä sitä indeksinä
lottotaulukkoon ja tutki osoittaako se taulukkoalkioon, jossa on nolla.
Mikäli näin on, niin aseta ko. taulukkoalkioon 1 (= lottonumero arvottu).
Mikäli taulukkoalkiossa on jo luku 1, niin tiedät, että ko. paikka on jo
käytössä ja sitä ei voi käyttää uudestaan. While-toistossa sinun täytyy
laskea arvottuja lukuja siten, että 7 erilaista on arvottu.
 */

let counter = 0;
while (counter < 7) {
    let randomNumber = getRandomNumber(1, 40);
    // Käytä arvottua numeroa indeksinä lottotaulukkoon ja tutki osoittaako se  taulukkoalkioon, jossa on nolla
    if (numbers[randomNumber] == 0) {
        // Mikäli indeksissä on 0, niin aseta ko. taulukkoalkioon 1 (= lottonumero arvottu).
        numbers[randomNumber] = 1;
        counter++;
    }
}

counter = 0;
while (counter < 1) {
    let randomNumber = getRandomNumber(1, 40);
    // Käytä arvottua numeroa indeksinä lottotaulukkoon ja tutki osoittaako se  taulukkoalkioon, jossa on nolla
    if (numbers[randomNumber] == 0) {
        // Laita taulukkoalkioon luku 2, kun indeksi osoittaa taulukkoalkioon, jossa on nolla.
        numbers[randomNumber] = 2;
        counter++;
    }
}
console.table(numbers);
// - Nyt voit tulostaa lottonumerot, käy läpi taulukko for-toistolla.
let lottoNumbers = '<p>Arvotut lottonumerot: ';
for (let i = 1; i < numbers.length; i++) {
    // JOS taulukkoalkiossa on luku 1,
    if (numbers[i] == 1) {
        // niin indeksi kertoo lottonumeron ja indeksi tulostetaan. Tulosta lottonumerot yhdelle riville, välilyönti väliin.
        lottoNumbers += i + ' ';
    }
}
lottoNumbers += '</p>';
document.write(lottoNumbers);
/* - Lisänumero tulostetaan vastaavalla logiikalla, mutta etsitään
taulukkoalkiota, jossa on luku 2. Taas tulostetaan indeksi ei lukua 2.
- Lopuksi arvot plusnumeron. Se on mikä tahasa luku väliltä 1 … 40. Arvo
ja tulosta
 */