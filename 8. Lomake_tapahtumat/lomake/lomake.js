function showErrorMessage(element) {
    // Virheviesti jos tyhjä
    console.log("Tyhjä kenttä");
    element.classList.add('red');
    element.parentElement.parentElement.getElementsByClassName('errorMessage')[0].style="display:inline";
    // Asetetaan flagimuuttuja falseksi
    return false;
}
function hideErrorMessage(element) {
    element.classList.remove('red');
    element.parentElement.parentElement.getElementsByClassName('errorMessage')[0].style="display: none;";
}
function checkElement(element) {
// Tarkistetaan käsiteltävänä olevan elementin sisältö
        // Tarkista minkätyyppinen elementti kyseessä
        if (element instanceof HTMLSelectElement) {
            // Jos select -> tarkistetaan onko valinta --Select gender--
            if(element.selectedIndex == 0) {
                // Valintaa ei ole tehty, valittuna ensimmäinen vaihtoehto -> näytä virheilmoitus
                inputsOK = showErrorMessage(element);
            } else {
                // Kenttä ok -> piilotetaan punaiset kehykset ja virheviesti
                hideErrorMessage(element);
            }
        } else {
            // Jos input -> tarkistetaan onko value tyhjä
            if (element.value == '') {
                // Virheviesti jos tyhjä
                inputsOK = showErrorMessage(element);
            } else {
                // Kenttä ok -> piilotetaan punaiset kehykset ja virheviesti
                hideErrorMessage(element);
            }
        }
        return inputsOK;
}
document.getElementById('submitButton').onclick = function() {
    // Haetaan elementit
    let elements = document.getElementsByClassName('required');
    // Luodaan flagimuuttuja, jossa pidetään kirjaa siitä, onko tarkistuksessa ilmaantunu virheitä
    let inputsOK = true;
    // Loopataan elementit läpi
    for (let i = 0; i < elements.length; i++) {
        inputsOK = checkElement(elements[i]);
    }
    return inputsOK;
}