// Human Readable Time
function humanReadable(seconds) {
    try {
        if (Number.isInteger(seconds === false)) throw new TypeError('not a number');
        if (seconds > 359999) throw new RangeError('time limit exceeded');
        if (seconds < 0) throw new RangeError('negative numbers not accepted');
    } catch (err) {
        return "" + err
    }
    let hours = "" + Math.floor(seconds / 3600)
    let minutes = "" + Math.floor(seconds / 60);
    let segundos = "" + Math.floor((seconds % 3600) % 60)
    hours < 1
        ? (minutes = minutes, hours = "00")
        :
        hours < 10
            ? (minutes = "" + Math.floor((seconds % 3600) / 60), hours = "0" + hours)
            : (hours = hours, minutes = "" + Math.floor((seconds % 3600) / 60));
    minutes >= 1
        ? minutes > 10
            ? minutes = minutes
            : minutes = '0' + minutes
        : minutes = '00';
    segundos >= 1
        ? segundos > 10
            ? segundos = segundos
            : segundos = '0' + segundos
        : segundos = "00";


    return `${hours}:${minutes}:${segundos}`
}
console.log(humanReadable(129347))