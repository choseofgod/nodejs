const http = require('http')

const server = http.createServer()

server.on('request', function (request,response) {
  const url = request.url

  if (url === '/') {
    response.end('hello world')
  } else {
    response.end('404 Not Found.')
  }
})

server.listen(3000,function () {
  console.log('server is running')
})