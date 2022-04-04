const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */


// Сейчас бы префиксное дерево написать
function Tree(value = 0) {
  this.count = value
  this.edges = {}
  this.hasEdge = (mark) => mark in this.edges
  this.getChild = (mark) => this.edges[mark]
  this.addEdge = (mark) => this.edges[mark] = new Tree()
  this.getCount = () => this.count
  return this
}

function collect(node, prefix = '') {
  const base = prefix != '' ? { [prefix]: node.count } : {}
  return Object.entries(node.edges)
    .reduce((domains, [p, t]) => Object.assign(domains, collect(t, prefix + '.' + p)), base)
}

function getDNSStats(source) {
  const root = new Tree()
  for (let a of source) {
    const path = a.split('.').reverse()
    let cursor = root
    for (let p of path) {
      if (cursor.hasEdge(p)) cursor = cursor.getChild(p)
      else cursor = cursor.addEdge(p)
      cursor.count++
    }
  }
  return collect(root)
}

module.exports = {
  getDNSStats
};
