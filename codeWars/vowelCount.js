function getCount(str) {
    return (str.match(/a|e|i|o|u/ig) || []).length
}
let str = 'The quick brown fox jumps over the lazy dog.';
let words = str.split(' ');
console.log(words)
let array = words.join('%')
console.log(array)
console.log(typeof words + "\n" + typeof array)
console.log(getCount("abcdefghijklmnopqrstuvwxyz"))