const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(value === '' ? `( )` : `( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (0 < position && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error('cannot remove link');
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chain = [...this.chain].join('~~');
    this.chain = [];
    return chain;
  }
};

module.exports = chainMaker;