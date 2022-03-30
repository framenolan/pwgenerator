function generatePassword(){
  //TODO: your code goes here
  return "password"
}

var pwLength = prompt("How long would you like the password to be? (please choose a value 8-128 characters)");
var pwLower = confirm("Include lowercase letters?");
var pwUpper = confirm("Include UPPERCASE letters?");
var pwNumeric = confirm("Include numbers?");
var pwSpecial = confirm("Include special characters?");

console.log("Length: " + pwLength)
console.log("Lower: " + pwLower)
console.log("Upper: " + pwUpper)
console.log("Numeric: " + pwNumeric)
console.log("Special: " + pwSpecial)



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