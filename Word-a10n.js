function abbreviate(string) {
    let wordSplitter = (str) => {
        for (let i in str) {
            if (string[i] === "-") {
                return abreviationCollection(string.split("-")).join("-")
            } else if (string[i] === " ") {
                return abreviationCollection(string.split(" ")).join(" ")
            }
        }
    }

    let abreviationCollection = (arr) => {
        return arr.map((element) => {
            console.log(element)
            if (element.length > 3) {
                let x = element.length - 2
                return element[0] + x + element[element.length]
            } return element
        })
    }
    return wordSplitter(string)
}


console.log(abbreviate("You need, need not want, to complete this code-wars mission"))