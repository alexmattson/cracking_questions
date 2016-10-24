import LinkedList from '../util/linked_list';

// Linked list
// this.head // null val placeholder
// this.tail // null val placeholder
// -> add(val)
// -> remove(link)
// -> first()
// -> last()

// Link
// -> this.val
// -> this.next
// -> this.prev // if doubly linked list


// 2.1 - Remove Dups
//
// Write code to remove duplicates form an unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed?

export const removeDups = (list) => {
  let cache = new Set();

  let current = list.first();
  while (current.val) {
    if (cache.has(current.val)) {
      let next = current.next;
      list.remove(current);
      current = next;
    } else {
      cache.add(current.val);
      current = current.next;
    }
  }
};

// 2.2 - Return Kth to last
//
// Implement an algorithm to find the kth to last element of a singly linked
// list.

export const kthToLast = (list, k) => {
  let current = list.first();
  let cached = current;
  let count = 0;

  while (current.val !== null && current !== list.last()) {
    if (count !== k) {
      count += 1;
      current = current.next;
    } else {
        cached = cached.next;
        current = current.next;
    }
  }

  if ( count !== k ) { return; }
  else { return cached; }
};


// 2.3 - Delete Middle Node
//
// Implement an algorithm to delete a node in the middle (i.e., any node but the
// first and last node, not necessarily the exact middle) of a singly linked
// list, given only access to that node.

export const deleteLink = (link) => {
  let next = link.next;
  link.val = next.val;
  link.next = next.next;
};

// 2.4 - Partition
//
// Write code to partition a linked list around a value x, such that all nodes
// less than x come before all nodes greater than or equal to x. If x is
// contained within the list, the values of x only need to be after elements
// less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right
// partitions.
//
// EXAMPLE
// Input:   3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1  [partition = 5]
// Output:  3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

export const partition = (list, part) => {
  let current = list.first();

  while (current.val !== null) {
    let next = current.next;
    if ( current.val < part ) {
      list.remove(current);

      current.next = list.first();
      list.first().prev = current;
      list.head.next = current;
      current.prev = list.head;

    }
    current = next;
  }
};


// 2.5 - Sum List
//
// You have two numbers represented by a linked list, where each node containers
// a single digit. The digit are stored in reverse order, such that the 1's digit
// is at the head of the list. Write a function that adds the two numbers and
// returns the sum as a linked list.
//
// EXAMPLE
// Input:  (7 -> 1 -> 6) + (5 -> 9 -> 2). That is 617 + 295.
// Output:  2 -> 1 -> 9. That is 912.


export const sumList = (list1, list2) => {
  let num1 = getNum(list1.first());
  let num2 = getNum(list2.first());

  let product = num1 + num2;
  let final = new LinkedList();
  `${product}`.split('').reverse().forEach(val => { final.add(parseInt(val)); });
  return final;
};

const getNum = (node, num = '') => {
  if (node.val === null) { return parseInt(num); }
  return getNum(node.next, `${node.val}${num}`);
};


// 2.6 - Palindrome
//
// Implement a function to check if a linked list is a palindrome.

export const palindrome = (list) => {
  let cache = {};
  let singles = 0;

  let current = list.first();
  while ( current.val !== null ){
    if (cache[current.val]) {
      cache[current.val] += 1;
      cache[current.val] % 2 === 0 ? singles -= 1 : singles += 1;
    } else {
      cache[current.val] = 1;
      singles += 1;
    }
    current = current.next;
  }

  return singles === 1;
};


// 2.7 - Intersection
//
// Given two (singly) linked lists, determine if the two lists intersect. Return
// the intersecting node. Note that the intersection is defined based on
// reference, not value. That is, if the kth node of the first linked list id
// the exact same node (by reference) as the jth node of the second linked list,
// then they are intersecting.

export const intersection = (list1, list2) => {
  let result1 = getListInfo(list1);
  let result2 = getListInfo(list2);

  if (result1.tail !== result2.tail) { return null; }

  let longer = result1.length > result2.length ? list1.first() : list2.first();
  let shorter = result1.length < result2.length ? list1.first() : list2.first();

  let diff = Math.abs(result1.length - result2.length);
  for (let i = 0; i < diff; i++) { longer = longer.next; }

  while (shorter !== longer) {
    shorter = shorter.next;
    longer = longer.next;
  }

  return longer;
};

const getListInfo = (list) => {
  let length = 0;
  let current = list.head;

  while (current.next.val !== null) {
    length += 1;
    current = current.next;
  }

  return { length, tail: current };
};


// 2.8 - Loop Detection
//
// Given a circular linked list, implement an algorithm that returns the nose at
// the beginning of the loop.
//
// EXAMPLE
// Input:  A -> B -> C -> D -> C[the same C as erlier]
// Output: C

export const loopDetection = (list) => {
  let current = list.first();
  let cache = new Set();

  while (!cache.has(current)) {
    if (current.val === null) { return null; }
    cache.add(current);
    current = current.next;
  }

  return current;
};
