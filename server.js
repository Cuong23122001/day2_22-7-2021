const { link } = require('fs');
const http = require('http')
const hostname = 'localhost'
const port = 3000;

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html')
    switch(req.url){
        case '/home':
        case '/':
            res.end('<h1>Home page 2</h1> <p><a href="/about">About page<a> <a href="/help">Help Page<a><p>');
            break;
        case '/about':
            res.end('<h1>About page</h1> <p> <a href="/">Home page<a>');
            break;
        case '/help':
            res.end ('<h1>Help Page </h1><p> <a href="/">Home page<a>' );
            break;
    }
})
server.listen(port,hostname,()=>{
    console.log('Server is running on Port: ' + port);
})