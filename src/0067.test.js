const MaxBinaryHeap = require("./0067")
const binaryHeap = new MaxBinaryHeap()

test(`binaryHeap.insert(1) => binaryHeap.values[0]`, () => {
  binaryHeap.insert(1)
  expect(binaryHeap.values[0]).toEqual(1)
})

test(`binaryHeap.insert(2) => binaryHeap.values[0]`, () => {
  binaryHeap.insert(2)
  expect(binaryHeap.values[0]).toEqual(2)
})

test(`binaryHeap.values`, () => {
  expect(binaryHeap.values).toEqual([2, 1])
})

test(`binaryHeap.insert(3) => binaryHeap.values[0]`, () => {
  binaryHeap.insert(3)
  expect(binaryHeap.values[0]).toEqual(3)
})

test(`binaryHeap.values`, () => {
  expect(binaryHeap.values).toEqual([3, 1, 2])
})

test(`binaryHeap.insert(4) => binaryHeap.values[0]`, () => {
  binaryHeap.insert(4)
  expect(binaryHeap.values[0]).toEqual(4)
})

test(`binaryHeap.values`, () => {
  expect(binaryHeap.values).toEqual([4, 3, 2, 1])
})

test(`binaryHeap.insert(5) => binaryHeap.values[0]`, () => {
  binaryHeap.insert(5)
  expect(binaryHeap.values[0]).toEqual(5)
})

test(`binaryHeap.values`, () => {
  expect(binaryHeap.values).toEqual([5, 4, 2, 1, 3])
})

test(`binaryHeap.insert(6) => binaryHeap.values[0]`, () => {
  binaryHeap.insert(6)
  expect(binaryHeap.values[0]).toEqual(6)
})

test(`binaryHeap.values`, () => {
  expect(binaryHeap.values).toEqual([6, 4, 5, 1, 3, 2])
})
