//   numbers array 
let numbers = [2,5,6,4,10,24,40,7];
// string type array
let beers = ["pilsener","golden","regia","corona","modelo"]

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



// function to show number in a incresement order 
function printArr(arr){
  // prints each number inside numbers array one by one in a  increasement
  for (let i = 0; i < arr.length; i++) {
    console.log("number index increasement", arr[i]);

  };
};
// console logs beers names in a incresement order 
printArr(beers);

// this function will print  on the dom 
const showDom = (element,arr)=>{
  document.querySelector(`.${element}`).innerHTML = ""

  for (let i = 0; i < arr.length; i++) {
    document.querySelector(`.${element}`).innerHTML +=`
    <div>${arr[i]}</div>
    `
  };
}
// prints beers inside array1 class on the dom
showDom('array1',beers);


