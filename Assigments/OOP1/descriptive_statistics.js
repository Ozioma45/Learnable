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
}

// These are some examples
const data = [12, 15, 18, 22, 25, 25, 30, 35, 40, 42];
const statsCalculator = new DescriptiveStatistics(data);

console.log("Mean:", statsCalculator.mean());
console.log("Median:", statsCalculator.median());
