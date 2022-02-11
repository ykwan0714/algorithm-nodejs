const DoublyLinkedList = require("./0029");

const doublyLinkedList = new DoublyLinkedList();

test(`doublyLinkedList.push(5).push(10).push(15).push(20)`, () => {
  expect(doublyLinkedList.push(5).push(10).push(15).push(20)).toEqual(
    doublyLinkedList
  );
});

test(`doublyLinkedList.set(0, 10)`, () => {
  expect(doublyLinkedList.set(0, 10)).toEqual(true);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(4);
});

test(`doublyLinkedList.head.val`, () => {
  expect(doublyLinkedList.head.val).toEqual(10);
});

test(`doublyLinkedList.set(10, 10)`, () => {
  expect(doublyLinkedList.set(10, 10)).toEqual(false);
});

test(`doublyLinkedList.set(2, 100)`, () => {
  expect(doublyLinkedList.set(2, 100)).toEqual(true);
});

test(`doublyLinkedList.head.next.next.val`, () => {
  expect(doublyLinkedList.head.next.next.val).toEqual(100);
});
