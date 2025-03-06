class vehicle{
    constructor(name, price, color){
        this.name = name;
        this.price = price;
        this.color = color;
    }

    details(){
        console.log(`The name of the vehicle is ${this.name}. The price of the vehicle is ${this.price}. The color of the vehicle is ${this.color}.`);
    }
}

const car = new vehicle("Toyota", 25000, "black");
console.log(car);
car.details();

class bike extends vehicle{
    constructor(name, price, color, gears){
        super(name, price, color);
        this.gears = gears;
    }
}

const honda = new bike("Honda", 5000, "red", 4);
console.log(honda);
honda.details();