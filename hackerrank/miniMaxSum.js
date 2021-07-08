const arr = [5, 3, 5, 7, 9]

function miniMaxSum(arr) {
    // Write your code here
    let lowestValue = arr[0]
    let highestValue = arr[0]
    let arrTotal = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highestValue) highestValue = arr[i]
        if (arr[i] < lowestValue) lowestValue = arr[i]
    }

    arr.forEach(element => {
        arrTotal += element
    });

    console.log(`${arrTotal - highestValue} ${arrTotal - lowestValue}`)

}

console.log(miniMaxSum(arr))