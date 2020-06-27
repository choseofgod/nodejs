const template = require('art-template')

let tplStr = `
  
`

let ret = template.render('hello {{ name }}',{
  name : 'Jack'
})

console.log(ret)