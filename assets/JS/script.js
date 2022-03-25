// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const charLibrary = {
  alphaUpper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  alphaLow: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numSet: ["0","1","2","3","4","5","6","7","8","9"],
  charSet: [ " ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"],
}

function generatePassword(){
let passData= [];
let finalPass = [];

askLower()

function askLower() {
  let askLowerCase = prompt("Do you want to include lowercase letters in your password? \n Please type \"yes\" or \"no\" ");
  
  console.log("User replied " + askLowerCase + " to lower case characters")
  
    if (askLowerCase === '' || askLowerCase === null) {return;}
    else if (askLowerCase === "yes" || askLowerCase === "Yes" || askLowerCase === "YES") {
     passData.push(charLibrary.alphaLow);
    } else if (askLowerCase === "no" || askLowerCase === "No" || askLowerCase === "NO") {
      console.log("User replied " + askLowerCase + " to lower case characters");
    } else { window.alert("Please enter \"yes\" or \"no\"")
      askLower();
            } 
          }  

console.log(passData)

askUpper()

function askUpper() {
  let askUpperCase = prompt("Do you want to include uppercase letters in your password? \n Please type \"yes\" or \"no\" ");
  
  console.log("User replied " + askUpperCase + " to upper case characters")

    if (askUpperCase === '' || askUpperCase === null) {return;}
    else if (askUpperCase === "yes" || askUpperCase === "Yes" || askUpperCase === "YES") {
     passData.push(charLibrary.alphaUpper);
    } else if (askUpperCase === "no" || askUpperCase === "No" || askUpperCase === "NO") {
      console.log("User replied " + askUpperCase + " to upper case characters");
    } else {window.alert("Please enter \"yes\" or \"no\"")
      askUpper();
            }
          }

console.log(passData)

askNum()

function askNum() { 
  let askNumber = prompt("Do you want to include numbers in your password? \n Please type \"yes\" or \"no\" ");
  
  console.log("User replied " + askNumber + " to numbers")

     if (askNumber === '' || askNumber === null) {return;}
     else if (askNumber === "yes" || askNumber === "Yes" || askNumber === "YES") {
     passData.push(charLibrary.numSet);
    } else if (askNumber === "no" || askNumber === "No" || askNumber === "NO") {
      console.log("User replied " + askNumber + " to numbers");
    } else {window.alert("Please enter \"yes\" or \"no\"")
      askNum();
            }
          }

console.log(passData)

askSpec()

function askSpec() {
let askSpecial = prompt("Do you want to include special characters in your password? \n Please type \"yes\" or \"no\" ");
  
  console.log("User replied " + askSpecial + " to special characters")

     if (askSpecial === '' || askSpecial === null) {return;}
     else if (askSpecial === "yes" || askSpecial === "Yes" || askSpecial === "YES") {
     passData.push(charLibrary.charSet);
    } else if (askSpecial === "no" || askSpecial === "No" || askSpecial === "NO") {
      console.log("User replied " + askSpecial + " to special characters");
    } else {window.alert("Please enter \"yes\" or \"no\"")
      askSpec();
            }
          }
  
console.log(passData)

let passLength=[]

getLength()

function getLength(){
  
length=prompt("How long does your password need to be? \n *Password must be at least 8 characters in length and no longer than 128*")
 
if (length === '' || length === null) {return;}
else if (length <= 128 && length >= 8) {
  
  passLength.push(length)
  
}
    else if (length < 8 || length > 128) {
    window.alert("*Password must be at least 8 characters in length and no longer than 128*")
    getLength()
    }

     else {
    window.alert("*Password must be at least 8 characters in length and no longer than 128*")
    getLength()
    }


console.log("User needs a password " + length + " characters in length")
return passLength;
  }

console.log(passLength)
console.log(passData)

let integer=parseInt(passLength[0], 10);

console.log(integer);
console.log(typeof integer);


function buildPass() {
  
  newArray=passData.flat()
  shuffledArray=newArray.sort(() => Math.random() - Math.random(Math.random()))

  if (finalPass.length<integer) {
    randomNumber=Math.floor(Math.random()*shuffledArray.length)
    finalPass.push(shuffledArray[randomNumber])
    buildPass()
  }
  console.log(shuffledArray)
  return finalPass;
}

buildPass()

return finalPass.join(" ")
}