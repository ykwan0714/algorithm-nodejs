const DoublyLinkedList = require("./0034");

const doublyLinkedList = new DoublyLinkedList();

test(`doublyLinkedList.push(5).push(10).push(15).push(20)`, () => {
  expect(doublyLinkedList.push(5).push(10).push(15).push(20)).toEqual(
    doublyLinkedList
  );
});

doublyLinkedList.reverse();

test(`doublyLinkedList.length`, () => {
  expect(doublyLinkedList.length).toEqual(4);
});

test(`doublyLinkedList.head.val`, () => {
  expect(doublyLinkedList.head.val).toEqual(20);
});

test(`doublyLinkedList.head.next.val`, () => {
  expect(doublyLinkedList.head.next.val).toEqual(15);
});

test(`doublyLinkedList.head.next.next.val`, () => {
  expect(doublyLinkedList.head.next.next.val).toEqual(10);
});

test(`doublyLinkedList.head.next.next.next.val`, () => {
  expect(doublyLinkedList.head.next.next.next.val).toEqual(5);
});
