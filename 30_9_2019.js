//Arrow Function
/*-> =>(fat arrow function)
    always has return value*/ 

let sum = (x,y) => x+y;

console.log(sum(1,2))
//Object Destructuring
const info = {
    name: 'Spencer',
    company: 'Handlebar Labs',
    location: {
    city: 'Nashville',
    state: 'Tennessee',
    },
};
const { name, location } = info;
const { city, state } = location;
console.log(location)

