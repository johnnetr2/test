function inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
}

const LASPercentageCalculator = (props) => {
    const LÄSRanges = [
        {
            min: 0.0,
            max: 24.9,
            value: 0
        },
        {
            min: 25.0,
            max: 27.8,
            value: 0.1
        },
        {
            min: 27.9,
            max: 31.1,
            value: 0.2
        },
        {
            min: 31.2,
            max: 34.9,
            value: 0.3
        },
        {
            min: 35.0,
            max: 38.6,
            value: 0.4
        },
        {
            min: 38.7,
            max: 42.7,
            value: 0.5
        },
        {
            min: 42.8,
            max: 47.0,
            value: 0.6
        },
        {
            min: 47.1,
            max: 50.8,
            value: 0.7
        },
        {
            min: 50.9,
            max: 55.0,
            value: 0.8
        },
        {
            min: 55.1,
            max: 59.0,
            value: 0.9
        },
        {
            min: 59.1,
            max: 63.7,
            value: 1
        },
        {
            min: 63.8,
            max: 67.7,
            value: 1.1
        },
        {
            min: 67.8,
            max: 71.4,
            value: 1.2
        },
        {
            min: 71.5,
            max: 81.8,
            value: 1.3
        },
        {
            min: 81.9,
            max: 72.2,
            value: 1.4
        },
        {
            min: 72.3,
            max: 82.3,
            value: 1.5
        },
        {
            min: 82.4,
            max: 85.5,
            value: 1.6
        },
        {
            min: 85.6,
            max: 88.2,
            value: 1.7
        },
        {
            min: 88.3,
            max: 90.7,
            value: 1.8
        },
        {
            min: 90.8,
            max: 93.2,
            value: 1.9
        },
        {
            min: 93.3,
            max: 100,
            value: 2
        },

    ]
    let percentage = 0
    for (let i = 0; i < LÄSRanges.length; i++) {
        const isInRange = inRange(props.percentage, LÄSRanges[i].min, LÄSRanges[i].max)
        if (isInRange === true) {
            percentage = LÄSRanges[i].value;
            break
        }
    }
    return percentage
}

export default LASPercentageCalculator;
