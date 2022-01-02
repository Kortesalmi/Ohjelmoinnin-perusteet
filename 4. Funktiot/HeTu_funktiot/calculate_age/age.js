// Mikael Kortesalmi



function check() {

    // Käyttäjän syöttämä henkilötunnus
    let id = document.getElementById('idcode').value;
    // Vuosisata siitä erotettuna
    let century = id.substr(6, 1);

    /**
     * Calculates person's age based on a year.
     *
     * @param {string} id    the date as format ddmmyy
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

    // Elementtien tyhjennys
    document.getElementById('error').innerHTML = '';
    document.getElementById('sex').innerHTML = '';
    document.getElementById('age').innerHTML = '';
    document.getElementById('result').innerHTML = '';

    // Tulostetaan ikä age-elementtiin
    document.getElementById('age').innerHTML = calculateAge(id, century);

}