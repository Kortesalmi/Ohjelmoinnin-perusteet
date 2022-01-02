// Luo uusi taulukko
let shoppingList = new Array();

// Tehdään tulostus funktio
function printList() {
    let html = '<ul>';
    // Käydään silmukassa taulukko läpi
    for (let i = 0; i < shoppingList.length; i++) {
        // Lisätään käsiteltävä tuote html-muuttujaan
        html += '<li>' + shoppingList[i] + '</li>';
    }
    html += '</ul>';
    // Lisätään html sille tarkoitettuun elementtiin
    document.getElementById('printHere').innerHTML = html;
}
// Tapahtumakäsittelijä painikkeelle
document.getElementById('addItemButton').onclick = function () {
    // Luetaan inputin sisältö
    let item = document.getElementById('itemInput').value;
    //Lisätään syötetty tuote listaan
    shoppingList.push(item);
}

// Tapahtumakäsittelijä painikkeelle
document.getElementById('printButton').onclick = function () {
    // Tulostetaan ostoslista
    printList();
}
