

function superbowlWin(array) {
    const obj =  array.find(element => {
        if (element.result === "W") {
            return element.year
        } else {
            return undefined
        }
    })
    if (obj === undefined) {
        return undefined
    } else {
        return obj.year
    }

}
