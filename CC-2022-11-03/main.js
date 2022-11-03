
// Instructions
// Output

// Write a function that takes an array of numbers and returns t
//he sum of the numbers. The numbers can be negative or non-integer. 
//If the array does not contain any numbers then you should return 0.
// Examples

let Input = [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

function sum(arr){
    return arr.sum((total,currentValue) => total+=currentValue,0)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Instructions
// // Output

// // Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// // Write a function which takes a list of strings and returns each line prepended by the correct number.

// // The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// // Examples: (Input --> Output)

// // [] --> []
// // ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

let lines = ['my name is Erin', 'my name is jone', 'my name is squidly']

 let numbered = function(arr){
    return lines.map((e,i) => `${i+1}: ${e}` )
 }

 console.log(numbered(lines))  ///////// wooo!!!

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






