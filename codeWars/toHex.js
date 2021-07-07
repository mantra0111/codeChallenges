//const readline = require('readline')
//const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
// RGB To Hex Conversion
function decToHex0to255(myHex) {
    if (myHex > 255) myHex = 255
    if (myHex <= 0) return [0, 0]
    let hex = [], hexMemory = myHex;
    if (myHex < 16) return [0, Math.floor(hexMemory % 16)]
    while (hexMemory / 16 >= 1) {
        hex.unshift(hexMemory % 16)
        hexMemory /= 16;
    }
    hex.unshift(Math.floor(hexMemory % 16));

    return hex
}

const rgb = (r, g, b) => {
    const hexChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let convertedArray = decToHex0to255(r).concat(decToHex0to255(g), decToHex0to255(b))
    let ans = [];
    for (let i in convertedArray) {
        ans.push(hexChar[convertedArray[i]])
    }
    return ans.join('')
}

console.log(rgb(173, 255, -47))
//console.log(173 % 16)
//rl.question(`dec to Hex conversor`, (userInput) => console.log(rgb(userInput)))
//console.log(10 % 16)