const DoublyLinkedList = require("./0032");

const doublyLinkedList = new DoublyLinkedList();

test(`doublyLinkedList.push(5).push(10).push(15).push(20)`, () => {
  expect(doublyLinkedList.push(5).push(10).push(15).push(20)).toEqual(
    doublyLinkedList
  );
});

test(`doublyLinkedList.get(0).val`, () => {
  expect(doublyLinkedList.get(0).val).toEqual(5);
});

test(`doublyLinkedList.get(1).val`, () => {
  expect(doublyLinkedList.get(1).val).toEqual(10);
});

test(`doublyLinkedList.get(2).val`, () => {
  expect(doublyLinkedList.get(2).val).toEqual(15);
});

test(`doublyLinkedList.get(3).val`, () => {
  expect(doublyLinkedList.get(3).val).toEqual(20);
});

test(`doublyLinkedList.get(4).val`, () => {
  expect(doublyLinkedList.get(4).val).toEqual(null);
});
