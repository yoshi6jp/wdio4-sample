import assert from 'power-assert'
describe('sync: test',()=>{
  it('get title',()=>{
    browser.url('/')
    assert( /WebdriverIO/.test( browser.getTitle() ) )
  })
})