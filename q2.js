/*
Write a function that takes an object as input and returns
 a new object with all the key-value pairs reversed
  (keys become values and values become keys)
const originalObj = {aa: "1", bf: "3", cq: "5"};
const reversedObj = reverseObject(originalObj);
// console.log(reversedObj); 
output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected output

*/

const reversedObject = (obj) => {
     let arr = Object.entries(obj);
     let newObj = {}

     for (const [key, value] of arr) {
        newObj[value] = key;
     }

    console.log(newObj);
}

const originalObj = {aa: "1", bf: "3", cq: "5"};
const reverseObj = reversedObject(originalObj);
console.log(reverseObj); 


// other alternative
// const reversedObject = (obj) => {
//     let arr = Object.entries(obj);
//     // let newObj = {}

//      for (const [key, value] of arr) {
//         // newObj[value] = key;
//         obj[value] = key;
//         delete obj[key]
        
//      }

//     return obj;
// }

// const originalObj = {aa: "1", bf: "3", cq: "5"};
// const reverseObj = reversedObject(originalObj);
// console.log(reverseObj); 

