// call()
const person = {
    firstName : 'Becca',
    lastName: 'Toni',
    fullName(){
           return `${this.firstName} ${this.lastName}`
    }
}

console.log(person.fullName());
// by the above example the this keyword refers to the person object
// but what if we have multiple objects?

const person2 = {
    firstName:'Oli',
    lastName: 'Mugenzi'
}

const person3 = {
    firstName:'Bebi',
    lastName:'Love'
}

console.log(person.fullName.apply(person2));
console.log(person.fullName.apply(person3));



const obj = {name: 'John'};

let greeting = function(a,b){
    return `${a} ${this.name}. ${b}`;
}

console.log(greeting.apply(obj, ['Hello', 'How are you?']));
// call method takes arguments separately but the apply method takes arguments as an array

const nums = [2,3,5,67,4];

console.log(Math.max.apply(null, nums))


// the bound function creates a new functoion that is bound on the given original function object
