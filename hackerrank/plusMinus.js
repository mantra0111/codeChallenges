const input = [1, 1, 0, -1, -1, 2]

function plusMinus(arr) {
    // Write your code here

    const getRatio = ({ numerator }) => {
        let ans = numerator / arr.length
        return ans.toFixed(6)
    }

    let ansObj = {
        negatives: 0,
        zeros: 0,
        positives: 0,
    }

    arr.forEach(element => {
        if (element > 0) {
            ansObj.positives++
            return
        }
        if (element < 0) {
            ansObj.negatives++
            return
        }
        ansObj.zeros++
    });

    console.log(`${getRatio({ numerator: ansObj.positives })}`)
    console.log(`${getRatio({ numerator: ansObj.zeros })}`)
    console.log(`${getRatio({ numerator: ansObj.negatives })}`)
}


plusMinus(input)