// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!



// console.log("hello, Erin")


//  function removeEveryOther(arr){
//      console.log(arr.map((x, b) => {
//         if(b === 0 || b % 2 === 0){
//             x = "corn"
//         }
        
//      }))
//  }

//  removeEveryOther(["pork0", "pork1", "pork2", "pork3", "pork4"])

// pork0, pork2, pork4

//actual result:

// (5) [undefined, undefined, undefined, undefined, undefined]
// 0: undefined
// 1: undefined
// 2: undefined
// 3: undefined
// 4: undefined
// length: 5
// [[Prototype]]: Array(0)


// function removeEveryOther(arr){
//          arr.filter(function(element, index) {
//              let newArray = index % 2=== 0
//              console.log(newArray)
//               })

             
//          }






//  let array = ['pork0', 'pork1', 'pork2', 'pork3', 'pork4']

//  removeEveryOther(array)


// let raceNumber = Math.floor(Math.random() * 1000)

// console.log(raceNumber)


// let registeredEarly = true

// let runnerAge = 39

// if(runnerAge >  18 && registeredEarly == true){
//         raceNumber += 1000
// }


// console.log(raceNumber)

// if(runnerAge > 18 && registeredEarly == true){
//     console.log(`Racer number ${raceNumber} you will race at      9:30am`)
//      } else if(runnerAge > 18 && !registeredEarly){
//       console.log(`Racer number ${raceNumber} you will race at 11:00am`)
//     } else if(runnerAge < 18){
//       console.log(`Racer ${raceNumber} you will race at 12:30pm`)
//     }


// if (walkSignal === 'Walk') {
//     console.log('You may walk!'); 
// } else {   
//     console.log('Do not walk!');
// }


// let walkSignal = "farts"
// walkSignal === "walk" ? console.log("you may walk") : console.log("do not walk")
