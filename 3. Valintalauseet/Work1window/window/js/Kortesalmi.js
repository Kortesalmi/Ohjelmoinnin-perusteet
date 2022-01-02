// Mikael Kortesalmi

function window_calculation() {
    
    // Virheilmoitukset.
    const WINDOW_SIZE_MIN = 'Minimum height and width of window is 50cm.';
    const WINDOW_SIZE_MAX = 'Maximum height and width of window is 200cm.';
    const WINDOW_AMOUNT_MIN = 'No amount. 1 assumed.';
    const WINDOW_AMOUNT_MAX = 'No more than 10 equal size windows.';

    // Ikkunoiden koot.
    const SMALL = 'small window';
    const MEDIUM = 'medium window';
    const LARGE = 'large window';
    const HUGE = 'huge window';

    // Käyttäjän syöttämät arvot.
    let height = Number(document.getElementById('window_height').value);
    let width = Number(document.getElementById('window_width').value);
    let amount = Number(document.getElementById('window_amount').value);

    // Elementtien tyhjentäminen
    document.getElementById('error').innerHTML = '';
    document.getElementById('wood').innerHTML = '';
    document.getElementById('glass').innerHTML = '';
    document.getElementById('woods').innerHTML = '';
    document.getElementById('glasses').innerHTML = '';
    document.getElementById('size').innerHTML = '';

    // Virheilmoitukset vian mukaan.
    if (height < 50 || width < 50) {
        document.getElementById('error').innerHTML = WINDOW_SIZE_MIN;
    return;
    } else if (height > 200 || width > 200) {
         document.getElementById('error').innerHTML = WINDOW_SIZE_MAX;
    return;
    } else if (amount < 1) {
          document.getElementById('error').innerHTML = WINDOW_AMOUNT_MIN;
    return;
    } else if (amount > 10) {
           document.getElementById('error').innerHTML = WINDOW_AMOUNT_MAX;
    return;
        }


    // Lasketaan yhteen ikkunaan tarvittavan puun määrä metreinä.
    // Kerrotaan kahdella, jotta saadaan ikkunan molempiin puoliin tarvittava määrä puuta.
    let wood = ((height * 2) + ((width - 12) * 2)) * 2 / 100;
    document.getElementById('wood').innerHTML = wood;

    // Lasketaan yhteen ikkunaan tarvittavan lasin määrä metreinä.
    let glass = (width - 10) * (height - 10) / 100 / 100;
    document.getElementById('glass').innerHTML = glass;

    // Lasketaan käyttäjän asettamien ikkunoiden määrään tarvittava puu
    let woods = wood * amount;
    document.getElementById('woods').innerHTML = woods;

    // Lasketaan käyttäjän asettamien ikkunoiden määrään tarvittava lasi
    let glasses = glass * amount;
    document.getElementById('glasses').innerHTML = glasses;

    // Ilmoitetaan ikkunan koko riippuen lasin pinta-alasta.
    if (glass > 0 && glass <= 0.5) {
        document.getElementById('size').innerHTML = SMALL;
    } else if (glass >= 0.6 && glass <= 1.5) {
        document.getElementById('size').innerHTML = MEDIUM;
    } else if (glass >= 1.6 && glass <= 2.5) {
        document.getElementById('size').innerHTML = LARGE;
    } else {
    document.getElementById('size').innerHTML = HUGE;
    }
}