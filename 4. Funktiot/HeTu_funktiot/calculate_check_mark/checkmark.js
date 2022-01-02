function check() {

    // Käyttäjän syöttämä henkilötunnus
    let id = document.getElementById('idcode').value;
    // Vuosisata siitä erotettuna
    let value1 = id.substr(0, 6);
    let value2 = id.substr(7, 3);
    /**
    * Calculates the control character of the personal identification code.
    * 
    * @param {string} value1   ddmmyy part of the identification code
    * @param {string} value2   order number part of the identification code
    * @returns {string}        Calculated control character
    */
    function calculateCheckMark(value1, value2) {
        let checkMarks = "0123456789ABCDEFHJKLMNPRSTUVWXY";
        let string = String(value1 + value2);
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

    // Tulostetaan ikä age-elementtiin
    document.getElementById('result').innerHTML = calculateCheckMark(value1, value2);

}