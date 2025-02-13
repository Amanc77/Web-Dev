const person = {
  name: "aman",
  great() {
    console.log(`hi , i am ${this.name}`);
  },
};

person.great();

const greteperosn = person.great;
greteperosn();

const boundgreet = person.great.bind({ name: "lala" });

boundgreet(); // use bind for copy function.
