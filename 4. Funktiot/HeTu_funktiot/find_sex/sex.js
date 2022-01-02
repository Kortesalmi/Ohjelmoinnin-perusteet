function check() {

    // Käyttäjän syöttämä henkilötunnus
    let id = document.getElementById('idcode').value;
    // Vuosisata siitä erotettuna
    let sukupuoli = id.substr(7, 3);

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

    // Elementtien tyhjennys
    document.getElementById('error').innerHTML = '';
    document.getElementById('sex').innerHTML = '';
    document.getElementById('age').innerHTML = '';
    document.getElementById('result').innerHTML = '';

    // Tulostetaan sukupuoli sex-elementtiin
    document.getElementById('sex').innerHTML = findSex(sukupuoli);

}