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


const band = {
    vocals: 'Robert Plant',
    guitar: 'Jimmy Page',
    bass: 'John Paul Jones',
    drums: 'John Bonham'
};

console.log(Object.keys(band));
console.log(Object.values(band));


// loops to help us iterate over an objects
for (const job in band) {
    console.log(`On ${job}, it's${band[job]}`)
}

// delete an method or a property
delete band.drums;
console.log(band.hasOwnProperty('drums'));


// destructuring objects

const {guitar:myVariable} = band;
console.log(myVariable);
// console.log(myBass); error


function sings({vocals}){
    return`${vocals} sings!`;
}
console.log(sings(band));