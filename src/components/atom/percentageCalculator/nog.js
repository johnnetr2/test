function inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
}

const NOGPercentageCalculator = (props) => {
    const NOGRanges = [
        {
            min: 0.0,
            max: 24.9,
            value: 0
        },
        {
            min: 25.0,
            max: 28.0,
            value: 0.1
        },
        {
            min: 28.1,
            max: 30.8,
            value: 0.2
        },
        {
            min: 30.9,
            max: 33.6,
            value: 0.3
        },
        {
            min: 33.7,
            max: 36.6,
            value: 0.4
        },
        {
            min: 36.7,
            max: 40.4,
            value: 0.5
        },
        {
            min: 40.5,
            max: 44.4,
            value: 0.6
        },
        {
            min: 44.5,
            max: 48.5,
            value: 0.7
        },
        {
            min: 48.6,
            max: 53.3,
            value: 0.8
        },
        {
            min: 53.4,
            max: 57.9,
            value: 0.9
        },
        {
            min: 58.0,
            max: 62.2,
            value: 1
        },
        {
            min: 62.3,
            max: 67.1,
            value: 1.1
        },
        {
            min: 67.2,
            max: 71.2,
            value: 1.2
        },
        {
            min: 71.3,
            max: 75.2,
            value: 1.3
        },
        {
            min: 75.3,
            max: 79.1,
            value: 1.4
        },
        {
            min: 79.2,
            max: 83.0,
            value: 1.5
        },
        {
            min: 83.1,
            max: 86.3,
            value: 1.6
        },
        {
            min: 86.4,
            max: 89.3,
            value: 1.7
        },
        {
            min: 89.4,
            max: 91.9,
            value: 1.8
        },
        {
            min: 92.0,
            max: 94.4,
            value: 1.9
        },
        {
            min: 94.5,
            max: 100,
            value: 2
        },

    ]
    let percentage = 0
    for (let i = 0; i < NOGRanges.length; i++) {
        const isInRange = inRange(props.percentage, NOGRanges[i].min, NOGRanges[i].max)
        if (isInRange === true) {
            percentage = NOGRanges[i].value;
            break
        }
    }
    return percentage
}

export default NOGPercentageCalculator;
