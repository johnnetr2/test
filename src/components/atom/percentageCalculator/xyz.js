function inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
}

const XYZPercentageCalculator = (props) => {
    const XYZRanges = [
        {
            min: 0.0,
            max: 24.6,
            value: 0
        },
        {
            min: 24.7,
            max: 27.7,
            value: 0.1
        },
        {
            min: 27.8,
            max: 30.0,
            value: 0.2
        },
        {
            min: 30.4,
            max: 33.1,
            value: 0.3
        },
        {
            min: 33.2,
            max: 36.1,
            value: 0.4
        },
        {
            min: 36.2,
            max: 39.9,
            value: 0.5
        },
        {
            min: 40.0,
            max: 43.8,
            value: 0.6
        },
        {
            min: 43.9,
            max: 47.8,
            value: 0.7
        },
        {
            min: 47.9,
            max: 52.6,
            value: 0.8
        },
        {
            min: 52.7,
            max: 57.1,
            value: 0.9
        },
        {
            min: 57.2,
            max: 61.4,
            value: 1
        },
        {
            min: 61.5,
            max: 66.2,
            value: 1.1
        },
        {
            min: 66.3,
            max: 70.2,
            value: 1.2
        },
        {
            min: 70.3,
            max: 74.2,
            value: 1.3
        },
        {
            min: 74.3,
            max: 78.1,
            value: 1.4
        },
        {
            min: 78.2,
            max: 81.9,
            value: 1.5
        },
        {
            min: 82.0,
            max: 85.2,
            value: 1.6
        },
        {
            min: 85.3,
            max: 88.1,
            value: 1.7
        },
        {
            min: 88.2,
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
    for (let i = 0; i < XYZRanges.length; i++) {
        const isInRange = inRange(props.percentage, XYZRanges[i].min, XYZRanges[i].max)
        if (isInRange === true) {
            percentage = XYZRanges[i].value;
            break
        }
    }
    return percentage
}

export default XYZPercentageCalculator;
