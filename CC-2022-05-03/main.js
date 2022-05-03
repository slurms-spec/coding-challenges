// Bob needs a fast way to calculate the volume of a cuboid with three values: length,
//  width and the height of the cuboid. Write a function to help Bob with this calculation.


// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//         return length * width * height
//     }
// }


// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n){
   
   // return String(n).split('').map(x).reverse().join('')


   let string = String(n)
    stringSplit = string.split('').reverse().join('')
    console.log(stringSplit)
  


    //console.log(string)

}

digitize(1234567)


