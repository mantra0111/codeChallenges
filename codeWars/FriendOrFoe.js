function checkFriend(array) {
    let friends = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length == 4) {
            friends.push(array[i]);
        }
    }
    return friends
}
console.log(checkFriend(["Ryan", "Kieran", "Jason", "Yous"]))