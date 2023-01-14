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


// Get password length and make sure that it is between 10 and 64 
const getPasswordLength = () => {
  let correctPasswordLength = false;
  let message = "";

  while (correctPasswordLength === false) {
    userInput = prompt("How long do you want your password to be? Please note the length needs to be between 10 and 64.");
    userChoices.passwordLength = parseInt(userInput, 10);

    switch (true) {
      case isNaN(userChoices.passwordLength):
        message = alert("Come on, give me a number! 🔢");
        break;
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

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

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