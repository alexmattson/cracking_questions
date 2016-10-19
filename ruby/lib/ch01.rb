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
