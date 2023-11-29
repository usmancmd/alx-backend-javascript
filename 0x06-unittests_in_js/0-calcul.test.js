const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('test calculateNumber for correct output', () => {
  it('should round up the two nunbers before addition', () => {
    assert.equal(calculateNumber(2.5, 5.8), 9)
    assert.equal(calculateNumber(2.2, 5.3), 7)
    assert.equal(calculateNumber(2, 3.3), 5)
  })

  it('should round up the two nunbers before addition', () => {
    assert.equal(calculateNumber(2.2, 5.3), 7)
    assert.equal(calculateNumber(2.1, 5.4), 7)
    assert.equal(calculateNumber(1.2, 5.3), 6)
  })

})
