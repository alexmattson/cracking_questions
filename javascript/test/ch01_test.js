import { expect } from 'chai';
import {
        isUnique,
        permutaion,
        urlify,
        palindromePermutation,
        oneAway,
        stringCompression,
        rotateImage,
        zeroMatrix,
        stringRotation
       } from '../lib/ch01.js';

describe("isUnique", () => {
  it("returns true if letters are unique in string", () => {
    expect(isUnique("str")).to.eql(true);
  });

  it("returns false if letters are not unique in string", () => {
    expect(isUnique("strr")).to.eql(false);
  });
});

describe("permutaion", () => {
  it("returns true if str2 is a permutaion of str1", () => {
    expect(permutaion("abc", "cba")).to.eql(true);
  });

  it("returns false if str2 is not a permutaion of str1", () => {
    expect(permutaion("abc", "def")).to.eql(false);
  });
});

describe("urlify", () => {
  it("returns a string with spaces replaced with '%20'", () => {
    expect(urlify("Mr John Smith    ", 13)).to.eql("Mr%20John%20Smith");
  });
});

describe("palindromePermutation", () => {
  it("returns true is str is palindrome permutation", () => {
    expect(palindromePermutation("Tact Coa")).to.eql(true);
  });

  it("returns false is str is not palindrome permutation", () => {
    expect(palindromePermutation("Tacp Coa")).to.eql(false);
  });
});

describe("oneAway", () => {
  it("returns true for removing a letter", () => {
    expect(oneAway("pale", "ple")).to.eql(true);
  });

  it("returns true for adding a letter", () => {
    expect(oneAway("pale", "pales")).to.eql(true);
  });

  it("returns true for changing a letter", () => {
    expect(oneAway("pale", "bale")).to.eql(true);
  });

  it("returns false if not one away", () => {
    expect(oneAway("pale", "bake")).to.eql(false);
  });
});

describe("stringCompression", () => {
  it("returns correctly compressed string", () => {
    expect(stringCompression('aabcccccaaa')).to.eql('a2b1c5a3');
  });

  it("returns original string if compressed is not shorter", () => {
    expect(stringCompression('abc')).to.eql('abc');
  });
});

describe("rotateImage", () => {
  it("should rotate an image", () => {
    let image = [
      [1,2,3,4],
      [1,2,3,4],
      [1,2,3,4],
      [1,2,3,4]
    ];

    let rotatedImage = [
      [1,1,1,1],
      [2,2,2,2],
      [3,3,3,3],
      [4,4,4,4]
    ];

    expect(rotateImage(image)).to.eql(rotatedImage);
  });
});

describe("zeroMatrix", () => {
  it("returns matrix with correct zeroed columns and rows", () => {
    let matrix = [
      [1,2,3],
      [0,2,3],
      [1,2,3]
    ];

    let zeroedMatrix = [
      [0,2,3],
      [0,0,0],
      [0,2,3]
    ];

    expect(zeroMatrix(matrix)).to.eql(zeroedMatrix);
  });
});

describe("stringRotation", () => {

  const isSubstring = (str1, str2) => {
    return str1.indexOf(str2) !== -1;
  };

  it("returns true if str2 is a string rotation of str1", () => {
    let str1 = "waterbottle";
    let str2 = "erbottlewat";

    expect(stringRotation(str1, str2, isSubstring)).to.eql(true);
  });

  it("returns false if str2 is not a string rotation of str1", () => {
    let str1 = "waterbottle";
    let str2 = "erbowatttle";

    expect(stringRotation(str1, str2, isSubstring)).to.eql(false);
  });

  it("returns false if str1 is not the same size as str2", () => {
    let str1 = "waterbottle";
    let str2 = "erbowatt";

    expect(stringRotation(str1, str2, isSubstring)).to.eql(false);
  });

  it("returns false with empty strings", () => {
    let str1 = "";
    let str2 = "";

    expect(stringRotation(str1, str2, isSubstring)).to.eql(false);
  });
});
