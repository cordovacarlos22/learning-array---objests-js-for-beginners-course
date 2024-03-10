//   numbers array 
let numbers = [2, 5, 6, 4, 10, 24, 40, 7];
// string type array
let beers = ["pilsener", "golden", "regia", "corona", "modelo"] // beers array  
let wines = ["stela rosa", "San Antonio", "Cabernet"]; // wines array


// -----=== how to access a particular positions in arrays ===----
// returns length of array 
console.log("Array length", numbers.length)
// gets a particular number in this case 6 
console.log("get a particular number", numbers[2])
// gets last number of array in this case 7  
console.log("get last number of array", numbers[numbers.length - 1])
// gets a particular number in this case  4
console.log("get a particular number(use this one better)", numbers.at(3))
// gets last number of array in this case 7 
console.log("get last number of array", numbers.at(-1))

// -----=== how to linear search in arrays one by one   ===----

// prints each number inside numbers array one by one in a  increasement
for (let i = 0; i < numbers.length; i++) {
  console.log("number index increasement", numbers[i]);

}

// prints each number inside numbers array one by one decreasement 
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log("number index decreasement", numbers[i]);
}






// -----=== arrays mutable or immutable ===----

//! array mutable methods (changes the original array)

// adds element to beers array at the end of it 
beers.push("Heineken");

// adds element to beeers array at the begining of it 
beers.unshift("Suprema");

// adds element in a specific index in this case in between index 1 and 2 by selecting index,0 means dont want to eliminate anyting,new value
beers.splice(2, 0, "Cadejo");


// also same method can be use to eliminate items inside array. 3 means it will start index 2 & 1 means it will eliminate only the 1 index after index 2 in this case golden
beers.splice(3, 1, "Fullers");

// eliminates last element in the array and returns element that has been eliminated
let eliminateLastElementInArray = beers.pop();
console.log("Eliminated last element in the array", eliminateLastElementInArray); // logs the element that has been eliminated

// eliminates last element in the array and returns element that has been eliminated
let eliminateFirstElementInArray = beers.shift();
console.log("Eliminated first element  in the array", eliminateFirstElementInArray); // logs the element that has been eliminated

//! immutable methods (does not changes orginal array makes a copy of it)
// joints 2 arrays together beers and wines
const alcoholicDrinks = beers.concat(wines);
alcoholicDrinks.push("rioja");


// -----=== Helper functions ===----

// function to show number in a incresement order 
function printArr(arr) {
  // prints each number inside numbers array one by one in a  increasement
  for (let i = 0; i < arr.length; i++) {
    console.log("number index increasement", arr[i]);

  };
};
// console logs beers names in a incresement order 
printArr(beers);

// this function will print  on the dom 
const showDom = (element, arr) => {
  document.querySelector(`.${element}`).innerHTML = ""

  for (let i = 0; i < arr.length; i++) {
    document.querySelector(`.${element}`).innerHTML += `
    <div>${arr[i]}</div>
    `
  };
};

// prints beers inside array1 class on the dom
showDom('array1', beers);
// prints beers and wines arrays elements
showDom('array2', alcoholicDrinks);






