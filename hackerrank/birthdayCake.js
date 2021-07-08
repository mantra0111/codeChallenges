const arr = [4, 4, 1, 3, 1, 2, 3, 4, 4, 1]

function birthdayCakeCandles(candles) {
    // Write your code here
    let tallestCandleHeight = candles[0]
    let amount = 0

    candles.forEach(element => {

        if (element === tallestCandleHeight) {
            amount++
        }

        if (element > tallestCandleHeight) {
            tallestCandleHeight = element
            amount = 1
        }
    });
    console.log(`${amount}`)
}


birthdayCakeCandles(arr)