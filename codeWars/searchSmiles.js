const countSmileys = (arr) => arr.filter(index => /^[:;](~|-)?[)D]$/.test(index)).length
//console.log(countSmileys([":)", ":~D", '_D']))

console.log(/^\w[a-z]$/.test("as"))