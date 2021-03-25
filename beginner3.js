// ALREADY PASSED
function getSum(a, b) {
    let interval = {
        min: Math.min(a, b),
        max: Math.max(a, b),
    };
    return (interval.max - interval.min + 1) * (interval.max + interval.min) / 2
}

console.log(getSum(10, 50))