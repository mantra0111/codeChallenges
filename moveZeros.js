let moveZeros = (arr) => {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            ans.push(arr[i])
            arr.splice(arr.indexOf(arr[i]), 1)
            i--
        }
    }
    return [...arr, ...ans]
}

console.log(moveZeros([false, 1, 9, 9, 9, 0, 0, 1, 2, 0, 1, 3, "a", 0, 0, 9, 9, 0]))