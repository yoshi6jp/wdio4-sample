import assert from 'power-assert'
import Fiber from 'fibers'
/**
 * @returns {Promise}
 */
const asyncFn = ()=> new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("--- 1 ---")
    resolve()
  },1000)
}) 

describe('sync: true',()=>{
 describe('asynchronus',()=>{
    it.skip('Promise', ()=>{
      return asyncFn().then( () => {
        console.log("--- 2 ---")
        browser.url('/')
        assert( /WebdriverIO/.test( browser.getTitle() ) )
        console.log("--- 3 ---")
      })
    })
    it('Fiber',()=>{
      const fiber = Fiber.current
      asyncFn().then(()=>{
        fiber.run()
      })
      Fiber.yield()
      console.log("--- 2 ---")
      browser.url('/')
      assert( /WebdriverIO/.test( browser.getTitle() ) )
      console.log("--- 3 ---")
    })
    it('browser.call',()=>{
      browser.call(()=> asyncFn())
      console.log("--- 2 ---")
      browser.url('/')
      assert( /WebdriverIO/.test( browser.getTitle() ) )
      console.log("--- 3 ---")
    })
  })
})