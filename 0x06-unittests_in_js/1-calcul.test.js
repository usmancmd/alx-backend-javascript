const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe('#calculateNumber() with type ADD', () => {
  it('should sum 2.5 and 5.8', () => {
    assert.equal(calculateNumber('SUM', 2.5, 5.8), 9)
  })

  it('should sum 2.2 and 5.3', () => {
    assert.equal(calculateNumber('SUM', 2.2, 5.3), 7)
  })

  it('should sum 2 and 3.3', () => {
    assert.equal(calculateNumber('SUM', 2, 3.3), 5)
  })
})

describe('#calculateNumber() with type SUBTRACT', () => {
  it('should round up and subtract if type is SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 2.2, 5.3), -3)
    assert.equal(calculateNumber('SUBTRACT', 2.1, 5.4), -3)
    assert.equal(calculateNumber('SUBTRACT', 7.5, 5.3), 3)
  })
})

describe('#calculateNumber() with type DIVIDE', () => {
  it('should round up and divide if type is DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 4.2, 2.2), 2)
    assert.equal(calculateNumber('DIVIDE', 8.5, 3.3), 3)
    assert.equal(calculateNumber('DIVIDE', 11.5, 2.3), 6)
  })

  it('should return ERROR string if round up b is 0', () => {
    assert.equal(calculateNumber('DIVIDE', 2.2, 0), 'Error')
    assert.equal(calculateNumber('DIVIDE', 5.8, 0), 'Error')
    assert.equal(calculateNumber('DIVIDE', 6, 0), 'Error')
  })
})
