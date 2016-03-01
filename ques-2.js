// Number方法

// 请将数字字符串:'123'转化为数字：123：
var str = '123';
var number = parseInt(str, 10);
console.log(number);

// 使用Number函数将数字字符串数组：['1','2']转化为数字数组：[1,2]:
var ary = ['1','2'];
var numberArr = ary.map(Number);
console.log(numberArr);

// 学习String.prototype.replace()方法，完成以下需求：
// win32/win64及其上，通过git命令: git rev-parse --show-toplevel获取项目本地目录路径的时候存在一个获取不准确的bug，假设获取到的路径转化后是：D:/d/workbench/f2ehint-hook，请使用String.prototype.replace()方法将其转化为：D:/workbench/f2ehint-hook:

// 替换字符串:假如第一个参数是 RegExp对象，并且n或nn是个十进制的数字，那么插入第n个括号匹配的字符串。
var regexp = /^([A-Z]:)(\/\w)/;
var path = 'D:/d/workbench/f2ehint-hook';
path = path.replace(regexp, '$1');
console.log(path);
