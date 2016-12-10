var conf = require('./wdio.conf').config
exports.config = Object.assign({},conf,{
  sync: false
})