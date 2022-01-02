// Mikael Kortesalmi

function check() {
    
    // Käyttäjän syöttämä henkilötunnus
    let id = document.getElementById('idcode').value;

    // funktioissa käytettäviä muuttujia
    let century = id.substr(6, 1);
    let sukupuoli = id.substr(7, 3);
    let syntymäAika = id.substr(0, 6);
    let järjestysNum = id.substr(7, 3);

    /**
     * Checks that the given date is right. Returns an error message or
     * empty string which means that the date is right
     * 
     * @param {string} id         the date as format ddmmyy
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
            message = 'Day must be 1 ... 31.';
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

    /**
     * Calculates person's age based on a year.
     *
     * @param {string} id       the date as format ddmmyy
     * @param {string} century  is + - or A
     * @returns {number}        the calculated age
     */

    function calculateAge(id, century) {
        let year = new Date().getFullYear();
        let syntymäVuosi = Number(id.substr(4, 2));

        if (century == '+') {
            syntymäVuosi = Number(syntymäVuosi + 1800);
        } else if (century == '-') {
            syntymäVuosi = Number(syntymäVuosi + 1900);
        } else if (century == 'A') {
            syntymäVuosi = Number(syntymäVuosi + 2000);
        }
        return Number(year - syntymäVuosi);
    }

    /**
     * Finds out the sex of a person
     * 
     * @param {string} sukupuoli    order number in the personal identification code
     * @returns {string}            female or male
     */

    function findSex(sukupuoli) {
        let sex = '';
    
        if (sukupuoli % 2 == 1) {
            sex = 'male';
        } else if (sukupuoli % 2 == 0) {
              sex = 'female';
        }
        return sex;
        }

    /**
     * Calculates the control character of the personal identification code.
     * 
     * @param {string} syntymäAika   ddmmyy part of the identification code
     * @param {string} järjestysNum        order number part of the identification code
     * @returns {string}             Calculated control character
     */

    function calculateCheckMark(syntymäAika, järjestysNum) {
        let checkMarks = "0123456789ABCDEFHJKLMNPRSTUVWXY";
        let string = String(syntymäAika + järjestysNum);
        let checkMark = '';
        let calculated = checkMarks[string % 31];
    
        if (checkMarks[string % 31] == id.substr(10, 1)) {
            checkMark = 'Identification code is right.';
        } else {
            checkMark = 'Identification code is not right. Calculated control character is ' + calculated;
        }
        return checkMark;
    }


    // Elementtien tyhjennys
    document.getElementById('error').innerHTML = '';
    document.getElementById('sex').innerHTML = '';
    document.getElementById('age').innerHTML = '';
    document.getElementById('result').innerHTML = '';

    // Virheilmoitukset riippuen virheestä:
    // henkilötunnus on vähemmän tai enemmän kuin 11 merkkiä
    if (id.length < 11 || id.length > 11) {
        document.getElementById('error').innerHTML = 'Id code must have 11 characters.';
    return;
    }

    // ensimmäiset 6 merkkiä eivät ole numeroita
    if (isNaN(syntymäAika)) {
        document.getElementById('error').innerHTML = 'Id code must have 6 numbers at first.'
    return;
    }
    
    // 7. merkki ei ole +, - tai A
    if (century != '+' && century != '-' && century != 'A') {
        document.getElementById('error').innerHTML = 'The century mark must be +, - or A.'
    return;
    }

    // viimeiset neljä merkkiä eivät ole numeroita
    if (isNaN(järjestysNum)) {
        document.getElementById('error').innerHTML = 'Order number must be a number.'
    return;
    }

    // Virheilmoitus funktiosta checkDate, jos hetun syntymäajassa jotain häikkää.
    if (checkDate(id, century) != '') {
        document.getElementById('error').innerHTML = checkDate(id, century);
    }

    // Tulostaa saadut arvot elementteihin
    document.getElementById('age').innerHTML = calculateAge(id, century);
    document.getElementById('sex').innerHTML = findSex(sukupuoli);
    document.getElementById('result').innerHTML = calculateCheckMark(syntymäAika, järjestysNum);
}