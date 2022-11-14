

// Instructions
// Output
// Is the string uppercase?
// Task

// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase 
// letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

let string = 'ALL CAPITALS YOU FEOOL'
let lowString = "All are NOT capitals here"

function testCaps(str){
  let string = str.split(' ').join('').split('')
    
      for(let i =0 ; i < string.length; i++){
           if(string[i] === string[i].toUpperCase()){
            return 'true'
           }
      }
}

console.log(testCaps(string))