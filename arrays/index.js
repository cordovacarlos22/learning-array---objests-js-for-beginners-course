// array 
let numbers = [2,5,6,4,10,24,40,7];

// -----=== how to access a particular positions in arrays ===----
// returns length of array 
console.log("Array length",numbers.length) 
// gets a particular number in this case 6 
console.log("get a particular number",numbers[2])
// gets last number of array in this case 7  
console.log("get last number of array",numbers[numbers.length -1 ]) 
// gets a particular number in this case  4
console.log("get a particular number(use this one better)",numbers.at(3)) 
// gets last number of array in this case 7 
console.log("get last number of array", numbers.at(-1)) 

// -----=== how to linear search in arrays one by one   ===----

// prints each number inside numbers array one by one in a  increasement
 for (let i = 0; i < numbers.length; i++) {
   console.log("number index increasement", numbers[i]);
  
 }

// prints each number inside numbers array one by one decreasement 
for (let i = numbers.length -1 ; i >= 0; i--) {
  console.log("number index decreasement", numbers[i]);

}


