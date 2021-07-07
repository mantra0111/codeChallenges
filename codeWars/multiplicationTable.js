// multiplication table , 6 kyu
let multiplicationTable = function (size) {
    let table = []
    for (let x = 1; x <= size; x++) {
        table.push([x])
    }
    for (let y = 0; y < table.length; y++) {
        for (z = 0; z < size - 1; z++) {
            table[y].push(table[y][z] + table[y][0])
        }
    }
    return table.reverse
}

console.log(multiplicationTable(5))