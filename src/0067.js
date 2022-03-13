class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(value) {
    this.values.push(value)
    this.bubbleUp()
  }
  bubbleUp() {
    let index = this.values.length - 1
    const element = this.values[index]
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parentElement = this.values[parentIndex]
      if (element > parentElement) {
        this.values[parentIndex] = element
        this.values[index] = parentElement
        index = parentIndex
      } else {
        break
      }
    }
  }
}

module.exports = MaxBinaryHeap
