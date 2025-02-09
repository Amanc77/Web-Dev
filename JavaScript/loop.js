let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}

console.log(sum);

//2
let contdown = [];
let j = 5;
while (j >= 0) {
  // contdown.push(j);
  contdown.unshift(j);
  j--;
}
console.log(contdown);

//enter a teaname untill user says stop;

// let teacollention = [];
// let tea;
// do {
//   // tea = prompt(`enter tea name and type "stop" for end`); //prompt works only on browser not in node

//   if (tea !== "stop") {
//     teacollention.push(tea);
//   }
// } while (tea !== "stop");

// //console.log(teacollention);

let total = 0;
let k = 1;
do {
  total = total + k;
  k++;
} while (k < 4);
console.log(total);

let arr = [2, 4, 6];
for (let m = 0; m < 3; m++) {
  arr[m] *= 2;
}

console.log(arr);

let num = [4, 3, 2, 4, 433, 53, 34, 53, 53, 6, 344, 355];
let num2 = [];
for (let i = 0; i < num.length; i++) {
  if (num[i] === 344) {
    break;
  }
  if (num[i] === 53) {
    continue;
  }
  num2.push(num[i]);
}

console.log("printing num2 : " + num2);

num3 = [];
for (const i of num) {
  if (i > 20) {
    num3.push(i);
  }
}

console.log(num3);

let lang = {
  Hindi: 557,

  english: 44234,

  cpp: 3454,

  python: 354534,
};

let mylang = {};

for (const key in lang) {
  if (key === "english") {
    continue;
  }
  mylang[key] = lang[key];
}

console.log(mylang);

num.forEach((i) => {
  console.log(i);
});

let ar = [2, 5, 7, 9];
let doublednum = [];

ar.forEach((i) => {
  if (i === 7) {
    return;
  }
  doublednum.push(2 * i);
});

console.log(doublednum);

let arr4 = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];

let mytea = [];

for (const teaname of arr4) {
  if (teaname.length >= 10) {
    mytea.push(teaname);
  }
}
console.log(mytea);
