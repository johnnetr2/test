function inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
}

const KVAPercentageCalculator = (props) => {
    const KVARanges = [
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
            max: 30.4,
            value: 0.2
        },
        {
            min: 30.5,
            max: 33.2,
            value: 0.3
        },
        {
            min: 33.3,
            max: 36.2,
            value: 0.4
        },
        {
            min: 36.3,
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
            max: 47.9,
            value: 0.7
        },
        {
            min: 48.0,
            max: 52.7,
            value: 0.8
        },
        {
            min: 52.8,
            max: 57.2,
            value: 0.9
        },
        {
            min: 57.3,
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
            max: 70.3,
            value: 1.2
        },
        {
            min: 70.4,
            max: 74.3,
            value: 1.3
        },
        {
            min: 74.4,
            max: 78.2,
            value: 1.4
        },
        {
            min: 78.3,
            max: 82.0,
            value: 1.5
        },
        {
            min: 82.1,
            max: 85.3,
            value: 1.6
        },
        {
            min: 85.4,
            max: 88.2,
            value: 1.7
        },
        {
            min: 88.3,
            max: 90.8,
            value: 1.8
        },
        {
            min: 90.9,
            max: 93.3,
            value: 1.9
        },
        {
            min: 93.4,
            max: 100,
            value: 2
        },

    ]
    let percentage = 0
    for (let i = 0; i < KVARanges.length; i++) {
        const isInRange = inRange(props.percentage, KVARanges[i].min, KVARanges[i].max)
        if (isInRange === true) {
            percentage = KVARanges[i].value;
            break
        }
    }
    return percentage
}

export default KVAPercentageCalculator;
