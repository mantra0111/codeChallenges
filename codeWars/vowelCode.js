// 6 kyu
const splitAndMap = (string, code) => {
    return mapAns = string.split("").map((index) => {
        if (index in code) { index = code[index] }
        return index
    }).join("")
}

function encode(string) {
    const code = {
        "a": 1,
        "e": 2,
        "i": 3,
        "o": 4,
        "u": 5
    }
    return splitAndMap(string, code)
}

function decode(string) {
    const code = {
        1: "a",
        2: "e",
        3: "i",
        4: "o",
        5: "u"
    }
    return splitAndMap(string, code)
}


//console.log(encode("hi there"))
console.log(encode("hi there"))