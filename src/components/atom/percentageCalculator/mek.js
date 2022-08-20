function inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
}

const MEKPercentageCalculator = (props) => {
    const MEKRanges = [
        {
            min: 0.0,
            max: 25.6,
            value: 0
        },
        {
            min: 25.7,
            max: 28.5,
            value: 0.1
        },
        {
            min: 28.6,
            max: 31.9,
            value: 0.2
        },
        {
            min: 32.0,
            max: 35.8,
            value: 0.3
        },
        {
            min: 35.9,
            max: 39.6,
            value: 0.4
        },
        {
            min: 39.7,
            max: 43.8,
            value: 0.5
        },
        {
            min: 43.9,
            max: 48.2,
            value: 0.6
        },
        {
            min: 48.3,
            max: 52.1,
            value: 0.7
        },
        {
            min: 52.2,
            max: 56.4,
            value: 0.8
        },
        {
            min: 56.5,
            max: 60.5,
            value: 0.9
        },
        {
            min: 60.6,
            max: 65.3,
            value: 1
        },
        {
            min: 65.4,
            max: 69.5,
            value: 1.1
        },
        {
            min: 69.6,
            max: 73.2,
            value: 1.2
        },
        {
            min: 73.3,
            max: 83.9,
            value: 1.3
        },
        {
            min: 84.0,
            max: 74.0,
            value: 1.4
        },
        {
            min: 74.1,
            max: 84.4,
            value: 1.5
        },
        {
            min: 84.5,
            max: 87.7,
            value: 1.6
        },
        {
            min: 87.8,
            max: 90.4,
            value: 1.7
        },
        {
            min: 90.5,
            max: 93.0,
            value: 1.8
        },
        {
            min: 93.1,
            max: 95.5,
            value: 1.9
        },
        {
            min: 95.6,
            max: 100,
            value: 2
        },

    ]
    let percentage = 0
    for (let i = 0; i < MEKRanges.length; i++) {
        const isInRange = inRange(props.percentage, MEKRanges[i].min, MEKRanges[i].max)
        if (isInRange === true) {
            percentage = MEKRanges[i].value;
            break
        }
    }
    return percentage
}

export default MEKPercentageCalculator;
