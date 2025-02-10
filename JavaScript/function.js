//function is block of code which is used to do specific task.

function grate() {
  console.log("you are grate");
}

grate();

function maketea(teaname) {
  return `making ${teaname}`;
  //console.log(test);
}

let teaOrder = maketea("black tea");
console.log(teaOrder);

//take tea type.

function ordertea(typetea) {
  function confirmOrder() {
    return `order confirm for ${typetea}`;
  }
  return confirmOrder();
}

let ord = ordertea("my chai");
console.log(ord);

// const calculateTotal = (prise, item) => {
//   return prise * item;
// };

const calculateTotal = (prise, item) => prise * item;

let tcast = calculateTotal(500, 100);
console.log(tcast);
