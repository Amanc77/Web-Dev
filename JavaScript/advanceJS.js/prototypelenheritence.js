function Person(name) {
  this.name = name;
}

Person.prototype.great = function (name) {
  console.log(`Hello, my name is ${this.name}`);
};

let aman = new Person("Aman Kumar");
aman.great();
