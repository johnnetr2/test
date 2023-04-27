import { valueFor } from "../Utils";

export const verbalPercentageCalculator = (props) => {
    const verbalRanges = [
        {
            min: 0.0,
            max: 25.41,
            value: 0
        },
        {
            min: 25.42,
            max: 28.32,
            value: 0.1
        },
        {
            min: 28.33,
            max: 31.66,
            value: 0.2
        },
        {
            min: 31.67,
            max: 35.51,
            value: 0.3
        },
        {
            min: 35.52,
            max: 39.26,
            value: 0.4
        },
        {
            min: 39.27,
            max: 43.43,
            value: 0.5
        },
        {
            min: 43.44,
            max: 47.80,
            value: 0.6
        },
        {
            min: 47.81,
            max: 51.66,
            value: 0.7
        },
        {
            min: 51.67,
            max: 55.93,
            value: 0.8
        },
        {
            min: 55.94,
            max: 59.9,
            value: 0.9
        },
        {
            min: 60.0,
            max: 64.78,
            value: 1
        },
        {
            min: 64.79,
            max: 68.84,
            value: 1.1
        },
        {
            min: 68.85,
            max: 72.59,
            value: 1.2
        },
        {
            min: 72.60,
            max: 83.12,
            value: 1.3
        },
        {
            min: 83.13,
            max: 73.33,
            value: 1.4
        },
        {
            min: 73.33,
            max: 83.64,
            value: 1.5
        },
        {
            min: 83.65,
            max: 86.87,
            value: 1.6
        },
        {
            min: 86.88,
            max: 89.57,
            value: 1.7
        },
        {
            min: 89.58,
            max: 92.18,
            value: 1.8
        },
        {
            min: 92.19,
            max: 94.68,
            value: 1.9
        },
        {
            min: 94.69,
            max: 100,
            value: 2
        },

    ]
    const normValue = valueFor(props, verbalRanges);
    return normValue
}

