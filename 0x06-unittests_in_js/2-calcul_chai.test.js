const expect = require('chai').expect
const calculateNumber = require('./1-calcul')

describe('#calculateNumber() with type ADD', () => {
  it('should sum 2.5 and 5.8', () => {
    expect(calculateNumber('SUM', 2.5, 5.8)).to.equal(9)
  })

  it('should sum 2.2 and 5.3', () => {
    expect(calculateNumber('SUM', 2.2, 5.3)).to.equal(7)
  })

  it('should sum 2 and 3.3', () => {
    expect(calculateNumber('SUM', 2, 3)).to.equal(5)
  })
})

describe('#calculateNumber() with type SUBTRACT', () => {
  it('should round up and subtract if type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 2.2, 5.3)).to.equal(-3)
    expect(calculateNumber('SUBTRACT', 2.1, 5.4)).to.equal(-3)
    expect(calculateNumber('SUBTRACT', -7.5, -5.5)).to.equal(-2)
  })
})

describe('#calculateNumber() with type DIVIDE', () => {
  it('should round up and divide if type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2)
    expect(calculateNumber('DIVIDE', 9.5, 1.5)).to.equal(5)
    expect(calculateNumber('DIVIDE', 11.5, 2.3)).to.equal(6)
  })

  it('should return ERROR string if round up b is 0', () => {
    expect(calculateNumber('DIVIDE', 2.2, 0)).to.equal('Error')
    expect(calculateNumber('DIVIDE', 5.8, 0)).to.equal('Error')
    expect(calculateNumber('DIVIDE', 6, 0)).to.equal('Error')
  })
})
