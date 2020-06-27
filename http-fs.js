const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request',function (request,response) {
  const url = request.url

  if (url === '/') {
    fs.readFile('./resource/index.html',function (err, data) {
      if(err) {
        response.setHeader('Context-Type','text/plain; charset=utf-8')
        response.end('文件读取失败,请稍后重试!')
      } else {
        response.setHeader('Context-Type','text/html; charset=utf-8')
        response.end(data)
      }
    })
  } else if (url === '/elect') {
    fs.readFile('./resource/elect.jpg',function (err,data) {
      if(err) {
        response.setHeader('Context-Type','text/plain; charset=utf-8')
        response.end('文件读取失败,请稍后重试!')
      } else {
        response.setHeader('Context-Type','image/jpeg')
        response.end(data)
      }
    })
  }
})

server.listen(3000,function () {
  console.log('server is running')
})