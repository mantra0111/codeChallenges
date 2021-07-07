// passed gg easy
const narcissistic = (value) => {
    let toArray = Array.from("" + value), acumulator = 0;
    for (let i = 0; i < toArray.length; i++) {
        acumulator = acumulator + toArray[i] ** toArray.length;
    }
    return acumulator == value
}

console.log(narcissistic(1652))