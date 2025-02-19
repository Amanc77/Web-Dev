//checking any condition  will give either true or false . true = 1 , false = 0 ;

let n1 = 5;
let n2 = 13;

if (n1 < n2) {
  console.log(n2 + " is grater ");
} else {
  console.log(n1 + " is grater ");
}

let score = 33;
console.log(typeof score);
if (typeof score == "number") {
  console.log("yep this is write score ");
}

let a = [undefined];

if (a.length == 0) {
  console.log("array is empty");
} else {
  console.log("array is not empty");
}

//some array operation

let topcities = ["new delhi", "noida", " new yark", " bombey"];

let hardcopy = [...topcities];

let citi2 = [", adf", "dfd", "dfd"];

//let combine = topcities + citi2; // its type is string.

let combine = topcities.concat(citi2); //this type is array.
console.log(combine);

console.log(topcities);
console.log(hardcopy);

let islistexist = topcities.includes("new delhi");
console.log(islistexist);

let hcopy = topcities.slice();
console.log(hcopy);

// shift remove first eliment in array
// unshift add some element in starting point.

//sum of number

let sum = 0;
let i = 0;
while (i <= 100) {
  sum += i;
  i++;
}

console.log(sum);
