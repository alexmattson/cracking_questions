# 1.1 - Is Unique
#
# Implement and algorithm to determine if a string has all unique characters.
# What if you cannot use additional data structure?

def is_unique?(str)
  (0..str.length - 1).each do |i|
    count = 0
    (i + 1..str.length).each { |j| count += 1 if str[i] == str[j] }
    return false if count > 0
  end
  true
end


# 1.2 - Check Permutation
#
# Given two strings, write a method to decide if one is a permutaion of the
# other.

def permutaion?(str1, str2)
  str1.chars.sort == str2.chars.sort
end


# 1.3 - URLify
#
# Write a method to replace all spaces in a string with '%20'. You may assume
# that the string has a sufficient space at the end to hold the additional
# characters, and that you are given the "true" length of the string.
#
# EXAMPLE
# Input:    "Mr John Smith    ", 13
# Output:   "Mr%20John%20Smith"

def urlify(str, len)
  current = str.length - 1
  current.downto(1) do |i|
    if i < len && current > i
      if str[i] == " "
        str[current] = '0'
        str[current - 1] = '2'
        str[current - 2] = '%'
        current -= 3
      else
        str[current] = str[i]
        current -= 1
      end
    end
  end
  str
end


# 1.4 - Palindrome Permutation
#
# Given a string, write a function to check if it is a permutation of a palindrome.
# A palindrome is a word or phrase that is the same forwards and backwards. A
# permutation is a rearrangement of letters. The palindrome does not need to be
# limited to just dictionary words.
#
# EXAMPLE
# input:    "Tact Coa"
# output:   True (permutations: "taco cat", "acto cta", ect.)

def palindrome_permutation(str)
  no_spaces   = str.delete(" ").downcase.split("")
  odds        = 0
  letter      = Hash.new

  no_spaces.each do |l|
    if letter[l]
      letter[l] += 1
      (letter[l] % 2 == 0) ? (odds -= 1) : (odds += 1)
    else
      letter[l] = 1
      odds += 1
    end
  end

  odds <= 1
end


# 1.5 - One Away
#
# There are three types if edits that can be preformed on strings: insert a
# character, remove a character, or replace a character. Given two strings,
# write a function to check if they are one edit (or zero edits) away.
#
# EXAMPLE
# pale,   ple     -> true
# pales,  pale    -> true
# pale,   bale    -> true
# pale,   bake    -> false

def one_away(str1, str2, len1 = str1.length, len2 = str2.length)
  return true if levenshtein_distance(str1, str2) <= 1
  false
end

def levenshtein_distance(str1, str2, len1 = str1.length, len2 = str2.length)
  return len2 if len1 == 0
  return len1 if len2 == 0

  cost = (str1[len1 - 1] == str2[len2 - 1]) ? 0 : 1

  return [
    levenshtein_distance(str1, str2, len1 - 1, len2    ) + 1,
    levenshtein_distance(str1, str2, len1    , len2 - 1) + 1,
    levenshtein_distance(str1, str2, len1 - 1, len2 - 1) + cost
  ].min
end


# 1.6 - String Compression
#
# Implement a method to perform basic string compression using the counts of
# repeated characters. For example, the strinfg 'aabcccccaaa' would become
# 'a2b1c5a3'. If the 'compressed' string would not become smaller than the
# originazl string, your method should retrun the original string. you can
# assumer the string has only uppercased and lowercase letters (a-z).

def string_compression(str)
  final = ''
  current = str[0]
  count = 1

  (1).upto(str.length) do |i|
    if str[i] === current
      count += 1
    else
      final << "#{current}#{count}"
      current = str[i]
      count = 1
    end
  end

  final.length >= str.length ? str : final
end


# 1.7 - Rotate Matrix
#
# Given an image represented by an NxN matrix, where each pixel in the image is
# 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
# place?

def rotate_image(image, lvl = 0)
  len = (image.length - (lvl * 2))
  return image if len <= 0

  (0 + lvl).upto((len + lvl) - 2) do |i|
    temp = image[lvl][i]
    j = (lvl + len) - 1

    image[ lvl ][  i  ]   = image[j - i][ lvl ]
    image[j - i][ lvl ]   = image[  j  ][j - i]
    image[  j  ][j - i]   = image[  i  ][  j  ]
    image[  i  ][  j  ]   = temp
  end

  return rotate_image(image, lvl += 1)
end


# 1.8 - Zero matrix
#
# Write an algorithm such that if an element in an MxN matrix is 0, it’s entire
# row and column are set to 0.

def zero_matrix(matrix)
  changed = Set.new

  matrix.each_with_index do |arr, row|
    zero = false

    arr.each_with_index do |val, col|
      if val === 0
        unless changed.include?(col)
          zero = true
          matrix.map { |r| r[col] = 0 }
          changed.add(col)
        end
      end
    end

    if zero
      new_arr = arr.map{|el| el = 0}
      matrix[row] = new_arr
    end
  end

  matrix
end


# 1.9 - String Rotation
#
# Assume you have a method is_substring? which checks if one word is a substring
# of another. Given two strings, str1 and str2, write code to check if str2 is a
# rotation of str1 using only one call to is_substring? (e.g. 'waterbottle' is a
# rotation of 'erbottlewat')

def string_rotation?(str1, str2)
  is_substring?(str1 + str1, str2)
end
