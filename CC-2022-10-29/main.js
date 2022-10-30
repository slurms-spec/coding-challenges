// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

 let geese =  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

 let bird = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
 


//  function filterOutGeese(birbs){
//         let birdsNoGeese = []

//         for(let i = 0; i<birbs.length; i++){
//             if(!geese.includes(birbs[i])){
//                 birdsNoGeese.push(birbs[i])
//             }
//         }
//         console.log( birdsNoGeese)
//  }

 //filterOutGeese(bird)  // (4) ['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish'] WIN




 // OR MORE SIMPLY ::


 let filteredBirds = bird.filter(e =>  !geese.includes(e))
// console.log(filteredBirds)  // (4) ['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish'] WIN






