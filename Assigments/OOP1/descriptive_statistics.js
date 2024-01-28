class DescriptiveStatistics {
  constructor(data) {
    this.data = data;
  }

  // Measures of Central Tendency

  mean() {
    const sum = this.data.reduce((acc, value) => acc + value, 0);
    return sum / this.data.length;
  }

  median() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
      return sortedData[middleIndex];
    }
  }

  mode() {
    const frequencyMap = {};
    let maxFrequency = 0;
    let modes = [];

    for (const value of this.data) {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      if (frequencyMap[value] > maxFrequency) {
        maxFrequency = frequencyMap[value];
        modes = [value];
      } else if (frequencyMap[value] === maxFrequency) {
        modes.push(value);
      }
    }

    return modes.length === this.data.length ? [] : modes;
  }

  // Measures of Dispersion

  range() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  }

  variance() {
    const meanValue = this.mean();
    const squaredDifferences = this.data.map(
      (value) => (value - meanValue) ** 2
    );
    return (
      squaredDifferences.reduce((acc, value) => acc + value, 0) /
      this.data.length
    );
  }
}

// These are some examples
const data = [12, 15, 18, 22, 25, 25, 30, 35, 40, 42];
const statsCalculator = new DescriptiveStatistics(data);

console.log("Mean:", statsCalculator.mean());
console.log("Median:", statsCalculator.median());
console.log("Mode:", statsCalculator.mode());
console.log("Range:", statsCalculator.range());
console.log("Variance:", statsCalculator.variance());
