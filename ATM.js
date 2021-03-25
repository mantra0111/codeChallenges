// passed
function validatePIN(pin) {
    let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let result = "";
    let answer = false;
    for (let i = 0; i < pin.length; i++) {
        for (let x = 0; x < nums.length; x++) {
            if (pin[i] != nums[x]) {

            } else {
                result = result + nums[x];
            }
        }
    }
    console.log("string :" + pin)
    if (pin != result) {
        return false;
    }
    switch (result.length) {
        case 4:
            answer = true;
            break;
        case 6:
            answer = true;
            break;
    }

    return answer;
}
console.log(validatePIN("1234a"))

// best regex solution function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }