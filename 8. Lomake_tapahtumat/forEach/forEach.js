let fruits = new Array();

let banana = {
    name: 'banana',
    color: 'yellow'
}

let watermelon = {
    name: 'watermelon',
    color: 'green'
}

let apple = {
    name: 'apple',
    color: 'red'
}

fruits.push(banana);
fruits.push(watermelon);
fruits.push(apple);

for(let i = 0; i < fruits.length; i++) {
    document.write('<li>' + fruits[i].name + ' is ' + fruits[i].color + '</li>');
}

document.write('<h2>ForEach</h2>');

fruits.forEach(fruit => {
    document.write('<li>' + fruit.name + ' is ' + fruit.color + '</li>')
});