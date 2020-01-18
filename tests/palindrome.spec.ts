import { isPalindrome } from "../src/palindrome";

describe("isPalindrome basic functionality", () => {
  it("returns true for an empty string", () => {
    let result = isPalindrome("");
    expect(result).toBe(true);
  });

  it("returns false for words that are not palindromes", () => {
    let result = isPalindrome("はいいろのいろは");

    expect(result).toBe(false);
  });

  it("returns true for given palindrome example", () => {
    let result = isPalindrome("たけやぶやけた");
    expect(result).toBe(true);
  });

  it("returns true for another palindrome, of even length", () => {
    let result = isPalindrome("なわわな");
    expect(result).toBe(true);
  });
});

describe("isPalindrome limitations", () => {
  it("checks even over punctuation marks (spaces, fulls stops, quotes)", () => {
    let result = isPalindrome("わたし　まけましたわ");

    expect(result).toBe(false);
  });

  it("does not check for hiragana / katakana equivalence", () => {
    let result = isPalindrome("ダンスはすんだ");
    // 日本語的には　「回文」かな、とりあえずこの実装を抜きましょう。

    expect(result).toBe(false);
  });
});
