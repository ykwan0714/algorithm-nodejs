const Trie = require("./0084");

const t = new Trie();

t.addWord("fun");
t.addWord("fast");
t.addWord("fat");
t.addWord("fate");
t.addWord("father");
t.addWord("forget");
t.addWord("awesome");
t.addWord("argue");

test(`t.getWords()`, () => {
  expect(t.getWords()).toEqual(
    expect.objectContaining([
      "fun",
      "fast",
      "fat",
      "fate",
      "father",
      "forget",
      "awesome",
      "argue",
    ])
  );
});

test(`t.getWords().length`, () => {
  expect(t.getWords().length).toEqual(8);
});
