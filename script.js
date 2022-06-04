// Assignment code here, which is to define the function "generate"//
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){


  //create the array//

 var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
   
  var resultArray = [];
  var userArray = [];

//Prompts, I used confrim boxes afer the original prompt.easier to use//

  var howManyCharacters = prompt ("How many characters do you want in your password? It has to be between 8 and 128 Characters.");
  var numbers = confirm ("Would you like numbers in your in your password?");
  var uppercases = confirm ("Would you like Uppercase Letters in your Password?");
  var lowercases = confirm ("Would you like Lower case Letters in your password?");
  var characters = confirm ("Would you like Special Characters in your password?");

  //if statements for the array//

  if (numbers){
    resultArray = resultArray.concat(numbArray);
  }
  if (uppercases){
    resultArray = resultArray.concat(uppercaseArray);
  }
  if (lowercases){
    resultArray = resultArray.concat(lowercaseArray);
  }
  if (characters){
    resultArray = resultArray.concat(characterArray);
  }
  console.log(resultArray)

  
  //loop 
  for (var i = 0; i < howManyCharacters; i++){
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
  }
  return userArray.join(""); 
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 



  



}; // final curly bracket for generate password function, do not delete!!!//



//1. prompt the user for the password criteria
//1.2 password length, between 8-128 chatacters
//1.3 lowercase,uppercase,special characters

//2. validate the input
//3. display the genertated password on the page.


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
