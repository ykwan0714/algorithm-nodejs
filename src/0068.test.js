const MaxBinaryHeap = require("./0068")

const binaryHeap = new MaxBinaryHeap()

binaryHeap.insert(1)
binaryHeap.insert(2)
binaryHeap.insert(3)
binaryHeap.insert(4)
binaryHeap.insert(5)
binaryHeap.insert(6)

test(`binaryHeap.extractMax() => binaryHeap.values[0]`, () => {
  binaryHeap.extractMax() // 6
  expect(binaryHeap.values[0]).toEqual(5)
})

test(`binaryHeap.values`, () => {
  expect(binaryHeap.values).toEqual([5, 4, 2, 1, 3])
})

test(`binaryHeap.extractMax() => binaryHeap.values`, () => {
  binaryHeap.extractMax() // 5
  expect(binaryHeap.values).toEqual([4, 3, 2, 1])
})

test(`binaryHeap.extractMax() => binaryHeap.values`, () => {
  binaryHeap.extractMax() // 4
  expect(binaryHeap.values).toEqual([3, 1, 2])
})
test(`binaryHeap.extractMax() => binaryHeap.values`, () => {
  binaryHeap.extractMax() // 4
  binaryHeap.extractMax()
  binaryHeap.extractMax()
  expect(binaryHeap.values.length).toEqual(0)
})
