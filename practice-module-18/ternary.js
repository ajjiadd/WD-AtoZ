const age = 14;

// Ternamy operation or if-else short
// CONDITION ? DO SOMETHING WHEN CONDITION TRUE : DO SOMETHING WHEN CONDITION FALSE;
age >= 18
  ? console.log("You have ID Card")
  : console.log("You don't have ID card!"); //ex-1

//ex-2
let price = 500;
const isLeader = true;

price = isLeader === true ? 0 : price + 100; // using TERNARY
console.log(price);

//ALTERNATIVE
if (isLeader === true) {
  price = 0;
  console.log(price);
} else {
  price = price + 100;
  console.log(price);
}
