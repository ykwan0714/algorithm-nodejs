const DoublyLinkedList = require("./0030");

const doublyLinkedList = new DoublyLinkedList();

test(`doublyLinkedList.push(5).push(10).push(15).push(20)`, () => {
  expect(doublyLinkedList.push(5).push(10).push(15).push(20)).toEqual(
    doublyLinkedList
  );
});

test(`doublyLinkedList.remove(2).val`, () => {
  expect(doublyLinkedList.remove(2).val).toEqual(15);
});

test(`doublyLinkedList.remove(100)`, () => {
  expect(doublyLinkedList.remove(100)).toEqual(undefined);
});

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(3);
});

test(`doublyLinkedList.head.val`, () => {
  expect(doublyLinkedList.head.val).toEqual(5);
});

test(`doublyLinkedList.head.next.val`, () => {
  expect(doublyLinkedList.head.next.val).toEqual(10);
});

test(`doublyLinkedList.head.next.next.val`, () => {
  expect(doublyLinkedList.head.next.next.val).toEqual(20);
});
