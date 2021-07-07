function high(x) {
    x = x.split(' ')
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    let scores = []
    for (let word in x) {
        let acum = 0
        for (let letter in x[word]) {
            acum += alphabet.indexOf(x[word][letter], 0) + 1
        }
        scores.push(acum)
    }
    return x[scores.indexOf(Math.max(...scores), 0)]
}

console.log(high('man i need a taxi taxi up to ubud'))