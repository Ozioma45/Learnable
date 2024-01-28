class DescriptiveStatistics {
  constructor(data) {
    this.data = data;
  }

  // Measures of Central Tendency

  mean() {
    const sum = this.data.reduce((acc, value) => acc + value, 0);
    return sum / this.data.length;
  }
}

// These are some examples
const data = [12, 15, 18, 22, 25, 25, 30, 35, 40, 42];
const statsCalculator = new DescriptiveStatistics(data);

console.log("Mean:", statsCalculator.mean());
