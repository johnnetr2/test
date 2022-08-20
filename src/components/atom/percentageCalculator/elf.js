function inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
}

const ELFPercentageCalculator = (props) => {
    const ELFRanges = [
        {
            min: 0.0,
            max: 25.5,
            value: 0
        },
        {
            min: 25.6,
            max: 28.4,
            value: 0.1
        },
        {
            min: 28.5,
            max: 31.7,
            value: 0.2
        },
        {
            min: 31.8,
            max: 35.6,
            value: 0.3
        },
        {
            min: 35.7,
            max: 39.4,
            value: 0.4
        },
        {
            min: 39.5,
            max: 43.6,
            value: 0.5
        },
        {
            min: 43.7,
            max: 48.0,
            value: 0.6
        },
        {
            min: 48.1,
            max: 51.9,
            value: 0.7
        },
        {
            min: 52.0,
            max: 56.2,
            value: 0.8
        },
        {
            min: 56.3,
            max: 60.2,
            value: 0.9
        },
        {
            min: 60.3,
            max: 65.1,
            value: 1
        },
        {
            min: 65.2,
            max: 69.1,
            value: 1.1
        },
        {
            min: 69.2,
            max: 72.9,
            value: 1.2
        },
        {
            min: 73.0,
            max: 83.5,
            value: 1.3
        },
        {
            min: 83.6,
            max: 73.6,
            value: 1.4
        },
        {
            min: 73.7,
            max: 84.0,
            value: 1.5
        },
        {
            min: 84.1,
            max: 87.3,
            value: 1.6
        },
        {
            min: 87.4,
            max: 90.0,
            value: 1.7
        },
        {
            min: 90.1,
            max: 92.6,
            value: 1.8
        },
        {
            min: 92.7,
            max: 95.1,
            value: 1.9
        },
        {
            min: 95.2,
            max: 100,
            value: 2
        },

    ]
    let percentage = 0
    for (let i = 0; i < ELFRanges.length; i++) {
        const isInRange = inRange(props.percentage, ELFRanges[i].min, ELFRanges[i].max)
        if (isInRange === true) {
            percentage = ELFRanges[i].value;
            break
        }
    }
    return percentage
}

export default ELFPercentageCalculator;
