const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passWord1 = document.getElementById("password-1")
let passWord2 = document.getElementById("password-2")

// let passwordLength = 15
// Generatebtn.addEventListener("click", function() {
//     let randomCharone = Math.floor(Math.random() * characters.length)
//     let randomChartwo = Math.floor(Math.random() * characters.length)
//     // let rand1emoji = Math.floor(Math.random()*fighters.length)
//     // let rand2emoji = Math.floor(Math.random()*fighters.length)
//     // let randomPasswordOne = ""
//     passWord1.textContent += characters[randomCharone]
//     // let randomPasswordTwo = ""
//     // let randomPasswordOne += characters[randomCharone]
//     // console.log(randomPasswordOne)
//     for (let i = 0; i < passwordLength; i++) {
//         let randomPasswordOne = characters[randomCharone]
//         let randomPasswordTwo = characters[randomChartwo]
//         // console.log(randomPasswordOne)
//         // passWord1.textContent += characters[randomCharone][i] 
//         // passWord2.textContent += characters[randomChartwo][i]
//     }
//     })

let passwordLength = 15

function getRandomCharacterOne() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function getRandomCharacterTwo() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}


function generateRandomPassword() {
    passWord1.textContent =0
    passWord2.textContent =0
    let randomPasswordOne = ""
    let randomPasswordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += getRandomCharacterOne()
        randomPasswordTwo += getRandomCharacterTwo()
        passWord1.textContent = randomPasswordOne
        passWord2.textContent = randomPasswordTwo  
        // passWord1.textContent =0
        // passWord2.textContent =0       
    }
    // return randomPasswordTwo, randomPasswordOne 
    // return randomPasswordOne
}

// function myFunction() {
//   // Get the text field
//   var copyText = document.getElementById("password-1");

//   // Select the text field
//   copyText.select();
//   copyText.setSelectionRange(0, 15); // For mobile devices

//   // Copy the text inside the text field
//   navigator.clipboard.writeText(copyText.value);
  
//   // Alert the copied text
//   alert("Copied the text: " + copyText.value);
// }

// generateRandomPassword()
// const generatedPasswordOne = generateRandomPassword()
// const generatedPasswordTwo = generateRandomPassword()

// console.log(generatedPasswordOne)
