function check() {

    // Käyttäjän syöttämä henkilötunnus
    let id = document.getElementById('idcode').value;
    // Vuosisata siitä erotettuna
    let century = id.substr(6, 1);

    /**
     * Checks that the given date is right. Returns an error message or
     * empty string which means that the date is right
    * 
    * @param {string} id     the date as format ddmmyy
     * @param {string} century    is + - or A
    * @returns {string}          an error message or empty string
    */
    function checkDate(id, century) {
        let currentYear = new Date().getFullYear();
        let message = '';
        let day = id.substr(0, 2);
        let month = id.substr(2, 2);
        let year = id.substr(4, 2);
    
        // Päivien, kuukausien ja vuosien tarkistus
        if (day < 1 || day > 31) {
            message = ': Day must be 1 ... 31.';
        } else if (month < 1 || month > 12) {
            message = 'Month must be 1 ... 12.';
        } else if (century == 'A') {
            Number(year) + 2000;
        }
        if (((century == 'A') && (Number(year) + 2000) > currentYear)) {
            message = 'Year is too big.';
        }
        return message;
    }

    // Elementtien tyhjennys
    document.getElementById('error').innerHTML = '';
    document.getElementById('sex').innerHTML = '';
    document.getElementById('age').innerHTML = '';
    document.getElementById('result').innerHTML = '';

    // Virheilmoitus funktiosta checkDate, jos hetun syntymäajassa jotain häikkää.
    if (checkDate(id, century) != '') {
        document.getElementById('error').innerHTML = checkDate(id, century);
    }

}