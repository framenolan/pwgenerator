function generatePassword() {
  
  // Prompts from user for password parameters 
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
  var charPool = []

  // Runs validation
  validateOptions(pwLength, pwLower, pwUpper, pwNumeric, pwSpecial);
  
  // Builds an empty array of the specified length
  var pwArray = [0];
  function buildArray() {
    for (let i = 0; i < pwLength-1; i++) {
      pwArray.push(i+1);   
    }
  }
  buildArray();
  
  // add usable characters to pool of usable characters based on confirm answers
  function buildPool() {
    if (pwLower){
      charPool = charPool.concat(optLower)
    };
    if (pwUpper){
      charPool = charPool.concat(optUpper)
    };
    if (pwNumeric){
      charPool = charPool.concat(optNumeric)
    };
    if (pwSpecial){
      charPool = charPool.concat(optSpecial)
    };
  }
  buildPool()
  
  // Pulls character from pool of usable characters
  function pullChar() {
    for (var i = 0; i <= pwLength-1; i++) {
      varRandom = Math.floor(Math.random() * charPool.length);
      currentChar = charPool[varRandom];
      randomizeArray(i);
      }
    }
    pullChar();
      
    // Swaps out pulled character for array items
    function randomizeArray(i) {
      pwArray[i] = currentChar;
    }
        
    // Converts array to string
    var passwordFinal = pwArray.join("");
    
    // This will be the final value, shouldn't be needed
    return passwordFinal
    
  }
  
  // Validates that at least one character type is chosen and the length is between 8-128
  function validateOptions(pwLength, pwLower, pwUpper, pwNumeric, pwSpecial) {
    if (pwLength < 8 || pwLength > 128) {
      alert("Please choose a password length value from 8 to 128.");
      pwLength = prompt("How long would you like the password to be? (please choose a value 8-128 characters)");
    } else if (!pwLower && !pwUpper && !pwNumeric && !pwSpecial) {
      alert("Please select at least one character type.");
      pwLower = confirm("Include lowercase letters?");
      pwUpper = confirm("Include UPPERCASE letters?");
      pwNumeric = confirm("Include numbers?");
      pwSpecial = confirm("Include special characters?");
    } else{
      return;
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
