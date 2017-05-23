//这是一个简约而不简单的Http服务器

var http = require("http");//请求node.js自带的http模块，并且把它赋值给http变量

http.createServer(function(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello RayJune");
  response.end();
}).listen(8888);
console.log("正在监听http://localhost:8888/");
