const person = {
    firstName: 'John',
    lastName: 'Doe',
    salary: 1500,
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


Object.seal(person);
person.salary = 2000;
person.age = 25;
console.log(person);

Object.freeze(person);  
person.salary = 2500;
person.age = 30;
console.log(person);
