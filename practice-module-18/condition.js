var price = 2000;

if(price >= 3000){
    //10% discount offer
    const discount = (1000 * 10)/100;
    const payAmount = price - discount;
    console.log(payAmount);

}else if(price > 1000){
    //5% discount offer
    const discount = (1000 * 5)/100;
    const payAmount = price - discount;
    console.log(payAmount);

}else{
    console.log(price)
}