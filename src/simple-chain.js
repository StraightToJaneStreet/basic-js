const { NotImplementedError } = require('../extensions/index.js');

function Node(value) {
  return {
    value, next: null, prev: null
  }
}

const chainMaker = {

  getLength() {
    let cursor = this.root
    let len = 0
    while (cursor != null) {
      len++
      cursor = cursor.next
    }
    return len
  },

  addLink(value) {

    if (this.root == null) {
      this.root = Node(value)
      return this
    }

    let cursor = this.root
    let prevNode

    while (cursor != null) {
      [prevNode, cursor] = [cursor, cursor.next]
    }

    prevNode.next = Node(value)
    prevNode.next.prev = prevNode

    return this
  },

  removeLink(position) {

    if (!(typeof position == 'number') || position < 1 || position > this.getLength()) {
      this.root = null
      throw Error('You can\'t remove incorrect link!')
    }

    position--
    let cursor = this.root
    while (position > 0 && cursor != null) {
      cursor = cursor.next
      position--
    }
    if (this.root == cursor) {
      this.root = cursor.next
    }
    if (cursor.prev != null) {
      cursor.prev.next = cursor.next
    }
    if (cursor.next != null) {
      cursor.next.prev = cursor.prev
    }
    return this
  },

  reverseChain() {
    if (this.root == null) {
      return this
    }
    let cursor = this.root
    let prevNode = cursor
    while (cursor != null) {
      const {prev, next} = cursor
      cursor.prev = next
      cursor.next = prev
      prevNode = cursor
      cursor = next
    }
    this.root = prevNode
    return this
  },

  finishChain() {
    let parts = []
    let cursor = this.root
    while (cursor != null) {
      parts.push(`( ${cursor.value} )`)
      cursor = cursor.next
    }
    this.root = null
    const result = parts.join('~~')
    return result
  }
};

let res = chainMaker
  .addLink(3.14)
  .addLink(1)
  .addLink({ 0: 'first', 1: 'second', 'length': 2 })
  .removeLink(1)
  .addLink('DEF')
  .addLink({ 0: 'first', 1: 'second', 'length': 2 })
  .removeLink(1)
  .addLink(true)
  .addLink(false)
  .addLink(333)
  // .reverseChain()
  // .reverseChain()
  .finishChain()
console.log(res)

module.exports = {
  chainMaker
};
