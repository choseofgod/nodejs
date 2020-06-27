let http = require('http')

let server = http.createServer()

server.on('request',function (request,response) {
  console.log('收到客户端请求',request.url)

  response.write('hello')
  response.end()
})

server.listen(3000,function () {
  console.log('服务器启动成功,可以通过localhost 访问')
})


