const http = require('http');

// const server = http.createServer((req, res) => {
// //   response.end("hello world")
// res.end("<h1>hello world</h1>")
// });

const server = http.createServer((req, res) => {
    console.log(req.url)
 switch (req.url) {
     case "/":
        res.end("<h1>Welcome home</h1>")
         break;
    
         case "/profile":
            res.end("<h1>Welcome to profile page</h1>")
             break;

     default:
         res.end('oupps somthing wrong')
         break;
 }

});

server.listen(5000 , () => console.log('server is running'))