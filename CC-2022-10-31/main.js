// Description:

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]
// Fundamentals
// Arrays


let nums = [1,23,23,4,2,4]

function maps(x){
    return x.map(e => e*2)
  
  }

maps(nums)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Instructions
// Output
// Past Solutions

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, 
// representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.


// new learn : Math.abs() useful for making - +?

function difference(a,b){
    return Math.abs(  a.reduce((acc,curr) => acc *= curr, 1)  - b.reduce((acc,curr) => acc *= curr, 1))
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Instructions
// Output

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
    return nums == null ? [] : nums.sort((a,b) => a-b)
    }

        