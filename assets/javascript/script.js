/*------------------------------ INITIAL DATA ------------------------------*/

// Object containing the different options for the character types to be included in the password
const characterTypeOptions = {
  // Array of special characters to be included in password
  specialCharacters: [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ],
  // Array of numeric characters to be included in password
  numericCharacters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  // Array of lowercase characters to be included in password
  lowerCasedCharacters: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ],
  // Array of uppercase characters to be included in password
  upperCasedCharacters: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
}

// Object containing user's choices
const userChoices = {
  passwordLength: 0,
  lowerCasedCharacters: false,
  upperCasedCharacters: false,
  numericCharacters: false,
  specialCharacters: false,
}

/*------------------------------ EMPTY VARIABLES TO BE USED LATER ------------------------------*/
// Array will store copies of arrays of character types selected by user
let selectedOptions = [];
let samplesOfSelectedOptions = [];


/*------------------------------ FUNCTIONS ------------------------------*/

// Check if a string includes characters that are not digits or empty string (when user clicks OK without answering prompt)
const isInvalid = (str) => {
  let nonDigit = /\D/;
  return str.match(nonDigit) || str === "" ? true : false;
}

// Function for getting a random element from an array
const getRandomElementFromArray = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function for getting a random index based on an array length
const getRandomIndex = (arrayLength) => {
  let randomIndex = Math.floor(Math.random() * arrayLength)
  return randomIndex;
}

// Prompt user for password length and make sure that it is between 10 and 64 characters
const getPasswordLength = () => {
  let correctPasswordLength = false;
  let message = "";

  while (correctPasswordLength === false) {
    userInput = prompt("How long do you want your password to be? Please note the length needs to be an integer between 10 and 64.");

    if (isInvalid(userInput)) {
      message = alert("Come on, give me a simple number! 😑");
      continue;
    } else {
      userChoices.passwordLength = parseInt(userInput, 10);
    }

    switch (true) {
      case (userChoices.passwordLength === 0):
        message = alert("Seriously, what am I supposed to do with this? 😩")
        break;
      case (userChoices.passwordLength < 10):
        message = alert("This password length is too short. It needs to be between 10 and 64 😉")
        break;
      case (userChoices.passwordLength > 64) && (userChoices.passwordLength <= 99):
        message = alert("This password length is too long. It needs to be between 10 and 64 😉")
        break;
      case (userChoices.passwordLength >= 100):
        message = alert("Really? You don't even deserve a password!😫 OK, try again...")
        break;
      default:
        message = alert("Great, thank you! 🙌")
        correctPasswordLength = true;
        break;
    }
  }
  return userChoices.passwordLength;
};

// Prompt user for password (character type) options
const getPasswordOptions = () => {
  let characterTypes = 0;

  let selectionNotReady = true;

  do {
    // for each character type category, if the user wants to include that option in the password,
    // increment the characterTypes variable by 1 
    // and make a shallow copy of the corresponding array of characters to the selectedOptions array
    userChoices.lowerCasedCharacters = confirm("Do you want to include lowercased characters? 🔡");
    if (userChoices.lowerCasedCharacters === true) {
      characterTypes++;
      samplesOfSelectedOptions.splice()
      selectedOptions.push(...characterTypeOptions.lowerCasedCharacters);
    };

    userChoices.upperCasedCharacters = confirm("Do you want to include uppercased characters? 🔠");
    if (userChoices.upperCasedCharacters === true) {
      characterTypes++;
      selectedOptions.push(...characterTypeOptions.upperCasedCharacters);
    };

    userChoices.numericCharacters = confirm("Do you want to include numeric characters? 🔢");
    if (userChoices.numericCharacters === true) {
      characterTypes++;
      selectedOptions.push(...characterTypeOptions.numericCharacters);
    };

    userChoices.specialCharacters = confirm("Do you want to include special characters? 🔣");
    if (userChoices.specialCharacters === true) {
      characterTypes++;
      selectedOptions.push(...characterTypeOptions.specialCharacters);
    };

    // Display a message on the screen depending on the number of character types selected
    switch (true) {
      case (characterTypes < 1):
        message = alert("Really? Please select at least one character type, mmkay? 💁")
        break;
      case (characterTypes < 2):
        message = alert("You've only selected 1 character type, I guess you don't want a secure password!");
        break;
      case (characterTypes < 3):
        message = alert("Not the most secure password but hey, that's your choice!");
        break;
      case (characterTypes < 4):
        message = alert("Great! Thank you for your patience while we're generating your password! 😉");
        break;
      case (characterTypes === 4):
        message = alert("That's a strong password! Thank you for your patience while we're generating your password! 😉");
        break;
    }

    // if no character type selected, then the selection is still not ready > so prompt user again!
    if (selectedOptions.length > 0) {
      selectionNotReady = false;
    }

  } while (selectionNotReady);

  // Return an array containing the different types of characters requested by the user
  return selectedOptions;
}

// Function to generate password with user input
const generatePassword = () => {
  getPasswordLength();
  getPasswordOptions();

  //following line replaced by getRandomIndex() function
  // let randomIndex = Math.floor(Math.random() * userChoices.passwordLength);
  let result = [];

  //loop to populate the result array with the number of characters requested by the user
  for (let i = 0; i < userChoices.passwordLength; i++) {
    // using the splice method (instead of push or unshift) add a layer of randomness to the password generating process
    result.splice(getRandomIndex(userChoices.passwordLength), 0, getRandomElementFromArray(selectedOptions));
    console.log("Result " + result);
  }

  // Empty the selectedOptions array at the end to prevent unexpected results if user wants to generate a 2nd password
  selectedOptions = [];

  // convert the array into a string
  return result.join("");
}


/*------------------------------ MAIN ------------------------------*/
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);