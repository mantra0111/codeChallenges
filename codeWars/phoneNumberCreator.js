const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function createPhoneNumber(numbers) {
    let answer = "";
    let randomNumber = 0;
    for (let i = 0; i < 10; i++) {
        if (answer.length == 0) {
            answer = answer + "(";
        } else if (answer.length == 4) {
            answer = answer + ") ";
        } else if (answer.length == 9) {
            answer = answer + "-";
        }
        randomNumber = Math.floor(Math.random() * 9);
        answer = answer + numbers[randomNumber];
    }

    return answer;
}

function generateCellPhone(array) {
    let answer = "";
    let randomNumber = 0;
    for (let i = 0; i < 12; i++) {
        if (answer.length == 0) {
            answer = answer + "+";
        } else if (answer.length == 3) {
            answer = answer + " ";
        } else if (answer.length == 7) {
            answer = answer + " ";
        } else if (answer.length == 11) {
            answer = answer + " ";
        }
        randomNumber = Math.floor(Math.random() * 9);
        answer = answer + array[randomNumber];
    }

    return "tu nuevo phono es :" + answer;
}

console.log(createPhoneNumber(numbers))

function createa(numbers) {
    let answer = "";
    for (let i = 0; i < 10; i++) {
        if (answer.length == 0) {
            answer = answer + "(";
        } else if (answer.length == 4) {
            answer = answer + ") ";
        } else if (answer.length == 9) {
            answer = answer + "-";
        }
        answer = answer + numbers[i];
    }

    return answer;
}
console.log(createa([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));