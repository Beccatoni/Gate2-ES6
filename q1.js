/*  Write a function in JavaScript that takes an array of strings 
combined with numbers as input and returns 
a new array containing the original string and the extracted 
numeric values from those strings. 

const input = ["Hello123", "World456", "49", "Another789"];
const output = extractWordsAndNumbers(input);

// console.log(output);
output: [  "Hello",123, "World", 456, 49, "Another", 789] // Expected output


*/
const extractWordsAndNumbers = (input) => {
   
    let newArr = []
    for (const str of input) {
       let alphs = [];
       let nums = []
        let arrStr = str.split('');
        arrStr.forEach( element => {
            if(Number(element)){
                nums.push(element);
            }
            else{
                alphs.push(element);
            }
         
          });
        
        
        if(alphs.length !== 0){
          newArr.push(alphs.join(''))
        }
        if(nums.length !== 0 ){
          newArr.push(parseInt(nums.join('')));
        }
         
    }
    return(newArr);
}

console.log(extractWordsAndNumbers(["Hello123", "World456", "49", "Another789","hi"]));


