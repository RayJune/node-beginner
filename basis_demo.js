//传递函数
function say(word) {
  console.log(word);
}

function execute_1(someFunction, value) {
  someFunction(value);
}

execute_1(say, "Hello, JS中函数是可以传递的");

//匿名函数

function execute_2(someFunction, value) {
  someFunction(value);
}

execute_2(function(word){ console.log(word) }, "Hello，我是一只匿名函数");
