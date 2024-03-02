export const questionOne = index => {
  // Implement question 1 here

  // To implement the fibonacci sequence, we need to use a recursive function
  //  Input for the given function is an index, or number, from where the sequence will start

  let answer; // Storing the result into answer
  index = Math.floor(index); // converting a float to normal integer

  if (index < 1) {
    // The Fibonacci of any number less than 1 is 0
    answer = 0;
  } else if (index === 1) {
    // The Fibonacci Value of 1 is 1
    answer = 1;
  } else {
    // The Fibonacci value of all other numbers is the sum of the previous two Fibonacci numbers
    answer = questionOne(index - 1) + questionOne(index - 2);
  }
  return answer; //return result
};

export const questionTwo = arr => {
  // Implement question 2 here

  const prime = 2; // The smallest prime number being 2

  let outputObj = {}; // Creation of an empty object to store our output

  // To check if the array provided as input is empty or absent
  if (!arr || arr.length < 1) {
    outputObj = {}; // Returning an empty object as no input is provided
  } else {
    for (const iterator of arr) {
      // Here iterator will be the each and every number of the array provided

      // Any number less than 2 will not be a prime number
      if (iterator < prime) {
        outputObj[iterator] = false;
      } else if (iterator % 1 !== 0) {
        // If the number is not a whole number, it will return false
        outputObj[iterator] = false;
      }
      // Any number equal to 2 will be a prime number
      else if (iterator == prime) {
        outputObj[iterator] = true;
      } else if (iterator >= prime) {
        // For every number greater than 2, we will need to check for each number between 2 and that number

        for (let index = 2; index < iterator; index++) {
          // suppose the number is 10, then we need to divide 10 by 2 to 9 and see if it's divisible by those numbers or not

          if (iterator % index == 0) {
            // If it's divisible by any of those one number, then it's said to be non-prime no
            outputObj[iterator] = false;

            // Thus we will break the whole loop and return false
            break;
          } else {
            // If it's not divisible by any of those smaller number, it's prime
            outputObj[iterator] = true;
          }
        }
      }
    }
  }

  // const keys = Object.keys(outputObj);
  // keys.forEach(key => parseInt(key));
  return outputObj; //return result
};

export const questionThree = str => {
  // Implement question 3 here

  // Declaring all the characters into consonants,vowels,numbers,punctuation,specialCharacters and spaces
  
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const vowels = ["a", "e", "i", "o", "u"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const punctuation = [
    "...",
    ".",
    ",",
    "?",
    "!",
    "'",
    '"',
    ":",
    ";",
    "-",
    "_",
    "{",
    "}",
    "[",
    "]",
    "(",
    ")",
  ];
  const ellipsis = ["..."];
  const specialCharacters = [
    "#",
    "$",
    "%",
    "&",
    "^",
    "@",
    "|",
    '"',
    "/",
    "~",
    "`",
    "<",
    ">",
    "+",
    "=",
  ];
  const spaces = [" "];

  // declaring empty output object
  let outputObj = {
    consonants: 0,
    vowels: 0,
    numbers: 0,
    spaces: 0,
    punctuation: 0,
    specialCharacters: 0,
  };

  str = str?.toLowerCase(); // To convert the whole string to lowercase and then compare those only if a valid str input is provided
  // the use of optional chaining was made to check if the string is undefined or not

  if (str == undefined || str == null || str.length < 1) {
    return outputObj;
  } else {
    // To iterate through the whole string step by step
    for (const char of str) {
      // checking if the character is in which of the following arrays and then increasing the count by one

      if (consonants.includes(char)) {
        outputObj.consonants++;
      } else if (vowels.includes(char)) {
        outputObj.vowels++;
      } else if (numbers.includes(char)) {
        outputObj.numbers++;
      } else if (punctuation.includes(char)) {
        outputObj.punctuation++;
      } else if (specialCharacters.includes(char)) {
        outputObj.specialCharacters++;
      } else if (spaces.includes(char)) {
        outputObj.spaces++;
      }
    }
  }

  return outputObj; //return result
};

export const questionFour = arr => {
  // Implement question 4 here

  let outputArr = []; // Intializing an empty array to store output

  // Iterating over each element of the array
  for (const iterator of arr) {
    // If the element is not present in our empty output array
    // Addd it to the output array
    if (!outputArr.includes(iterator)) {
      outputArr.push(iterator);
    }
  }

  return outputArr; //return result
};

// Updated Student Info below
export const studentInfo = {
  firstName: "Krutin",
  lastName: "Rathod",
  studentId: "20022825",
};
