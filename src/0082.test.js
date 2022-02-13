const Trie = require("./0082");

const t = new Trie();

t.addWord("fun");
t.addWord("fast");
t.addWord("fat");
t.addWord("fate");
t.addWord("father");
t.addWord("forget");
t.addWord("awesome");
t.addWord("argue");

t.removeWord("fat");

test(`t.characters.f.characters.a.characters.t.isWord`, () => {
  expect(t.characters.f.characters.a.characters.t.isWord).toEqual(false);
});

test(`t.characters.f.characters.a.characters.t.characters.e.isWord`, () => {
  expect(t.characters.f.characters.a.characters.t.characters.e.isWord).toEqual(
    true
  );
});

t.removeWord("argue");

test(`t.characters.a.characters.r`, () => {
  expect(t.characters.a.characters.r).toEqual(undefined);
});
