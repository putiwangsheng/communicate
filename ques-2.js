// Number方法

// 请将数字字符串:'123'转化为数字：123：
var str = '123';
var number = parseInt(str, 10);
console.log(number);

// 使用Number函数将数字字符串数组：['1','2']转化为数字数组：[1,2]:
var ary = ['1','2'];
var numberArr = ary.map(Number);
console.log(numberArr);
