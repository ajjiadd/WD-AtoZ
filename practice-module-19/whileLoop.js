let count = 1;
const fruits = ["Apple", "Orange", "Pineapple", "Banana", "Mango", "Strawberry", "Watermelon", "Grapes", "Peach", "Cherry"];

//example-1
while (count < 10) {
    // Print the current count value
    console.log(count, "Jiad");
    count++
}

console.log("------------------exit new start---------------------");


//example-2
let num = 1;
let sum = 0;
while(num <= 20){
    sum = sum + num
    console.log(num+" sum- "+sum)
    num++
}


console.log("------------------exit new start---------------------");


let evNum = 1;
while(evNum <= 20){
    if(evNum % 2 == 0){
        console.log("Even Number = " + evNum);
    }
    evNum++;
}
