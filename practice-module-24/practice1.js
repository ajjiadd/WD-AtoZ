const numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10];

// for(let i = 0; i < number.length; i++){
//     console.log(number[i]);
// };


//simplified version of for loop
for(let number of numbers){
    // console.log(number);
}


//practice 2
const products = [
    {id: 1, name: 'laptop', price: 1000},
    {id: 2, name: 'phone', price: 500},
    {id: 3, name: 'watch', price: 100},
    {id: 4, name: 'headphones', price: 200},
    {id: 5, name: 'keyboard', price: 50},
    {id: 6, name: 'mouse', price: 30},
    {id: 7, name: 'monitor', price: 300},
];


function matchProduct(products, search){
    const matched = [];
    for(let product of products){
        //jodi product er name e search er value thake tahole matched array te push korbe
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchProduct(products, 'phone');
console.log(result);




