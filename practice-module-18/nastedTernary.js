let price = 1000;
const isLeader = true;


//General condition
/*
if(isLeader === true){
    if(price >= 1000){
        console.log(price/2);
    }else{
        console.log(price = 0);
    }
}else{
    console.log(price + 100);
}
 */


//nested Ternary
price = isLeader === true ? price >= 1000 ? price = price/2 : price = 0 : price + 100;
console.log("Pay of Amount:",price)