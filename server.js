//这是一个简约而不简单的Http服务器

var http = require("http");
var url = require("url");


function start(route, handle) { //将路由函数作为参数传递过去
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}


console.log("正在监听http://localhost:8888/");

exports.start = start; //导出start函数，即导入server模块

/*
Node的异步回掉处理事件的方式，当function这个匿名函数被触发运行时（即被访问），才会启动console.log("Request received.");以及以下的语句。

注意： request和response两个是对象，函数内部调用了对象的方法

（请注意，当我们在服务器访问网页时，我们的服务器可能会输出两次“Request received.”。那是因为大部分浏览器都会在你访问 http://localhost:8888/ 时尝试读取 http://localhost:8888/favicon.ico )
*/
