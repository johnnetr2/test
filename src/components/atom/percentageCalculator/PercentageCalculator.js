import { valueFor } from "./Utils";

export const XYZNormeringValueFor = (percentage) => {
  const XYZRanges = [
    {
      min: 0.0,
      max: 24.6,
      value: 0,
    },
    {
      min: 24.7,
      max: 27.7,
      value: 0.1,
    },
    {
      min: 27.8,
      max: 30.3,
      value: 0.2,
    },
    {
      min: 30.4,
      max: 33.1,
      value: 0.3,
    },
    {
      min: 33.2,
      max: 36.1,
      value: 0.4,
    },
    {
      min: 36.2,
      max: 39.9,
      value: 0.5,
    },
    {
      min: 40.0,
      max: 43.8,
      value: 0.6,
    },
    {
      min: 43.9,
      max: 47.8,
      value: 0.7,
    },
    {
      min: 47.9,
      max: 52.6,
      value: 0.8,
    },
    {
      min: 52.7,
      max: 57.1,
      value: 0.9,
    },
    {
      min: 57.2,
      max: 61.4,
      value: 1,
    },
    {
      min: 61.5,
      max: 66.2,
      value: 1.1,
    },
    {
      min: 66.3,
      max: 70.2,
      value: 1.2,
    },
    {
      min: 70.3,
      max: 74.2,
      value: 1.3,
    },
    {
      min: 74.3,
      max: 78.1,
      value: 1.4,
    },
    {
      min: 78.2,
      max: 81.9,
      value: 1.5,
    },
    {
      min: 82.0,
      max: 85.2,
      value: 1.6,
    },
    {
      min: 85.3,
      max: 88.1,
      value: 1.7,
    },
    {
      min: 88.2,
      max: 90.7,
      value: 1.8,
    },
    {
      min: 90.8,
      max: 93.2,
      value: 1.9,
    },
    {
      min: 93.3,
      max: 100,
      value: 2,
    },
  ];
  return valueFor(percentage, XYZRanges);
};

export const KVANormeringValueFor = (percentage) => {
  const KVARanges = [
    {
      min: 0.0,
      max: 24.6,
      value: 0,
    },
    {
      min: 24.7,
      max: 27.7,
      value: 0.1,
    },
    {
      min: 27.8,
      max: 30.4,
      value: 0.2,
    },
    {
      min: 30.5,
      max: 33.2,
      value: 0.3,
    },
    {
      min: 33.3,
      max: 36.2,
      value: 0.4,
    },
    {
      min: 36.3,
      max: 39.9,
      value: 0.5,
    },
    {
      min: 40.0,
      max: 43.8,
      value: 0.6,
    },
    {
      min: 43.9,
      max: 47.9,
      value: 0.7,
    },
    {
      min: 48.0,
      max: 52.7,
      value: 0.8,
    },
    {
      min: 52.8,
      max: 57.2,
      value: 0.9,
    },
    {
      min: 57.3,
      max: 61.4,
      value: 1,
    },
    {
      min: 61.5,
      max: 66.2,
      value: 1.1,
    },
    {
      min: 66.3,
      max: 70.3,
      value: 1.2,
    },
    {
      min: 70.4,
      max: 74.3,
      value: 1.3,
    },
    {
      min: 74.4,
      max: 78.2,
      value: 1.4,
    },
    {
      min: 78.3,
      max: 82.0,
      value: 1.5,
    },
    {
      min: 82.1,
      max: 85.3,
      value: 1.6,
    },
    {
      min: 85.4,
      max: 88.2,
      value: 1.7,
    },
    {
      min: 88.3,
      max: 90.8,
      value: 1.8,
    },
    {
      min: 90.9,
      max: 93.3,
      value: 1.9,
    },
    {
      min: 93.4,
      max: 100,
      value: 2,
    },
  ];
  return valueFor(percentage, KVARanges);
};

export const NOGNormeringValueFor = (percentage) => {
  const NOGRanges = [
    {
      min: 0.0,
      max: 24.9,
      value: 0,
    },
    {
      min: 25.0,
      max: 28.0,
      value: 0.1,
    },
    {
      min: 28.1,
      max: 30.8,
      value: 0.2,
    },
    {
      min: 30.9,
      max: 33.6,
      value: 0.3,
    },
    {
      min: 33.7,
      max: 36.6,
      value: 0.4,
    },
    {
      min: 36.7,
      max: 40.4,
      value: 0.5,
    },
    {
      min: 40.5,
      max: 44.4,
      value: 0.6,
    },
    {
      min: 44.5,
      max: 48.5,
      value: 0.7,
    },
    {
      min: 48.6,
      max: 53.3,
      value: 0.8,
    },
    {
      min: 53.4,
      max: 57.9,
      value: 0.9,
    },
    {
      min: 58.0,
      max: 62.2,
      value: 1,
    },
    {
      min: 62.3,
      max: 67.1,
      value: 1.1,
    },
    {
      min: 67.2,
      max: 71.2,
      value: 1.2,
    },
    {
      min: 71.3,
      max: 75.2,
      value: 1.3,
    },
    {
      min: 75.3,
      max: 79.1,
      value: 1.4,
    },
    {
      min: 79.2,
      max: 83.0,
      value: 1.5,
    },
    {
      min: 83.1,
      max: 86.3,
      value: 1.6,
    },
    {
      min: 86.4,
      max: 89.3,
      value: 1.7,
    },
    {
      min: 89.4,
      max: 91.9,
      value: 1.8,
    },
    {
      min: 92.0,
      max: 94.4,
      value: 1.9,
    },
    {
      min: 94.5,
      max: 100,
      value: 2,
    },
  ];
  return valueFor(percentage, NOGRanges);
};

export const DTKNormeringValueFor = (percentage) => {
  const DTKRanges = [
    {
      min: 0.0,
      max: 24.6,
      value: 0,
    },
    {
      min: 24.7,
      max: 27.7,
      value: 0.1,
    },
    {
      min: 27.8,
      max: 30.3,
      value: 0.2,
    },
    {
      min: 30.4,
      max: 33.1,
      value: 0.3,
    },
    {
      min: 33.2,
      max: 36.1,
      value: 0.4,
    },
    {
      min: 36.2,
      max: 39.9,
      value: 0.5,
    },
    {
      min: 40.0,
      max: 43.8,
      value: 0.6,
    },
    {
      min: 43.9,
      max: 47.8,
      value: 0.7,
    },
    {
      min: 47.9,
      max: 52.6,
      value: 0.8,
    },
    {
      min: 52.7,
      max: 57.1,
      value: 0.9,
    },
    {
      min: 57.2,
      max: 61.4,
      value: 1,
    },
    {
      min: 61.5,
      max: 66.2,
      value: 1.1,
    },
    {
      min: 66.3,
      max: 70.2,
      value: 1.2,
    },
    {
      min: 70.3,
      max: 74.2,
      value: 1.3,
    },
    {
      min: 74.3,
      max: 78.1,
      value: 1.4,
    },
    {
      min: 78.2,
      max: 81.9,
      value: 1.5,
    },
    {
      min: 82.0,
      max: 85.2,
      value: 1.6,
    },
    {
      min: 85.3,
      max: 88.1,
      value: 1.7,
    },
    {
      min: 88.2,
      max: 90.7,
      value: 1.8,
    },
    {
      min: 90.8,
      max: 93.2,
      value: 1.9,
    },
    {
      min: 93.3,
      max: 100,
      value: 2,
    },
  ];
  return valueFor(percentage, DTKRanges);
};

export const ORDNormeringValueFor = (percentage) => {
  const ORDRanges = [
    {
      min: 0.0,
      max: 25.2,
      value: 0,
    },
    {
      min: 25.3,
      max: 28.1,
      value: 0.1,
    },
    {
      min: 28.2,
      max: 31.5,
      value: 0.2,
    },
    {
      min: 31.6,
      max: 35.3,
      value: 0.3,
    },
    {
      min: 35.4,
      max: 39.0,
      value: 0.4,
    },
    {
      min: 39.1,
      max: 43.2,
      value: 0.5,
    },
    {
      min: 43.3,
      max: 47.6,
      value: 0.6,
    },
    {
      min: 47.7,
      max: 51.4,
      value: 0.7,
    },
    {
      min: 51.5,
      max: 55.6,
      value: 0.8,
    },
    {
      min: 55.7,
      max: 59.7,
      value: 0.9,
    },
    {
      min: 59.8,
      max: 64.5,
      value: 1,
    },
    {
      min: 64.6,
      max: 68.5,
      value: 1.1,
    },
    {
      min: 68.6,
      max: 72.3,
      value: 1.2,
    },
    {
      min: 72.4,
      max: 76.0,
      value: 1.3,
    },
    {
      min: 76.1,
      max: 79.7,
      value: 1.4,
    },
    {
      min: 79.8,
      max: 83.3,
      value: 1.5,
    },
    {
      min: 83.4,
      max: 86.5,
      value: 1.6,
    },
    {
      min: 86.6,
      max: 89.2,
      value: 1.7,
    },
    {
      min: 89.3,
      max: 91.8,
      value: 1.8,
    },
    {
      min: 91.9,
      max: 94.3,
      value: 1.9,
    },
    {
      min: 94.4,
      max: 100,
      value: 2,
    },
  ];
  return valueFor(percentage, ORDRanges);
};

export const LASNormeringValueFor = (percentage) => {
  const LASRanges = [
    {
      min: 0.0,
      max: 24.9,
      value: 0,
    },
    {
      min: 25.0,
      max: 27.8,
      value: 0.1,
    },
    {
      min: 27.9,
      max: 31.1,
      value: 0.2,
    },
    {
      min: 31.2,
      max: 34.9,
      value: 0.3,
    },
    {
      min: 35.0,
      max: 38.6,
      value: 0.4,
    },
    {
      min: 38.7,
      max: 42.7,
      value: 0.5,
    },
    {
      min: 42.8,
      max: 47.0,
      value: 0.6,
    },
    {
      min: 47.1,
      max: 50.8,
      value: 0.7,
    },
    {
      min: 50.9,
      max: 55.0,
      value: 0.8,
    },
    {
      min: 55.1,
      max: 59.0,
      value: 0.9,
    },
    {
      min: 59.1,
      max: 63.7,
      value: 1,
    },
    {
      min: 63.8,
      max: 67.7,
      value: 1.1,
    },
    {
      min: 67.8,
      max: 71.4,
      value: 1.2,
    },
    {
      min: 71.5,
      max: 75.1,
      value: 1.3,
    },
    {
      min: 75.2,
      max: 78.8,
      value: 1.4,
    },
    {
      min: 78.9,
      max: 82.3,
      value: 1.5,
    },
    {
      min: 82.4,
      max: 85.5,
      value: 1.6,
    },
    {
      min: 85.6,
      max: 88.2,
      value: 1.7,
    },
    {
      min: 88.3,
      max: 90.7,
      value: 1.8,
    },
    {
      min: 90.8,
      max: 93.2,
      value: 1.9,
    },
    {
      min: 93.3,
      max: 100,
      value: 2,
    },
  ];
  return valueFor(percentage, LASRanges);
};

export const MEKNormeringValueFor = (percentage) => {
  const MEKRanges = [
    {
      min: 0.0,
      max: 25.6,
      value: 0,
    },
    {
      min: 25.7,
      max: 28.5,
      value: 0.1,
    },
    {
      min: 28.6,
      max: 31.9,
      value: 0.2,
    },
    {
      min: 32.0,
      max: 35.8,
      value: 0.3,
    },
    {
      min: 35.9,
      max: 39.6,
      value: 0.4,
    },
    {
      min: 39.7,
      max: 43.8,
      value: 0.5,
    },
    {
      min: 43.9,
      max: 48.2,
      value: 0.6,
    },
    {
      min: 48.3,
      max: 52.1,
      value: 0.7,
    },
    {
      min: 52.2,
      max: 56.4,
      value: 0.8,
    },
    {
      min: 56.5,
      max: 60.5,
      value: 0.9,
    },
    {
      min: 60.6,
      max: 65.3,
      value: 1,
    },
    {
      min: 65.4,
      max: 69.5,
      value: 1.1,
    },
    {
      min: 69.6,
      max: 73.2,
      value: 1.2,
    },
    {
      min: 73.3,
      max: 77.0,
      value: 1.3,
    },
    {
      min: 77.1,
      max: 80.8,
      value: 1.4,
    },
    {
      min: 80.9,
      max: 84.4,
      value: 1.5,
    },
    {
      min: 84.5,
      max: 87.7,
      value: 1.6,
    },
    {
      min: 87.8,
      max: 90.4,
      value: 1.7,
    },
    {
      min: 90.5,
      max: 93.0,
      value: 1.8,
    },
    {
      min: 93.1,
      max: 95.5,
      value: 1.9,
    },
    {
      min: 95.6,
      max: 100,
      value: 2,
    },
  ];
  return valueFor(percentage, MEKRanges);
};

export const ELFNormeringValueFor = (percentage) => {
  const ELFRanges = [
    {
      min: 0.0,
      max: 25.5,
      value: 0,
    },
    {
      min: 25.6,
      max: 28.4,
      value: 0.1,
    },
    {
      min: 28.5,
      max: 31.7,
      value: 0.2,
    },
    {
      min: 31.8,
      max: 35.6,
      value: 0.3,
    },
    {
      min: 35.7,
      max: 39.4,
      value: 0.4,
    },
    {
      min: 39.5,
      max: 43.6,
      value: 0.5,
    },
    {
      min: 43.7,
      max: 48.0,
      value: 0.6,
    },
    {
      min: 48.1,
      max: 51.9,
      value: 0.7,
    },
    {
      min: 52.0,
      max: 56.2,
      value: 0.8,
    },
    {
      min: 56.3,
      max: 60.2,
      value: 0.9,
    },
    {
      min: 60.3,
      max: 65.1,
      value: 1,
    },
    {
      min: 65.2,
      max: 69.1,
      value: 1.1,
    },
    {
      min: 69.2,
      max: 72.9,
      value: 1.2,
    },
    {
      min: 73.0,
      max: 76.7,
      value: 1.3,
    },
    {
      min: 76.8,
      max: 80.5,
      value: 1.4,
    },
    {
      min: 80.6,
      max: 84.0,
      value: 1.5,
    },
    {
      min: 84.1,
      max: 87.3,
      value: 1.6,
    },
    {
      min: 87.4,
      max: 90.0,
      value: 1.7,
    },
    {
      min: 90.1,
      max: 92.6,
      value: 1.8,
    },
    {
      min: 92.7,
      max: 95.1,
      value: 1.9,
    },
    {
      min: 95.2,
      max: 100,
      value: 2,
    },
  ];
  return valueFor(percentage, ELFRanges);
};

export const KvantitativNormeringValueFor = (percentage) => {
  const kvantitativeRanges = [
    {
      min: 0.0,
      max: 24.6,
      value: 0,
    },
    {
      min: 24.7,
      max: 27.7,
      value: 0.1,
    },
    {
      min: 27.8,
      max: 30.4,
      value: 0.2,
    },
    {
      min: 30.5,
      max: 33.2,
      value: 0.3,
    },
    {
      min: 33.3,
      max: 36.2,
      value: 0.4,
    },
    {
      min: 36.3,
      max: 39.9,
      value: 0.5,
    },
    {
      min: 40.0,
      max: 43.8,
      value: 0.6,
    },
    {
      min: 43.9,
      max: 47.9,
      value: 0.7,
    },
    {
      min: 48.0,
      max: 52.7,
      value: 0.8,
    },
    {
      min: 52.8,
      max: 57.2,
      value: 0.9,
    },
    {
      min: 57.3,
      max: 61.4,
      value: 1,
    },
    {
      min: 61.5,
      max: 66.2,
      value: 1.1,
    },
    {
      min: 66.3,
      max: 70.3,
      value: 1.2,
    },
    {
      min: 70.4,
      max: 74.3,
      value: 1.3,
    },
    {
      min: 74.4,
      max: 78.2,
      value: 1.4,
    },
    {
      min: 78.3,
      max: 82.0,
      value: 1.5,
    },
    {
      min: 82.1,
      max: 85.3,
      value: 1.6,
    },
    {
      min: 85.4,
      max: 88.2,
      value: 1.7,
    },
    {
      min: 88.3,
      max: 90.8,
      value: 1.8,
    },
    {
      min: 90.9,
      max: 93.3,
      value: 1.9,
    },
    {
      min: 93.4,
      max: 100,
      value: 2,
    },
  ];
  return valueFor(percentage, kvantitativeRanges);
};

export const VerbalNormeringValueFor = (percentage) => {
  const verbelRanges = [
    {
      min: 0.0,
      max: 25.41,
      value: 0,
    },
    {
      min: 25.42,
      max: 28.32,
      value: 0.1,
    },
    {
      min: 28.33,
      max: 31.66,
      value: 0.2,
    },
    {
      min: 31.67,
      max: 35.51,
      value: 0.3,
    },
    {
      min: 35.52,
      max: 39.26,
      value: 0.4,
    },
    {
      min: 39.27,
      max: 43.43,
      value: 0.5,
    },
    {
      min: 43.44,
      max: 47.8,
      value: 0.6,
    },
    {
      min: 47.81,
      max: 51.66,
      value: 0.7,
    },
    {
      min: 51.67,
      max: 55.93,
      value: 0.8,
    },
    {
      min: 55.94,
      max: 59.9,
      value: 0.9,
    },
    {
      min: 60.0,
      max: 64.78,
      value: 1,
    },
    {
      min: 64.79,
      max: 68.84,
      value: 1.1,
    },
    {
      min: 68.85,
      max: 72.59,
      value: 1.2,
    },
    {
      min: 72.6,
      max: 76.34,
      value: 1.3,
    },
    {
      min: 76.35,
      max: 80.09,
      value: 1.4,
    },
    {
      min: 80.1,
      max: 83.64,
      value: 1.5,
    },
    {
      min: 83.65,
      max: 86.87,
      value: 1.6,
    },
    {
      min: 86.88,
      max: 89.57,
      value: 1.7,
    },
    {
      min: 89.58,
      max: 92.18,
      value: 1.8,
    },
    {
      min: 92.19,
      max: 94.68,
      value: 1.9,
    },
    {
      min: 94.69,
      max: 100,
      value: 2,
    },
  ];
  return valueFor(percentage, verbelRanges);
};
