//  Destructure object to extract values
const man = {
    name: 'Tom',
    age: 25,
    city: 'California',
    salary: 25000
}
const { name, age, city, salary } = man;
console.log(name, age, city, salary);


// in the case of array
const friends = ['Sakib Khan', 'Arman Khan', 'Salman Khan', 'Shahrukh Khan'];
const [chotoFriend, nextFriend] = friends;
console.log(chotoFriend, nextFriend);
