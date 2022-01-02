// Create a car class according to the following UML class diagram
class Car {
    #model;
    #plateNr;
    #maxSpeed;
    #currentSpeed = 0;
    #fuelCapacity;
    #remainingFuel;

    constructor(plateNumber) {
        this.#plateNr = plateNumber;
    }

    setCurrentSpeed(targetSpeed) {
        this.#currentSpeed = targetSpeed;
    }

    checkCurrentSpeed() {
        return this.#currentSpeed;
    }

    getPlateNumber() {
        return this.#plateNr;
    }

}
let car = new Car('OOP-001');
car.setCurrentSpeed(120);
document.write(car.getPlateNumber() + ' ');
document.write(car.checkCurrentSpeed() + 'km/h ');

let car2 = new Car('OOP-002');
car2.setCurrentSpeed(10);
document.write(car2.getPlateNumber() + ' ');
document.write(car2.checkCurrentSpeed() + 'km/h ');
