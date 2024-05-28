// objects 
// key-values pairs in curly braces

const myObjv = {name: 'Dave'};

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies : ['Eat', 'Sleep', 'Code'],
    beverage: {
        morning:'Coffee',
        afternoon: 'Iced tea'
    },
    action(){
        return `Time for ${this.beverage.morning}`
    }
}

console.log(anotherObj.action());



const vehicle = {
    wheels:4,
    engine(){
        return `Vrrrooom`;
    }
}

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels)
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function(){
    return 'Whooooooh!';
}
console.log(car.engine());