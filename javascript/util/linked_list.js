
class Link {
  constructor(val) {
    this.val = val;

    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Link(null);
    this.tail = new Link(null);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  add(val) {
    let link = new Link(val);

    this.tail.prev.next = link;
    link.prev = this.tail.prev;

    link.next = this.tail;
    this.tail.prev = link;
  }

  remove(link) {
    link.prev.next = link.next;
    link.next.prev = link.prev;
  }

  insert(link) {
    this.tail.prev.next = link;
    link.prev = this.tail.prev;
  }

  first() {
    return this.head.next;
  }

  last() {
    return this.tail.prev;
  }
}

export default LinkedList;
