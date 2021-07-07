let heigth = 6

function staircase(n) {
    // Write your code here
    // create # template to work on
    let floorTemplate = ''

    for (let count = 0; count < n; count++) {
        floorTemplate += "#"
    }

    for (let floor = n - 1; floor >= 0; floor--) {

        let appendableSpaces = ''

        for (let counter = 0; counter < floor; counter++) {
            appendableSpaces += ' '
        }

        let updatedTemplate = floorTemplate.substring(floor, floorTemplate.length)
        console.log(appendableSpaces + updatedTemplate)
    }
}

staircase(heigth)