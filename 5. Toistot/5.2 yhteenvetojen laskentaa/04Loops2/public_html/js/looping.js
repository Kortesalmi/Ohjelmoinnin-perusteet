/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */

// define here the common functions calculateHedgeRow  
function calculateHedgeRow(plant, distance) {
    return plant * distance;
}
// and getMeters
function getMeters(distance) {
    return distance / 100;
}
// LT01
let total_cm = 0;
let total_m = 0;
let total_plants = 0;
// LT02
let total_cm2 = 0;
let total_m2 = 0;
let total_plants2 = 0;
let family_total = 4;
// LT03
let total_cm3 = 0;
let total_m3 = 0;
let total_plants3 = 0;
let family_total3 = 4;

function lt01() {
    let plants = Number(document.getElementById('plants1').value);
    let distance_cm = Number(document.getElementById('distance1').value);
    let length_cm1 = calculateHedgeRow(plants, distance_cm);
    let length_m1 = getMeters(length_cm1);

    document.getElementById('length_cm1').innerHTML = length_cm1;
    document.getElementById('length_m1').innerHTML = length_m1;

    total_cm += length_cm1;
    total_m += length_m1;
    total_plants += plants;
    
    document.getElementById('length_cm1_total').innerHTML = total_cm;
    document.getElementById('length_m1_total').innerHTML = total_m;
    document.getElementById('plants1_total').innerHTML = total_plants;
}


function lt02() {
    let plants = Number(document.getElementById('plants2').value);
    let distance_cm = Number(document.getElementById('distance2').value);
    let length_cm2 = calculateHedgeRow(plants, distance_cm);
    let length_m2 = getMeters(length_cm2);
    document.getElementById('length_cm2').innerHTML = length_cm2;
    document.getElementById('length_m2').innerHTML = length_m2;

    total_cm2 += length_cm2;
    total_m2 += length_m2;
    total_plants2 += plants;

    if (family_total > 0) {
        // here the current code
        document.getElementById('length_cm2_total').innerHTML = total_cm2;
        document.getElementById('length_m2_total').innerHTML = total_m2;
        document.getElementById('plants2_total').innerHTML = total_plants2;
        // the last thing to do is to minus 1 from the family_total
         family_total--;
        } else {
        // print the message "All data entered." in the element finish.
            document.getElementById('finish').innerHTML = 'All data entered.';
        }
        
}

function lt03() {    
    let plants = Number(document.getElementById('plants3').value);
    let distance_cm = Number(document.getElementById('distance3').value);
    let length_cm3 = calculateHedgeRow(plants, distance_cm);
    let length_m3 = getMeters(length_cm3);

    document.getElementById('length_cm3').innerHTML = length_cm3;
    document.getElementById('length_m3').innerHTML = length_m3;

    total_cm3 = 4 * length_cm3;
    total_m3 = 4 * length_m3;
    total_plants3 = 4 * plants;
    
    document.getElementById('length_cm3_total').innerHTML = total_cm3;
    document.getElementById('length_m3_total').innerHTML = total_m3;
    document.getElementById('plants3_total').innerHTML = total_plants3;
}