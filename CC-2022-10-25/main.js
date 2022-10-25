// In this kata you will create a function that takes a list of non-negative
//  integers and strings and returns a new list with the strings filtered out.
// Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]



function filter_list(l) {
    return l.filter(e => typeof e == 'number')
  }

  /// easy sleezy




// ??? //




function descendingOrder(n){
    return n.toString().split('').sort((a,b) => b-a).join('')
  }


// doesnt pass the test.. 

// also didnt need to sort could have used sort normally then .reverse()


// suggested solution: only diff n has a plus at the start
function descendingOrder(n) {
    return +n.toString().split('').sort().reverse().join('');
  } 

// preceding plus?  <==== ' the unary plus operator converts its operand to Number type' 
// dont understand why the number had to be turned into a number.. JUST GOT IT

//BECAUSE THE RESULT IS A STRING!!!!!!!!!!WE MAKE IT A STRING SPLIT IT SORT IT PUT IT BACK ITS A STRING
//THE PLUS BEFORE MAKES THE RESULT OF THE WHOLE THING BACK TO NUMBER ITS LIKE
//I ONLY GOT IT WHEN I SAW A SOLUTION WRAPPED IN NUMBER( ) O, im doing it :)

// another solutions used parseInt=()?? no thanks

// return parseInt(n.toString().split("").sort().reverse().join(""));



// ?? //

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


// I DID THIS ONE !

function squareConCat(num){
    return +num.toString().split('').map(e => e*e).join('')
   
 }
 

 // PRETTY HAPPY WITH TODAYS OUTPUT LETS PUSH IT