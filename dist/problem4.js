"use strict";
{
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year.toString()}`);
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            console.log(`Model: ${this.model}`);
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
    myCar.getModel(); // Output: "Model: Corolla"
}
