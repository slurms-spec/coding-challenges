// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
//neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function neutralizing(comment){
   let commentArray = comment.split("")
   console.log(commentArray)
   let sansVowels = commentArray.filter( x => x != 'i' && x != 'e' && x != 'u' & x != 'a' && x != 'o')
    sansVowels =sansVowels.join('')
    console.log(sansVowels)
    

}

    neutralizing('bummer you stink erin')





























// function disemvowel(str) {

//        let strArray = Array.from(str)

//        console.log(strArray)
        
//        let newStr = ''
//       strArray.forEach(x => {
            
//           if(x != "a" && x != "o" && x != "u" && x != "i" && x != "e"){
//             newStr += x
//             return newStr
            
//           }
       
//           console.log(newStr)
//       })

     


//     //return str;
//   }

//     disemvowel("pork and lots of it")

