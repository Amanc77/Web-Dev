function sayhello() {
  console.log(`i would like to say namste`);
}

console.log("Hello");

setTimeout(() => {
  sayhello();
}, 5000);

//that is closer.
function outer() {
  let a = 5;
  return function () {
    a++;
    return a;
  };
}

let incriment = outer();

console.log(incriment());

console.log(incriment());

console.log(incriment());
