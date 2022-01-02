// Mikael Kortesalmi

class Person {

    constructor(lastname, firstname, number, birthyear) {
        this._lastname = lastname;
        this._firstname = firstname;
        this._birthyear = birthyear;
        this._number = number;
    }

    // Henkilön tulostus-funktio
    printPerson() {
        return this._lastname + ', ' + this._firstname;
    }

    // Iän laskenta-funktio syntymävuodesta
    age() {
        let currentYear = new Date().getFullYear();
        return currentYear - this._birthyear;
    }

    // Luodaan setterit ja getterit
    set lastname(lName) {
        this._lastname = lName;
    }

    set firstname(fName) {
        this._lastname = fName;
    }

    set birthyear(bYear) {
        this._birthyear = bYear;
    }

    set number(pNumber) {
        this._number = pNumber;
    }

    get lastname() {
        return this._lastname;
    }

    get firstname() {
        return this._firstname;
    }

    get birthyear() {
        return this._birthyear;
    }

    get number() {
        return this._number;
    }

}

// Luodaan taulukko
let totalPeople = {
    allFriends: new Array(),

    // Funktio, joka tallentaa henkilön taulukkoon
    saveFriend: function (friend) {
        this.allFriends.push(friend);
    },

    //  Funktio, joka poistaa henkilön taulukosta
    removeFriend: function(index) {
        this.allFriends.splice(index, 1);
    },
    
    // Funktio, joka laskee taulukossa olevien henkilöiden määrän
    totalFriends: function () {
        let total = 0;
        for (let i = 0; i < this.allFriends.length; i++) {
            let friend = this.allFriends[i];
            total += friend.length;
        }
        return total;
    },

    // Funktio, joka laskee taulukossa olevien henkilöiden keksimääräisen iän
    averageAge: function() {
        let total = 0;
        for (let i = 0; i < this.allFriends.length; i++) {
            let friend = this.allFriends[i];
            total += friend.age() / this.allFriends.length;
        }
        return Math.floor(total);
    }
};


// Funktio, joka tulostaa valmiita henkilöitä taulukkoon
function startData() {
   let person1 = new Person('Aaltonen', 'Kalle', '050837562' , '1987');
   totalPeople.saveFriend(person1);

   let person2 = new Person('Virtanen', 'Leena', '050492231' , '1994');
   totalPeople.saveFriend(person2);

   let person3 = new Person('Lehtonen', 'Matti', '045867342' , '2000');
   totalPeople.saveFriend(person3);

   print()
}

// Tulostus funktio
function print() {
    let output = document.getElementById('people');
    output.innerHTML = '';
    document.getElementById('total').innerHTML = '';

    for (let i = 0; i < totalPeople.allFriends.length; i++) {
        let onePerson = totalPeople.allFriends[i];
        output.innerHTML += "<li onclick = 'printOne(" + i + ")'>" + onePerson.printPerson() + "</li>";
    }

    document.getElementById('total').innerHTML = 'Average age: ' + totalPeople.averageAge() + '<br>' + 'Number of friends: ' + totalPeople.totalFriends();

    document.getElementById('oneFriend').innerHTML = '';

}

// Funtio, joka tulostaa valitun henkilön tiedot yhden kaverin osioon
function printOne(index) {
    let friend = totalPeople.allFriends[index];

    document.getElementById('oneFriend').innerHTML = 
    friend.printPerson() + '<br>' + 
    'Phone: ' + friend.number + '<br>' + 
    'Birthyear: ' + friend.birthyear + '<br>' + 
    'Age: ' + friend.age() + 
    "<button onclick = 'remove(" + index + ")'>Remove</button>" + 
    "<button onclick = 'edit(" + index + ")'>Edit</button>";
}

// Henkilön poisto funktio
function remove(index) {
    totalPeople.removeFriend(index);
    print();
}

// Funktio, joka antaa muokata valitun henkilön tietoja
function edit(index) {
    let oneFriend = totalPeople.allFriends[index];
    document.getElementById('lastname').value = oneFriend.lastname;
    document.getElementById('firstname').value = oneFriend.firstname;
    document.getElementById('phone').value = oneFriend.number;
    document.getElementById('birth').value = oneFriend.birthyear;
    document.getElementById('index').value = index;

}

// Funktio, joka tallentaa uuden henkilön tiedot tai muokattavat tiedot
function save() {
    if (document.getElementById('index').value === '') {
        // new friend
        let friend = new Person(
            document.getElementById('lastname').value,
            document.getElementById('firstname').value,
            Number(document.getElementById('phone').value),
            Number(document.getElementById('birth').value)
        );
    totalPeople.saveFriend(friend);
    
    } else {
        // edit existing
        let i = Number(document.getElementById('index').value);
        let oneFriend = totalPeople.allFriends[i];

        oneFriend.lastname = document.getElementById('lastname').value;
        oneFriend.firstname = document.getElementById('firstname').value;
        oneFriend.number = document.getElementById('phone').value;
        oneFriend.birthyear = document.getElementById('birth').value;
    }

    print();
    cancel();

}

// Peruutus funktio, joka tyhjentää tekstikentät
function cancel() {
    document.getElementById('lastname').value = '';
    document.getElementById('firstname').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('birth').value = '';
    document.getElementById('index').value = '';
}