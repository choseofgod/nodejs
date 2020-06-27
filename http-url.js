const http = require('http')


const server = http.createServer()

server.on('request', function (request,response) {
  console.log('收到请求了,请求路径'+ request.url)


  // response.end('hello world')
  const url = request.url
  if(url === '/') {
    response.end('index page')
  } else if (url === '/login'){
    response.end('login page')
  }else if (url === '/products'){
    const products = [
      {
        name : '苹果',
        price : 8888
      },
      {
        name : '菠萝',
        price : 788
      },
      {
        name : '苹果 8',
        price : 6666
      }
    ]

    response.end(JSON.stringify(products))
  } else {
    response.end('404 not find')
  }
})

server.listen(80,function () {
  console.log('服务器启动成功 , 可以访问了')
})