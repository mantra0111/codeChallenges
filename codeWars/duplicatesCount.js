function count(string) {
    let count = {}
    let arr = Array.from(new Set(string))
    for (let key in arr) {
        count[arr[key]] = null
        for (let letter in string) {
            if (Object.keys(count)[key] == string[letter]) count[Object.keys(count)[key]] += 1
        }
    }
    return count
}
console.log(count('asfasfasfaasfd'))

