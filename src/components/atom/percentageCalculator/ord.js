function inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
}

const ORDPercentageCalculator = (props) => {
    const ORDRanges = [
        {
            min: 0.0,
            max: 25.2,
            value: 0
        },
        {
            min: 25.3,
            max: 28.1,
            value: 0.1
        },
        {
            min: 28.2,
            max: 31.5,
            value: 0.2
        },
        {
            min: 31.6,
            max: 35.3,
            value: 0.3
        },
        {
            min: 35.4,
            max: 39.0,
            value: 0.4
        },
        {
            min: 39.1,
            max: 43.2,
            value: 0.5
        },
        {
            min: 43.3,
            max: 47.6,
            value: 0.6
        },
        {
            min: 47.7,
            max: 51.4,
            value: 0.7
        },
        {
            min: 51.5,
            max: 55.6,
            value: 0.8
        },
        {
            min: 55.7,
            max: 59.7,
            value: 0.9
        },
        {
            min: 59.8,
            max: 64.5,
            value: 1
        },
        {
            min: 64.6,
            max: 68.5,
            value: 1.1
        },
        {
            min: 68.6,
            max: 72.3,
            value: 1.2
        },
        {
            min: 72.4,
            max: 82.7,
            value: 1.3
        },
        {
            min: 82.8,
            max: 73.0,
            value: 1.4
        },
        {
            min: 73.1,
            max: 83.3,
            value: 1.5
        },
        {
            min: 83.4,
            max: 86.5,
            value: 1.6
        },
        {
            min: 86.6,
            max: 89.2,
            value: 1.7
        },
        {
            min: 89.3,
            max: 91.8,
            value: 1.8
        },
        {
            min: 91.9,
            max: 94.3,
            value: 1.9
        },
        {
            min: 94.4,
            max: 100,
            value: 2
        },

    ]
    let percentage = 0
    for (let i = 0; i < ORDRanges.length; i++) {
        const isInRange = inRange(props.percentage, ORDRanges[i].min, ORDRanges[i].max)
        if (isInRange === true) {
            percentage = ORDRanges[i].value;
            break
        }
    }
    return percentage
}

export default ORDPercentageCalculator;
