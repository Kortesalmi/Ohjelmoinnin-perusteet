// Create a JS array that has the following items: "banana", "apple", "kiwi", "orange".
let fruits = ['banana', 'apple', 'kiwi', 'orange']
// Print out "First item in the array is [first item]".
document.write('First item in the array is ' + fruits[0]);
// Loop through the array backwards and print out the items.
for(let i = fruits.length - 1; i >= 0; i--) {
    document.write('<li>Item number ' + i + ' is ' + fruits[i] + '</li>');
}

document.write('</ul>');
// Add a new element grapefruit in the beginning of the array.
fruits.unshift('grapefruit');
document.write('<p>Grapefruit added</p>');
document.write('<ul>');
// Loop through the array backwards and print out the items.
for(let i = 0; i < fruits.length; i++) {
    document.write('<li>Item number ' + i + ' is ' + fruits[i] + '</li>');
}
document.write('</ul>');

// Add a new element watermelon in the end of the array.
fruits.push('watermelon');
document.write('<p>Watermelon added</p>');
document.write('<ul>');
// Loop through the array backwards and print out the items.
for(let i = 0; i < fruits.length; i++) {
    document.write('<li>Item number ' + i + ' is ' + fruits[i] + '</li>');
}
document.write('</ul>');
// Sort the array in descending alphabetical order (z-a).
fruits.sort();
fruits.reverse();
document.write('<p>Array sorted</p>');
document.write('<ul>');
// Loop through the array backwards and print out the items.
for(let i = 0; i < fruits.length; i++) {
    document.write('<li>Item number ' + i + ' is ' + fruits[i] + '</li>');
}
document.write('</ul>');