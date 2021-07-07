// 7kyu , passed 
const number = function (busStops) {
    let totalPeople = 0;
    for (let i in busStops) {
        totalPeople += busStops[i][0]
        totalPeople -= busStops[i][1]
    }
    return totalPeople
}
console.log(number([[10, 0], [3, 5], [5, 8]]))