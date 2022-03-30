
// console.log("Length: " + pwLength)
// console.log("Lower: " + pwLower)
// console.log("Upper: " + pwUpper)
// console.log("Numeric: " + pwNumeric)
// console.log("Special: " + pwSpecial)

  var pwLength = prompt("How long would you like the password to be? (please choose a value 8-128 characters)");
  var pwLower = confirm("Include lowercase letters?");
  var pwUpper = confirm("Include UPPERCASE letters?");
  var pwNumeric = confirm("Include numbers?");
  var pwSpecial = confirm("Include special characters?");
  var optLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var optUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var optNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var optSpecial = [" ", "!", `"`, "#", "$", "%", `'`, "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]


var valid = validateOptions();

function generatePassword() {
  //TODO: your code goes here

  return "password"
}

function validateOptions() {
  if (pwLength < 8 || pwLength > 128) {
    alert("Please choose a password length value from 8 to 128.");
    pwLength = prompt("How long would you like the password to be? (please choose a value 8-128 characters)");
    return validateOptions();
  } else if (!pwLower && !pwLower && !pwNumeric && !pwSpecial) {
    alert("Please select at least one character type.");
      pwLower = confirm("Include lowercase letters?");
      pwUpper = confirm("Include UPPERCASE letters?");
      pwNumeric = confirm("Include numbers?");
      pwSpecial = confirm("Include special characters?");
    return validateOptions();
  } else{
    generatePassword();
    console.log("Validation success")
  }
}

function randomizer () {
  
}

// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// variables for
  // length, include lowercase, uppercase, numeric, and/or special characters
  // prompt for includes, must include at least one type
// Once prompts are finished, password should be generated including each selected type
// Password is displayed, either on screen or in an alert