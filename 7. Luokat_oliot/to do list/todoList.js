// List-luokka
class List {
    #tasks;

    // Luokan konstruktori
    constructor() {
        this.#tasks = new Array();
    }

    // Uuden taskin lisäämismetodi
    addNewTask(name) {
        let newTask = new Task (name);
        // Lisätään luodun olion nimi ul:n
        document.getElementById('listUL').innerHTML += '<tr><td>' + newTask.getName() + ' (Date created: ' + newTask.getDateCreated() + ')</td> </tr>';
        // Lisätään luotu olio arrayhyn
        this.#tasks.push(newTask);
    }
    // Taskin poistamismetodi
    removeTask(index) {
        // Poista olio arraysta
        this.#tasks.splice(index, 1);
        this.printList();
    }
    // Listan tulostus -metodi
    printList() {
        // Tyhjennä table
        document.getElementById('listUL').innerHTML = '';
        // Loopataan taskit läpi
        for (let i = 0; i < this.#tasks.length; i++) {
            // Lisää rivi tableen käsiteltävänä olevan olion nimi ja luontipäivämäärä ul:n
            document.getElementById('listUL').innerHTML += '<tr><td>' + this.#tasks[i].getName() + '</td><td>(Date created: ' + this.#tasks[i].getDateCreated() + ')</td><td><button onclick="todoList.removeTask(' + i + ')">Remove</button></td></tr>';
        }
    }
}
let todoList = new List();

// Tapahtumakäsittelijä lisää-painikkeelle
document.getElementById('addButton').onclick = function() {
    // Kutsutaan List-luokan addNewTask-metodia
    todoList.addNewTask(document.getElementById('taskName').value);  
    todoList.printList();
}

// Task-luokka
class Task {
    #name;
    #deadline;
    #dateCreated;

    // luokan konstruktori
    constructor(name) {
        this.#name = name;
        let currentDate = new Date();
        this.#dateCreated = currentDate;
    }
    // name-propertyn getter
    getName() {
        return this.#name;
    }
    // name-propertyn setter
    setName(name) {
        this.#name = name;
    }
    // deadline-propertyn getter
    getDeadline() {
        return this.#deadline;
    }
    // deadline-propertyn setter
    setDeadline(deadline) {
        this.#deadline = deadline;
    }
    // dateCreated-propertyn getter
    getDateCreated() {
        return this.#dateCreated;
    }
    // dateCreated-propertyn setter
    setDateCreated(dateCreated) {
        this.#dateCreated = dateCreated;
    }
}


