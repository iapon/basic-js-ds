const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    if (this.first === null) {
      this.first = new ListNode(value);
      this.last = this.first;
      return;
    }
    this.last.next = new ListNode(value);
    this.last = this.last.next;
  }

  dequeue() {
    if (this.last === null) {
      return null;
    }
    const { value } = this.first;
    this.first = this.first.next;
    return value;
  }
}

module.exports = {
  Queue,
};
