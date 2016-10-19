// 1.1 - Is Unique
//
// Implement and algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structure?

export const isUnique = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    let count = 0;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) { count += 1; }
    }
    if (count > 0) { return false; }
  }
  return true;
};


// # 1.2 - Check Permutation
// #
// # Given two strings, write a method to decide if one is a permutaion of the
// # other.

export const permutaion = (str1, str2) => {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};


// # 1.3 - URLify
// #
// # Write a method to replace all spaces in a string with '%20'. You may assume
// # that the string has a sufficient space at the end to hold the additional
// # characters, and that you are given the "true" length of the string.
// #
// # EXAMPLE
// # Input:    "Mr John Smith    ", 13
// # Output:   "Mr%20John%20Smith"

const splice = (str, idx, count, el) => {
  return str.slice(0, idx) + el + str.slice(idx + count, str.length);
};

export const urlify = (str, len) => {
  let current = str.length - 1;
  for (let i = current; i > 0; i--) {
    if (i < len && current > i) {
      if (str[i] === " ") {
        str = splice(str, current    , 1, '0');
        str = splice(str, current - 1, 1, '2');
        str = splice(str, current - 2, 1, '%');
        current -= 3;
      } else {
        str = splice(str, current, 1, str[i]);
        current -= 1;
      }
    }
  }
  return str;
};


// # 1.4 - Palindrome Permutation
// #
// # Given a string, write a function to check if it is a permutation of a palindrome.
// # A palindrome is a word or phrase that is the same forwards and backwards. A
// # permutation is a rearrangement of letters. The palindrome does not need to be
// # limited to just dictionary words.
// #
// # EXAMPLE
// # input:    "Tact Coa"
// # output:   True (permutations: "taco cat", "acto cta", ect.)

export const palindromePermutation = (str) => {
  let odds    = 0;
  let letters = {};

  str.toLowerCase().split('').forEach(l => {
    if (l !== " ") {
      if (letters[l]) {
        letters[l] += 1;
        (letters[l] % 2 === 0) ? (odds -= 1) : (odds += 1);
      } else {
        letters[l] = 1;
        odds += 1;
      }
    }
  });

  return odds <= 1;
};

// # 1.5 - One Away
// #
// # There are three types if edits that can be preformed on strings: insert a
// # character, remove a character, or replace a character. Given two strings,
// # write a function to check if they are one edit (or zero edits) away.
// #
// # EXAMPLE
// # pale,   ple     -> true
// # pales,  pale    -> true
// # pale,   bale    -> true
// # pale,   bake    -> false

export const oneAway = (str1, str2) => {
  if (levenshteinDistance(str1, str2) <= 1) { return true; }
  return false;
};

const levenshteinDistance = (str1, str2, len1 = str1.length, len2 = str2.length) => {
  if (len1 === 0) { return len2; }
  if (len2 === 0) { return len1; }

  let cost = (str1[len1 - 1] === str2[len2 - 1]) ? 0 : 1;

  return Math.min(
    levenshteinDistance(str1, str2, len1 - 1, len2    ) + 1,
    levenshteinDistance(str1, str2, len1    , len2 - 1) + 1,
    levenshteinDistance(str1, str2, len1 - 1, len2 - 1) + cost
  );
};


// # 1.6 - String Compression
// #
// # Implement a method to perform basic string compression using the counts of
// # repeated characters. For example, the strinfg 'aabcccccaaa' would become
// # 'a2b1c5a3'. If the 'compressed' string would not become smaller than the
// # originazl string, your method should retrun the original string. you can
// # assumer the string has only uppercased and lowercase letters (a-z).

export const stringCompression = (str) => {
  let final   = '';
  let current = str[0];
  let count   = 1;

  for (let i = 1; i < str.length + 1; i++) {
    if (str[i] === current) {
      count += 1;
    } else {
      final += `${current}${count}`;
      current = str[i];
      count = 1;
    }
  }

  if (final.length <= str.length) {
    return final;
  } else {
    return str;
  }
};

// # 1.7 - Rotate Matrix
// #
// # Given an image represented by an NxN matrix, where each pixel in the image is
// # 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
// # place?

export const rotateImage = (image, lvl = 0) => {
  let len = (image.length - (lvl * 2));
  if (len <= 0) { return image; }

  for (let i = (0 + lvl); i < (len + lvl) - 1; i++) {
    let temp = image[lvl][i];
    let j = (lvl + len) - 1;

    image[ lvl ][  i  ]   = image[j - i][ lvl ];
    image[j - i][ lvl ]   = image[  j  ][j - i];
    image[  j  ][j - i]   = image[  i  ][  j  ];
    image[  i  ][  j  ]   = temp;
  }

  return rotateImage(image, lvl + 1);
};


// # 1.8 - Zero matrix
// #
// # Write an algorithm such that if an element in an MxN matrix is 0, it’s entire
// # row and column are set to 0.

export const zeroMatrix = (matrix) => {
  let changed = new Set();

  matrix.forEach((arr, row) => {
    let zero = false;

    arr.forEach((val, col) => {
      if (val === 0) {
        if (!changed.has(val)) {
          zero = true;
          matrix.map(r => { r[col] = 0; });
          changed.add(col);
        }
      }
    });

    if (zero) {
      let newArr = arr.map( el =>  0 );
      matrix[row] = newArr;
    }
  });

  return matrix;
};

// # 1.9 - String Rotation
// #
// # Assume you have a method is_substring? which checks if one word is a substring
// # of another. Given two strings, str1 and str2, write code to check if str2 is a
// # rotation of str1 using only one call to is_substring? (e.g. 'waterbottle' is a
// # rotation of 'erbottlewat')

export const stringRotation = (str1, str2, isSubstring) => {
  if (str1.length !== str2.length || str1.length === 0) { return false; }
  return isSubstring(str1 + str1, str2);
};
//
// def string_rotation?(str1, str2)
//   is_substring?(str1 + str1, str2)
// end
