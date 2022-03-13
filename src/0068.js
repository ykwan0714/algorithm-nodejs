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
  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length) {
      this.values[0] = end
      this.bubbleDown()
    }
    return max
  }
  bubbleDown() {
    let index = 0
    const length = this.values.length
    while (index < length) {
      const el = this.values[index]
      const leftIndex = 2 * index + 1
      const rightIndex = 2 * index + 2
      if (leftIndex > length - 1) break
      const leftEl = this.values[leftIndex]
      const rightEl = this.values[rightIndex]
      const biggestChildrenIndex = leftEl > rightEl ? leftIndex : rightIndex
      if (el < this.values[biggestChildrenIndex]) {
        this.values[index] = this.values[biggestChildrenIndex]
        this.values[biggestChildrenIndex] = el
        index = biggestChildrenIndex
      } else {
        break
      }
    }
  }
  /* alt
   bubbleDown() {
    let index = 0
    const length = this.values.length
    while (index < length) {
      const element = this.values[index]
      const leftIndex = 2 * index + 1
      const rightIndex = 2 * index + 2
      let leftElement, rightElement
      let swap = null
      if (leftIndex < length) {
        leftElement = this.values[leftIndex]
        if (element < leftElement) {
          swap = leftIndex
        }
      }
      if (rightIndex < length) {
        rightElement = this.values[rightIndex]
        if ((swap === null && element < rightElement) ||
          (swap !== null && leftElement < rightElement )) {
          swap = rightIndex
        }
      }
      if (swap === null) break
      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }*/
}

module.exports = MaxBinaryHeap
