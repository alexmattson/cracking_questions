import { expect } from 'chai';
import {
        removeDups,
        kthToLast,
        deleteLink,
        partition,
        sumList,
        palindrome,
        intersection,
        loopDetection
       } from '../lib/ch02.js';
import LinkedList from '../util/linked_list';


describe('removeDups', () => {

  let list = new LinkedList();
  list.add(1);
  list.add(1);
  list.add(2);

  it("removes duplicates from linked list", () => {
    removeDups(list);
    expect(list.first().val).to.eql(1);
    expect(list.first().next.val).to.eql(2);
  });
});

describe('kthToLast', () => {
  it("finds kth to last element", () => {
    let list = new LinkedList();
    for (let val = 0; val < 10; val++) { list.add(val); }

    let k = 0;
    expect(kthToLast(list, k).val).to.eql( 9 - k );
    k = 1;
    expect(kthToLast(list, k).val).to.eql( 9 - k );
    k = 3;
    expect(kthToLast(list, k).val).to.eql( 9 - k );
  });

  it("return nothing in an empty list", () => {
    let list = new LinkedList();
    expect(kthToLast(list, 0).val).to.eql(null);
  });
});

describe('deleteLink', () => {
  it("removes link form list", () => {
    let list = new LinkedList();
    for (let val = 0; val < 10; val++) { list.add(val); }

    let link = list.first().next; // 1
    deleteLink(link);
    expect(list.first().val).to.eql( 0 );
    expect(list.first().next.val).to.eql( 2 );
  });
});

describe('partition', () => {
  it("partitions a list correctly", () => {
    let list = new LinkedList();
    list.add(5);
    list.add(3);
    list.add(1);

    partition(list, 3);
    expect(list.first().val).to.eql( 1 );
    expect(list.first().next.val).to.be.at.least( 3 );
  });
});

describe('sumList', () => {
  it("takes correct sum of list and returns linked list in reverse order", () => {
    let list1 = new LinkedList();
    list1.add(7);
    list1.add(1);
    list1.add(6);
    let list2 = new LinkedList();
    list2.add(5);
    list2.add(9);
    list2.add(2);

    let result = sumList(list1, list2);
    let current = result.first();
    expect(current.val).to.eql( 2 );
    current = current.next;
    expect(current.val).to.eql( 1 );
    current = current.next;
    expect(current.val).to.eql( 9 );
  });
});

describe('palindrome', () => {
  it("returns true if linked list is a palindrome", () => {
    let list = new LinkedList();
    list.add('a');
    list.add('b');
    list.add('a');

    expect(palindrome(list)).to.eql( true );
  });

  it("returns false if linked list is not a palindrome", () => {
    let list = new LinkedList();
    list.add('a');
    list.add('b');
    list.add('d');

    expect(palindrome(list)).to.eql( false );
  });
});


describe('intersection', () => {
  it("returns link at intersection of two lists", () => {
    let list1 = new LinkedList();
    list1.add('a');
    list1.add('b');
    list1.add('c');
    list1.add('d');

    let list2 = new LinkedList();
    list2.add('d');
    list2.insert(list1.first().next.next);

    expect(intersection(list1, list2).val).to.eql('c');
  });

  it("returns null if no intersection", () => {
    let list1 = new LinkedList();
    list1.add('a');
    list1.add('b');
    list1.add('c');

    let list2 = new LinkedList();
    list2.add('d');
    list2.add('e');
    list2.add('f');


    expect(intersection(list1, list2)).to.eql(null);
  });
});

describe('loopDetection', () => {
  it("returns link at begining of loop", () => {
    let list = new LinkedList();
    list.add('a');
    list.add('b');
    list.add('c');
    list.insert(list.first().next);

    expect(loopDetection(list).val).to.eql('b');
  });

  it("returns null if no loop", () => {
    let list = new LinkedList();
    list.add('a');
    list.add('b');
    list.add('c');

    expect(loopDetection(list)).to.eql(null);
  });
});
