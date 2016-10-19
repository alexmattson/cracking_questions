require 'ch01'
require_relative '../spec_helper.rb'

describe "is_unique?" do

  it "returns true if letters are unique in string" do
    expect(is_unique?("str")).to eq(true)
  end

  it "returns false if letters are not unique in string" do
    expect(is_unique?("strr")).to eq(false)
  end

end


describe "permutaion?" do

  it "returns true if str2 is a permutaion of str1" do
    expect(permutaion?("abc", "cba")).to eq(true)
  end

  it "returns false if str2 is not a permutaion of str1" do
    expect(permutaion?("abc", "def")).to eq(false)
  end

end


describe "urlify" do

  it "returns a string with spaces replaced with '%20'" do
    expect(urlify("Mr John Smith    ", 13)).to eq("Mr%20John%20Smith")
  end

end


describe "palindrome_permutation" do

  it "returns true is str is palindrome permutation" do
    expect(palindrome_permutation("Tact Coa")).to eq(true)
  end

  it "returns false is str is not palindrome permutation" do
    expect(palindrome_permutation("Tacp Coa")).to eq(false)
  end

end


describe "one_away" do

  it "returns true for removing a letter" do
    expect(one_away("pale", "ple")).to eq(true)
  end

  it "returns true for adding a letter" do
    expect(one_away("pale", "pales")).to eq(true)
  end

  it "returns true for changing a letter" do
    expect(one_away("pale", "bale")).to eq(true)
  end

  it "returns false if not one away" do
    expect(one_away("pale", "bake")).to eq(false)
  end

end
