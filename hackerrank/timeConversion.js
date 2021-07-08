let myTime = '04:55:23AM'

function timeConversion(s) {
    // Write your code here
    if (s === '12:00:00am' || s === '12:00:00AM') return '00:00:00'

    let isAfterNoon = false
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'p' || s[i] === 'P') isAfterNoon = true
    }

    let ans = s.split(':')

    if (isAfterNoon) {
        let multipliedHours = parseInt(ans[0]) + 12
        if (multipliedHours > 10) {
            ans[0] = "" + multipliedHours
        } else {
            ans[0] = "0" + multipliedHours
        }
    }

    //quitar am/pm
    let

    return ans
}


console.log(timeConversion(myTime))