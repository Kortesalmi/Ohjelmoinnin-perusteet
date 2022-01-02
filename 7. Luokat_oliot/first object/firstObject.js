// Create a car object with plate number OOP-001
let car = {
    plateNumber: 'OOP-001',
    currentSpeed: 0,
    printInfo() {
        document.write('Car with the register number ' + this.plateNumber + ' has the speed ' + this.currentSpeed + ' km/h.');
    },
    setCurrentSpeed(speed) {
        this.currentSpeed = speed;
    },
    checkCurrentSpeed() {
        return this.currentSpeed;
    },
    getPlateNumber() {
        return this.plateNumber;
    }
}

// Set car's speed to 120 km/h.
car.currentSpeed = 120;

// Print out the info about the car (plate number and current speed).
car.printInfo()

// Create another instance with different data
let car2 = {plateNumber: 'OOP-002', currentSpeed: 60}

car2.currentSpeed = 60;
// Print out the info
document.write('<p>Car with the register number ' + car2.plateNumber + ' has the speed ' + car2.currentSpeed + ' km/h.');
