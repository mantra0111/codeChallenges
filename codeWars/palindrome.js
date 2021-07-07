function removeNonAN(string) {
    let ans = ""
    for (let index in string) {
        if (/[a-z0-9A-Z]/.test(string[index])) {
            ans += string[index]
        }
    }
    return ans
}

function setStringBackwards(string) {
    let mirror = ""

    for (let index = 0; index < string.length; index++) {
        mirror += string[string.length - 1 - index];
    }

    return mirror
}

function palindrome(str) {
    str = removeNonAN(str)
    let mirror = setStringBackwards(str)
    return str.toLowerCase() === mirror.toLowerCase()
}
console.log(palindrome("mateo"))

// palindrome("_eye") should return true.

// palindrome("A man, a plan, a canal. Panama") should return true.

// palindrome("never odd or even") should return true.

// palindrome("nope") should return false.

// palindrome("almostomla") should return false.

// palindrome("My age is 0, 0 si ega ym.") should return true.

// palindrome("1 eye for of 1 eye.") should return false.

// palindrome("0_0 (: /-\ :) 0-0") should return true.

// palindrome("five|\_/|four") should return false.