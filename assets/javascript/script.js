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
// Will keep track of number of options selected by user (maximum 4)
let numOfSelectedCharacterTypes = 0;

// Array will store copies of arrays of all character types selected by user
let selectedOptions = [];

// Array will store the randomly selected characters from the user selection
// final result will be turn into a string representing the password
let result = [];

/*------------------------------ FUNCTIONS ------------------------------*/

// Check if a string includes characters that are not digits or empty string (when user clicks OK without answering prompt)
const isInvalid = (str) => {
  let nonDigit = /\D/;
  let trimmedString = str.trim();
  try {
    return trimmedString.match(nonDigit) || str === "" ? true : false;
  } catch {
    // if the string is null also return true without error because it means that user only clicked on cancel or OK without providing any input
    return true;
  }

}

// Validate user choice of character type
const validateUserChoice = (arrayOfCharType) => {
  numOfSelectedCharacterTypes++;
  result.splice(getRandomIndex(userChoices.passwordLength), 0, getRandomElementFromArray(arrayOfCharType))
  selectedOptions.push(...arrayOfCharType);
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
        message = alert("Seriously, what am I supposed to do with this? 😩 Oh wait, 0 + 0 = 👀 \nClever, right?")
        break;
      case (userChoices.passwordLength < 10):
        message = alert("This password length is too short. It needs to be between 10 and 64 😉")
        break;
      case (userChoices.passwordLength > 64) && (userChoices.passwordLength <= 75):
        message = alert("This password length is too long. It needs to be between 10 and 64 😉")
        break;
      case (userChoices.passwordLength > 75) && (userChoices.passwordLength < 90):
        message = alert("Really?? You don't even deserve a password!😫 OK, try again...")
        break;
      case (userChoices.passwordLength >= 90) && (userChoices.passwordLength < 100):
        message = alert(`${userChoices.passwordLength} characters?? I think you don't need a password, you're just looking for trouble! 😂 But it's OK, try again...`)
        break;
      case (userChoices.passwordLength >= 100):
        message = alert(`${userChoices.passwordLength} characters?? I'm out...🏃💨 \nWait, no, you're out! 👉 \nOh, you're still there? I'm calling the police!🚔`)
        break;
      default:
        message = alert(`Great! ${userChoices.passwordLength} characters is a decent choice, thank you! 🙌`)
        correctPasswordLength = true;
        break;
    }
  }
  return userChoices.passwordLength;
};

// Prompt user for password (character type) options
const getPasswordOptions = () => {
  let selectionNotReady = true;

  // Make sure selectedOptions/result arrays/numOfSelectedCharacterTypes are empty > to prevent unexpected results if user wants to generate a 2nd password
  selectedOptions = [];
  result = [];
  numOfSelectedCharacterTypes = 0;

  do {
    // for each character type category, if the user wants to include that option in the password,
    // increment the numOfSelectedCharacterTypes variable by 1 
    // and make a shallow copy of the corresponding array of characters to the selectedOptions array
    userChoices.lowerCasedCharacters = confirm("Do you want to include lowercased characters? 🔡");
    if (userChoices.lowerCasedCharacters === true) {
      validateUserChoice(characterTypeOptions.lowerCasedCharacters);
    };

    userChoices.upperCasedCharacters = confirm("Do you want to include uppercased characters? 🔠");
    if (userChoices.upperCasedCharacters === true) {
      validateUserChoice(characterTypeOptions.upperCasedCharacters);
    };

    userChoices.numericCharacters = confirm("Do you want to include numeric characters? 🔢");
    if (userChoices.numericCharacters === true) {
      validateUserChoice(characterTypeOptions.numericCharacters);
    };

    userChoices.specialCharacters = confirm("Do you want to include special characters? 🔣");
    if (userChoices.specialCharacters === true) {
      validateUserChoice(characterTypeOptions.specialCharacters);
    };

    // Display a message on the screen depending on the number of character types selected
    switch (true) {
      case (numOfSelectedCharacterTypes < 1):
        message = alert("Really? Please select at least one character type, mmkay? 💁")
        break;
      case (numOfSelectedCharacterTypes < 2):
        message = alert("You've only selected 1 character type, I guess you don't want a secure password!");
        break;
      case (numOfSelectedCharacterTypes < 3):
        message = alert("Not the most secure password but hey, that's your choice!");
        break;
      case (numOfSelectedCharacterTypes < 4):
        message = alert("Great! Thank you for your patience while we're generating your password! 😉");
        break;
      case (numOfSelectedCharacterTypes === 4):
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

  let emptySpacesInResultArray = userChoices.passwordLength - numOfSelectedCharacterTypes;

  //loop to populate the result array with the number of characters requested by the user
  for (let i = 0; i < emptySpacesInResultArray; i++) {
    // using the splice method (instead of push or unshift) add a layer of randomness to the password generating process
    result.splice(getRandomIndex(userChoices.passwordLength), 0, getRandomElementFromArray(selectedOptions));
  }

  // convert the array into a string to generate the password
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