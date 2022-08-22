

export const valueFor = (percentage, rageArray) => {
    let rageValue = 0
    for (let i = 0; i < rageArray.length; i++) {
        const isInRange = inRange(percentage, rageArray[i].min, rageArray[i].max)
        if (isInRange === true) {
            rageValue = rageArray[i].value;
            break
        }
    }
    return rageValue
}

function inRange(x, min, max) {
    return (min <= x && x <= max);
}