const assert = require('chai').assert
const utils  = require('../count-characters')

describe('Character Counter', () => {
  it('returns a single key value pair', () => {
    const word = 'a'
    const expected = { a: 1}

    let result = utils.countCharacters(word)
    assert.deepEqual(result, expected)
  })

  it('returns the number two for the same character', () => {
    const word = 'aa'
    const expected = { a: 2}

    let result = utils.countCharacters(word)
    assert.deepEqual(result, expected)
  })
  
  it('returns more than one key', () => {
    const word = 'yba'
    const expected = { y:1, b: 1, a: 1}
    
    let result = utils.countCharacters(word)
    assert.deepEqual(result, expected)
  })
  
  it('solves longer string with spaces and capital letters', () => {
    const sentence = "I really want to work for Wingspan"
    const expected = {
      ' ': 6,
      o: 3,
      r: 3,
      a: 3,
      n: 3,
      w: 2,
      l: 2,
      t: 2,
      k: 1,
      W: 1,
      p: 1,
      g: 1,
      i: 1,
      I: 1,
      f: 1,
      y: 1,
      s: 1,
      e: 1
    }
    let result = utils.countCharacters(sentence)
    assert.deepEqual(result, expected)
  })
})