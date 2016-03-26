import { expect } from 'chai'
import HelloWorld from '../src/index.js'

describe('Hello, World!', () => {
  it('should return Hello, World', () => {
    expect(HelloWorld).to.equal('Hello, World!')
  })
})
