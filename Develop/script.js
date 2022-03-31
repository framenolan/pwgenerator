var pwLength = prompt("How long would you like the password to be? (please choose a value 8-128 characters)");
var pwLower = confirm("Include lowercase letters?");
var pwUpper = confirm("Include UPPERCASE letters?");
var pwNumeric = confirm("Include numbers?");
var pwSpecial = confirm("Include special characters?");
var optLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var optUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var optNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var optSpecial = [" ", "!", `"`, "#", "$", "%", `'`, "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var currentChar = 1

var valid = validateOptions();

function generatePassword() {
  //TODO: your code goes here

  // Empty array built
  var pwArray = [0];
  function buildArray() {
    for (let i = 0; i < pwLength-1; i++) {
      pwArray.push(i+1);    
    }
  }
  buildArray();
    
  // need to figure out how to pull a value from optArrays
  // need to only include optArrays that pwArrays == true
  function pullChar() {
    if (optLower){
      for (var i = 0; i <= pwLength; i++) {
        varRandom = Math.floor(Math.random() * pwLength);
        currentChar = optLower[varRandom];
        console.log("Current: " + currentChar);
        randomizeArray();
        console.log(pwArray);      }
    }
  }
  pullChar();
  console.log("Current: " + currentChar);
  console.log(pwArray);
  

  // swap out randoms for array items
  function randomizeArray() {
    for(var i = 0; i<=pwLength; i++) {
      pwArray[i] = currentChar;
    }
  }
  // randomizeArray();

  pwArray.forEach(element => {
    
  });

  
  
  // TODO: Need to convert Array to String...
  let text = pwArray.toString();
  console.log("final string: " + text);
  
  // this is the random number generator

// This will be the failsafe, default value, shouldn't be needed
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
  }
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
