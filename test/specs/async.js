import assert from 'power-assert'
describe('sync: false',()=>{
  it('Promise',()=>{
    browser.url('/')
    browser.getTitle().then( title =>{
      assert( /WebdriverIO/.test(title) ) 
    })
  })
  // it('Generator', function* (){
  //   browser.url('/')
  //   let title = yield browser.getTitle()
  //   assert( /WebdriverIO/.test(title) ) 
  // })
})
