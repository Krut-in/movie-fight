import * as lab1 from "./lab1.mjs";

//TODO: Write and call each function in lab1.js 5 times each, passing in different input

// TODO: Question 1

console.log(lab1.questionOne(1)) // returns and then outputs: 1
console.log(lab1.questionOne(0)) // returns and then outputs: 0
console.log(lab1.questionOne(-1)) // returns and then outputs: 0
console.log(lab1.questionOne(7)) // returns and then outputs: 13
console.log(lab1.questionOne(20.5)) // returns and then outputs: 6765


// TODO: Question 2
console.log(lab1.questionTwo([5.5, 3,10]));
// // returns and then outputs: { '3': true, '10': false, '5.5': false }

console.log(lab1.questionTwo([2]));
// // returns and then outputs: {2: true}

console.log(lab1.questionTwo([2, 7, 9, 1013]));
// // returns and then outputs: {2: true, 7: true, 9: false, 1013: true}

console.log(lab1.questionTwo([]));
// // returns and then outputs: {}

console.log(lab1.questionTwo());
// // returns and then outputs: {}


// TODO: Question 3
console.log(lab1.questionThree("The quick brown fox jumps over the lazy dog."));
// returns and then outputs: {consonants: 24, vowels: 11, numbers: 0, spaces: 8, punctuation: 1, specialCharacters: 0}

console.log(
  lab1.questionThree(
    "One day, the kids from the neighborhood carried my mother's groceries all the way home. You know why? It was out of respect."
  )
);
// returns and then outputs: {consonants: 61, vowels: 36, numbers: 0, spaces: 22, punctuation: 5, specialCharacters: 0}

console.log(lab1.questionThree(""));
// returns and then outputs: {consonants: 0, vowels: 0, numbers:0, spaces: 0, punctuation: 0, specialCharacters: 0}

console.log(lab1.questionThree("q.. . . . .w..e.r."));
// returns and then outputs: {consonants: 3, vowels: 1, numbers:0, spaces: 0, punctuation: 7, specialCharacters: 0}

console.log(lab1.questionThree("-10.012.0!$"));
// returns and then outputs: {consonants: 0,vowels: 0,numbers: 6,spaces: 0,punctuation: 4,specialCharacters: 1}


// // TODO: Question 4
console.log(lab1.questionFour([1, 1, 1, 1, 1, 1]));
// //returns and then outputs: [1]

console.log(lab1.questionFour([1, "1", 1, "1", 2]));
// // returns and then outputs: [1, '1', 2]

console.log(lab1.questionFour([]));
// //returns and then outputs: []

console.log(lab1.questionFour(["",""," "]));
// //returns and then outputs: [ '', ' ' ]

console.log(lab1.questionFour(['11', 'lab1', 'lab1', 54, 5, 54, 'n']));
// //returns and then outputs: [ '11', 'lab1', 54, 5, 'n' ]