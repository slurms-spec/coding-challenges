// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// function makeArray(num){
//   let integers = []
//   for(let i = 1; i<= num; i++){
//       integers.push(i)
//   }
//   return integers.reverse()
// }


// console.log(makeArray(5))  // works 

function makeArray(num){
  let integers = []

  for(let i = num; i > 0; i--){
    integers.push(i)
  }

  return integers
}

//console.log(makeArray(5)) // works too loop goes backwards 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Instructions
// Output

// If you can't sleep, just count sheep!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: 
// "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function murmer(num){
  let murmer = ''

  for(let i = 1; i <= num; i++){
    murmer +=`${i} sheep...`
  }

  return murmer
}

//console.log(murmer(3)) works

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Instructions
// Output

// You're writing code to control your town's traffic lights. You need a function to handle each
//  change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the
//  light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.



// function updateLight(current){
//   if(current === 'green'){
//     return 'yellow'
//   }else if(current === 'yellow'){
//     return 'red'
//   } else return green 
// }                                           works


// one line:

function updateLight(current){
  return current === 'yellow'? 'red' : current === 'red' ? 'green' : 'yellow'
}

console.log(updateLight('red')) /// works


// now write an object using literal notation : 3 properties 3 methods

let cat = {}

cat.name = 'sidisi'
cat.smell = true
cat.colour = 'black'

cat.makeNoise = function(){
  console.log('RAOGAGHHHHH')
}

cat.fight = function(){
  console.log('scratch')
}

cat.disruptDinner = function(){
  console.log('scratch scratch DUMP')
}

//

let sidisi = {
  smell: true,
  color: 'black',

  fight() {
    console.log(`SCRATCH`)
  },



  

}

// constructor : 

function MyCats(name, color, smell){
  this.name = name,
  this.color = color,
  this.smell = smell,

  this.fight = ()=> {
    console.log('scritch')
  }
}

let Sidisi = new MyCats(sidisi, black, true )


// class 

class Makecat{
  constructor(``)
}