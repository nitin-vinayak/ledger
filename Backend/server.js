const http =  require('http') 

const server = http.createServer((req, res) => {
   console.log('Server is Listening');
})

server.listen(8000)