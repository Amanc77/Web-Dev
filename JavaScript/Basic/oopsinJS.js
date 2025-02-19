function tea(type) {
  this.type = type;
  this.discribe = function () {
    return `this is a cup of ${type}`;
  };
}

let mytea = new tea("black");
console.log(mytea, mytea.discribe());

//

function animal(species) {
  this.species = species;
}

animal.prototype.sound = function () {
  return `${this.species} make a sound`;
};

let dog = new animal("Dog");
console.log(dog.sound());

let cat = new animal("cat");
console.log(cat.sound());

//inheritance
class vehicle {
  constructor(modal, make) {
    this.modal = modal;
    this.make = make;
  }

  start() {
    return `${this.modal} is a car from ${this.make}`;
  }
}

class car extends vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let mycar = new car("toyota", "corolla");

console.log(mycar.start());
console.log(mycar.drive());

//encapsulation

class bankaccount {
  #balance = 10;

  diposit(ammount) {
    this.#balance += ammount;
    return this.#balance;
  }
  getbalnce() {
    return `$ ${this.#balance}`;
  }
}

let account = new bankaccount();

console.log(account.getbalnce());

//abstraction
class coffemachine {
  start() {
    return `starting the machine`;
  }

  brewcoffe() {
    return `brewing the coffe`;
  }
}

let mychine = new coffemachine();
console.log(mychine.brewcoffe());

//polymorphism

class bird {
  fly() {
    return `flying.....`;
  }
}

class penguin extends bird {
  fly() {
    return `penguen can't fly`;
  }
}

let bif = new bird();
let png = new penguin();

console.log(png.fly());
console.log(bif.fly());

class calculator {
  static add(a, b) {
    // by using static keyword we can't access this function
    return a + b;
  }
}

let cal = new calculator();
console.log(calculator.add(4, 3));
