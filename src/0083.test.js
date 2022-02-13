const Trie = require("./0083");

const t = new Trie();

t.addWord("fun");
t.addWord("fast");
t.addWord("fat");
t.addWord("fate");
t.addWord("father");

test(`t.findWord("taco")`, () => {
  expect(t.findWord("taco")).toEqual(undefined);
});

test(`t.findWord("fat").characters`, () => {
  expect(t.findWord("fat").characters).toEqual({ t: Trie });
});

test(`t.findWord("father").characters`, () => {
  expect(t.findWord("father").characters).toEqual({});
});

test(`t.findWord("father").isWord`, () => {
  expect(t.findWord("father").isWord).toEqual(true);
});
