class product{
    constructor(name, price, color){
        this.name = name;
        this.price = price;
        this.color = color;
    }

    details(){
        console.log(`The name of the product is ${this.name}. The price of the product is ${this.price}. The color of the product is ${this.color}.`);
    }
}

const iphone = new product("iphone 12", 1200, "black");
console.log(iphone);
iphone.details();
const samsung = new product("Samsung S21", 1000, "white");
console.log(samsung);
samsung.details();
const xiaomi = new product("Xiaomi Redmi 9", 200, "black");
console.log(xiaomi);
xiaomi.details();
