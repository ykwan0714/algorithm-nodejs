const Trie = require("./0081");

const firstTrie = new Trie();

firstTrie.addWord("fun");

test(`firstTrie.characters`, () => {
  expect(firstTrie.characters).toEqual({ f: Trie });
});

test(`!!firstTrie.characters["f"]`, () => {
  expect(!!firstTrie.characters["f"]).toEqual(true);
});

test(`firstTrie.characters.f.characters.u`, () => {
  expect(firstTrie.characters.f.characters.u).toEqual({ u: Trie });
});

test(`!!firstTrie.characters.f.characters.u`, () => {
  expect(!!firstTrie.characters.f.characters.u).toEqual(true);
});

test(`firstTrie.characters.f.characters.u.characters.n.isWord`, () => {
  expect(firstTrie.characters.f.characters.u.characters.n.isWord).toEqual(true);
});

test(`!!firstTrie.characters.f.characters.u.characters.n`, () => {
  expect(!!firstTrie.characters.f.characters.u.characters.n).toEqual(true);
});

test(`!!firstTrie.characters.f.characters.u.characters.n.characters`, () => {
  expect(!!firstTrie.characters.f.characters.u.characters.n.characters).toEqual(
    {}
  );
});

test(`!!firstTrie.characters.f.characters.u.characters.l`, () => {
  expect(!!firstTrie.characters.f.characters.u.characters.l).toEqual(true);
});

const secondTrie = new Trie();

secondTrie.addWord("ha");
secondTrie.addWord("hat");
secondTrie.addWord("has");
secondTrie.addWord("have");
secondTrie.addWord("hate");

test(`secondTrie.characters.h.characters.a.isWord`, () => {
  expect(secondTrie.characters.h.characters.a.isWord).toEqual(true);
});

test(`secondTrie.characters.h.characters.a.characters.t.isWord`, () => {
  expect(secondTrie.characters.h.characters.a.characters.t.isWord).toEqual(
    true
  );
});

test(`secondTrie.characters.h.characters.a.characters.v.isWord`, () => {
  expect(secondTrie.characters.h.characters.a.characters.v.isWord).toEqual(
    false
  );
});

test(`secondTrie.characters.h.characters.a.characters.v.characters.e.isWord`, () => {
  expect(
    secondTrie.characters.h.characters.a.characters.v.characters.e.isWord
  ).toEqual(true);
});

test(`secondTrie.characters.h.characters.a.characters.t.characters.e.isWord`, () => {
  expect(
    secondTrie.characters.h.characters.a.characters.t.characters.e.isWord
  ).toEqual(true);
});

//

test(`secondTrie.characters.h.characters.a.characters.t.characters.e.isWord`, () => {
  expect(
    Object.keys(secondTrie.characters.h.characters.a.characters).length
  ).toEqual(3);
});
