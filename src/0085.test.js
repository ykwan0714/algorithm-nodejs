const Trie = require("./0085");

const t = new Trie();

t.addWord("fun");
t.addWord("fast");
t.addWord("fat");
t.addWord("fate");
t.addWord("father");
t.addWord("forget");
t.addWord("awesome");
t.addWord("argue");

test(`t.autoComplete("fa")`, () => {
  expect(t.autoComplete("fa")).toEqual(
    expect.objectContaining(["fast", "fat", "fate", "father"])
  );
});

test(`t.autoComplete("a")`, () => {
  expect(t.autoComplete("a")).toEqual(
    expect.objectContaining(["awesome", "argue"])
  );
});

test(`t.autoComplete("arz")`, () => {
  expect(t.autoComplete("arz")).toEqual(expect.objectContaining([]));
});
