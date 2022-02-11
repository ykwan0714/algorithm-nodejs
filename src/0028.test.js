const DoublyLinkedList = require("./0028");

const doublyLinkedList = new DoublyLinkedList();

test(`doublyLinkedList.unshift(5)`, () => {
  expect(doublyLinkedList.unshift(5)).toEqual(doublyLinkedList);
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

test(`doublyLinkedList.unshift(10)`, () => {
  expect(doublyLinkedList.unshift(10)).toEqual(doublyLinkedList);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(2);
});

test(`doublyLinkedList.head.val`, () => {
  expect(doublyLinkedList.head.val).toEqual(10);
});

test(`doublyLinkedList.head.next.val`, () => {
  expect(doublyLinkedList.head.next.val).toEqual(5);
});

test(`doublyLinkedList.tail.val`, () => {
  expect(doublyLinkedList.tail.val).toEqual(5);
});

test(`doublyLinkedList.unshift(15)`, () => {
  expect(doublyLinkedList.unshift(15)).toEqual(doublyLinkedList);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(3);
});

test(`doublyLinkedList.head.val`, () => {
  expect(doublyLinkedList.head.val).toEqual(15);
});

test(`doublyLinkedList.tail.val`, () => {
  expect(doublyLinkedList.tail.val).toEqual(5);
});

test(`doublyLinkedList.head.next.next.val`, () => {
  expect(doublyLinkedList.head.next.next.val).toEqual(5);
});

test(`doublyLinkedList.shift().val`, () => {
  expect(doublyLinkedList.shift().val).toEqual(15);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(2);
});

test(`doublyLinkedList.shift().val`, () => {
  expect(doublyLinkedList.shift().val).toEqual(10);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(1);
});

test(`doublyLinkedList.shift().val`, () => {
  expect(doublyLinkedList.shift().val).toEqual(5);
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
