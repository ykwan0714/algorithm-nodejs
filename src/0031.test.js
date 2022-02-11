const DoublyLinkedList = require("./0031");

const doublyLinkedList = new DoublyLinkedList();

test(`doublyLinkedList.push(5)`, () => {
  expect(doublyLinkedList.push(5)).toEqual(doublyLinkedList);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(1);
});

test(`doublyLinkedList.head.val`, () => {
  expect(doublyLinkedList.head.val).toEqual(5);
});

test(`doublyLinkedList.tail.val`, () => {
  expect(doublyLinkedList.tail.val).toEqual(5);
});

test(`doublyLinkedList.head.prev`, () => {
  expect(doublyLinkedList.head.prev).toEqual(null);
});

test(`doublyLinkedList.push(10)`, () => {
  expect(doublyLinkedList.push(10)).toEqual(doublyLinkedList);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(2);
});

test(`doublyLinkedList.head.val`, () => {
  expect(doublyLinkedList.head.val).toEqual(5);
});

test(`doublyLinkedList.head.next.val`, () => {
  expect(doublyLinkedList.head.next.val).toEqual(10);
});

test(`doublyLinkedList.tail.val`, () => {
  expect(doublyLinkedList.tail.val).toEqual(10);
});

test(`doublyLinkedList.head.next.prev.val`, () => {
  expect(doublyLinkedList.head.next.prev.val).toEqual(10);
});

test(`doublyLinkedList.push(15)`, () => {
  expect(doublyLinkedList.push(15)).toEqual(doublyLinkedList);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(3);
});

test(`doublyLinkedList.head.val`, () => {
  expect(doublyLinkedList.head.val).toEqual(5);
});

test(`doublyLinkedList.tail.val`, () => {
  expect(doublyLinkedList.tail.val).toEqual(15);
});

test(`doublyLinkedList.tail.prev.val`, () => {
  expect(doublyLinkedList.tail.prev.val).toEqual(10);
});

test(`doublyLinkedList.head.next.next.val`, () => {
  expect(doublyLinkedList.head.next.next.val).toEqual(15);
});

test(`doublyLinkedList.pop().val`, () => {
  expect(doublyLinkedList.pop().val).toEqual(15);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(2);
});

test(`doublyLinkedList.pop().val`, () => {
  expect(doublyLinkedList.pop().val).toEqual(10);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(1);
});

test(`doublyLinkedList.pop().val`, () => {
  expect(doublyLinkedList.pop().val).toEqual(5);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(0);
});

test(`doublyLinkedList.pop()`, () => {
  expect(doublyLinkedList.pop()).toEqual(undefined);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(0);
});
