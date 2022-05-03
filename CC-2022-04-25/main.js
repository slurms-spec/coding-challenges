// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


// function removeEveryOther(arr){
  
//     return arr.filter((e, i) => i === 0 || i % 2 === 0)





    
// Dogs

// Complete the following program to add the definition of the Dog class.

//     Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here

// class Dog {
//         constructor(name, species, size) {
//             this.name = name
//             this.species = species
//             this.size = size
//         }

//             bark(){ 
//             if(this.size > 60){
//                 return "Grr! Grr!"
//             } else {
//                 return "woof! woof!"
//             }
//         }
// }




// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);



// class Character {
//     constructor(name, health, strength) {
//       this.name = name;
//       this.health = health;
//       this.strength = strength;
//       this.xp = 0; // XP is always zero for new characters
//       this.coins = 10
//       this.keys = 1

//     }
//     // Attack a target
//     attack(target) {
//       if (this.health > 0) {
//         const damage = this.strength;
//         console.log(
//           `${this.name} attacks ${target.name} and causes ${damage} damage points`
//         );
//         target.health -= damage;
//         if (target.health > 0) {
//           console.log(`${target.name} has ${target.health} health points left`);
//         } else {
//           target.health = 0;
//           const bonusXP = 10;
//           this.coins += target.coins
//           this.keys += target.keys
//           console.log(
//             `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.coins} coins and ${target.keys} key(s)`
//           );
//           this.xp += bonusXP;
//           target.coins = 0
//           target.keys = 0
//         }
//       } else {
//         console.log(`${this.name} can't attack (they've been eliminated)`);
//       }
//     }
//     // Return the character description
//     describe() {
//       return `${this.name} has ${this.health} health points, ${this
//         .strength} as strength and ${this.xp} XP points, ${this.coins} gold coins and ${this.keys} key`;
//     }
//   }
  
//   //Now we can introduce a monster in the game and make it fight our players. Here's the rest of the final code of our RPG.
  
//   const aurora = new Character("Aurora", 150, 25);
//   const glacius = new Character("Glacius", 130, 30);
  
//   console.log("Welcome to the adventure! Here are our heroes:");
//   console.log(aurora.describe());
//   console.log(glacius.describe());
  
//   const monster = new Character("Spike", 40, 20);
//   console.log("A wild monster has appeared: it's named " + monster.name);
  
//   monster.attack(aurora);
//   monster.attack(glacius);
//   aurora.attack(monster);
//   glacius.attack(monster);
  
//   console.log(aurora.describe());
//   console.log(glacius.describe());


class Bank{
    constructor(name, balance, credit) {
        this.name = name
        this.balance = balance
        this.credit = credit
    }

    describe(){
        return "owner: ${name}, balance ${balance}"
    }
    

}

    let seanAcc = new Bank('Sean', 0, 0)
    let bradAcc = new Bank('Brad', 0, 0)
    let georgesAcc = new Bank('Georges', 0, 0)

    console.log(seanAcc)

    let accArray = [seanAcc, bradAcc, georgesAcc]
    accArray.seanAcc.




