//   numbers array 
let numbers = [2, 5, 6, 4, 10, 24, 40, 7];
// string type array
let beers = ["pilsener", "golden", "regia", "corona", "modelo"] // beers array  
let beers3 = ["pilsener", "golden", "regia", "corona", "modelo"] // beers array  
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

// gets a particular element index  in the array by value
console.log("Get a particular element  index in the array by value", beers.indexOf("corona"))
console.log("Get a particular element  index in the array by value", numbers.indexOf(40))

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

// fills array  with same values  from index 0 to beers3 length
beers3.fill("Pilsener", 0, beers3.length);


//! immutable methods (does not changes orginal array makes a copy of it)
// joints 2 arrays together beers and wines by creating a new array
const alcoholicDrinks = beers.concat(wines);
// push rioja to alcoholicDrinks 
alcoholicDrinks.push("rioja");
//  creates new array from beers but selecting values from where to start and from where to finish it in this case it starts @ index 0 and finish @ index 4 
let beers2 = beers.slice(0, 4);




// -----=== Spread Operator in arrays ===----

// returns a sum of all number inside numbers array 
console.log("Sum", sum(...numbers));
// joint two array by using spread operator not concat function
let arr = [...numbers, ...beers];
// makes a copy of numbers array using spread operator
let numbers2 = [...numbers];
numbers2[4] = 5000; // sets number2 index  4 to 5000 without modifing numbers array
numbers2[6] = 0; // sets number2 index  6 to  0 without modifing numbers array



// -----=== Array of objects ===----

const beersObject = [
  {
    name: "Pilsener",
    price: 3.50,
    alcohol: 4.5
  }, {
    name: "Corona",
    price: 4.50,
    alcohol: 5.5
  }, {
    name: "Golden",
    price: 2.50,
    alcohol: 3.5
  }, {
    name: "Tecate",
    price: 8.50,
    alcohol: 6.5
  },
]


// -----===  First-Class and Higher-Order Functions in JavaScript ===----


//First-Class function
let sayHello = function () {
  console.log("Hello");
}
// sayHello(); 


// Higher-Order Functions 
function doSomething(f) {
  console.log("before");
  f();
  console.log("after");
}

doSomething(sayHello);


// -----===  Arrow Functions in JavaScript ===----

//Arrow Functions
let sayBye = () => {
  console.log("Bye");
}
sayBye();

let salute = (name) => console.log(`Hello ${name}`);

salute("carlos");




// -----===  For Each JavaScript ===----

beersObject.forEach((item, index) => {
  console.log("Items ", item);
  console.log("index ", index);

});


// -----===   JavaScript SORT return elements in order only works in array objects  ===----

// Javacript funtion that order  numbers  type elements only
function compareNumbersSmallestToBiggest(a, b) {
  return a - b;  //compares num a < b  and return them in order from smaller to biggest
}

numbers.sort(compareNumbersSmallestToBiggest) // orders numbers  from small to biggest
console.log("Returns numbers array in order", numbers) // Returns numbers array in order

// returns  beers filter   by price(lowest to expensive) 
// beersObject.sort((lowestPrice, biggestPrice) => lowestPrice.price - biggestPrice.price);
// console.log("returns beers by lowest price to biggest price", beersObject)

// Javacript funtion that order string type elements only

beersObject.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }

  return 0;
});



// -----===   JavaScript Find and filters a specific element   ===----
const findBeerByName = beersObject.find((beer) => beer.name === "Pilsener"); // find only first element that matches name Pilsener
console.log("Find Beer By name", findBeerByName);

const filterAllElements = beersObject.filter((beers) => beers.alcohol < 5); // finds all element with alcohol grade < 5 
console.log("Beers with alcohol grade < 5", filterAllElements);





// -----===   JavaScript every function   ===----
let findElementsByPrice = (e) => e.price > 3;
console.log("Every beer price > 2  : ", beersObject.every(findElementsByPrice)); // returns false not every beer price > 3

// -----===   JavaScript some function   ===----

console.log("Some beer price > 2  : ", beersObject.some(findElementsByPrice)); // returns false not every beer price > 3


// -----===   JavaScript Revert Array   ===----
alcoholicDrinks.reverse() // revers array order

// -----===   JavaScript  Map Function   ===----










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

// this function will print  on the dom 
const showDomObj = (element, arr) => {
  document.querySelector(`.${element}`).innerHTML = ""
  // -----===  For Of JavaScript ===----
  for (let e of arr) {
    document.querySelector(`.${element}`).innerHTML += `
    <div>${e.name} $${e.price} [${e.alcohol}]</div>
    `
  };
};

function sum(a, b, c, d, e, f, g, h) {
  return a + b + c + d + e + f + g + h
}

// prints beers inside array1 class on the dom
showDom('array1', beers);
// prints beers and wines arrays elements
showDom('array2', alcoholicDrinks);
// prints beers2  
showDom('array3', beers2);
// prints beers3 
showDom('array4', beers3);
// prints arr 
showDom('array5', arr);

// prints numbers
showDom('array6', numbers);

// prints numbers2 
showDom('array7', numbers2);

showDomObj('array8', beersObject);






