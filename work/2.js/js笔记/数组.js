// if(!window.JSON){
// 		window.JSON = {
// 				stringify: function(obj){
// 				var result = "";
// 				for(var key in obj){
// 						if(typeof obj[key] == "string"){
// 							// 如果元素值是String类型，属性值需要加上双引号
// 							result += "\"" + key + "\":\"" + obj[key] + "\",";
// 						}else if(obj[key] instanceof RegExp){
// 						// 如果属性是正则表达式，属性值只保留一对空大括号{}
// 						result += "\"" + key + "\":{},";
// 						}else if(typeof obj[key] == "undefined" || obj[key] instanceof Function){
// 						// 如果属性值是undefined, 该属性被忽略。忽略方法。
// 						}else if(obj[key] instanceof Array){
// 						// 如果属性值是数组
// 						result += "\"" + key + "\":[";
// 						var arr = obj[key];
// 						for(var item in arr){
// 						if(typeof arr[item] == "string"){
// 						// 如果数组项是String类型，需要加上双引号
// 						result += "\"" + arr[item] + "\",";
// 						}else if(arr[item] instanceof RegExp){
// 						// 如果属数组项是正则表达式，只保留一对空大括号{}
// 						result += "{},";
// 						}else if(typeof arr[item] == "undefined" || arr[item] instanceof Function){
// 						// 如果数组项是undefined, 则显示null。如果是函数，则显示null?。
// 						result += null +",";
// 						}else if(arr[item] instanceof Object){
// 						//如果数组项是对象(非正则，非函数，非null)，调用本函数处理
// 						result += this.stringify(arr[item]) +",";
// 						}else{
// 						result += arr[item] + ",";
// 						}
// 						}
// result = result.slice(0,-1)+"],"
//             }else if(obj[key] instanceof Object){
//                 // 如果属性值是对象(非null，非函数，非正则)，调用本函数处理
//                 result += "\"" + key + "\":" + this.stringify(obj[key]) + ",";
//             }else{
//                 result += "\"" + key + "\":" + obj[key] + ",";
//             }
//         }
//         // 去除最后一个逗号,两边加{}
//         return "{" + result.slice(0,-1) + "}";
//     }
// };
 
// function add1(i){html
//   console.log("函数声明："+(i+1));
// }
// add1(1);
//  
// var add1 = function(i){
//   console.log("函数表达式："+(i+10));
// }
// add1(1);
//  
// function add1(i) {
//     console.log("函数声明："+(i+100));
// }
// add1(1);
// // 三次打印结果分别是：
// // 函数声明：101
// // 函数表达式：11
// // 函数表达式：11
// // 说明：1、当用两次函数声明方式定义同一个函数时只执行最后一次函数声明对函数的定义。
// // 	  2、使用函数声明和函数表达式定义同一个函数时，如果函数声明在函数表达式之前则先执行函数声明再执行函数表达式（结果1、函数声明:2;2、函数表达式：11）.
// // 	  	 如果函数表达式在函数声明之前则函数表达式执行两次，函数声明不执行（结果：1、函数表达式：11;2、函数表达式：11。）

// var myNumber = {
//   value: 1,
//   add: function(i){
//     var helper = function(i){
//         console.log(this);
//           this.value += i;
//     }
//     helper(i);
//   }
// }
// myNumber.add(1)
// function setName(obj){
//     obj.name = "obama";
//     obj = {name:"clinton"};
// }
// var president = {name:"bush"};
// setName(president);
// console.log(president.name);
// var a = 10;
// function fn(x){
// 	return --x;
// }
// fn(a);
// console.log(a);
// var a = JSON.stringify({name: "jerry", age: 1, nick: undefined, tags: null});
// console.log(a);
// var a="1"-null+true;
// console.log(a);

// var myNumber = {
//   value: 1,
//   add: function(i){
//     var helper = function(i){
//         console.log(this);
//           this.value += i;
//     };
//     helper(i);
//   }
// };
// myNumber.add(1);
// var o={x:1};
// var a=document.getElementById('notExisElement');
// console.log(a);
// console.log(Math.floor(Math.random()*1000));
var arr=["abc","cad","dac"];
var arr2=["lkj","qpo","wwq","dwk"];
// console.log(arr2.length);//数组长度
// console.log(arr[0]);//索引下表为0的数组元素
// arr[0]="cba";//修改数组中的元素
// console.log(arr);
// console.log(arr.indexOf("dww"));//查找数组中是否有该元素若有则返回下标，无则返回-1
// arr.reverse();//改变数组顺序 把整个数组倒置 最后一个变第一个
// console.log(arr);
// arr.sort();//可以给sort传入函数，如不传则按万国码顺序排序
// console.log(arr);
// arr.push("hma","kfn");//在数组的最后传入新的元素
// console.log(arr);
// arr.unshift("ere","fgf");//在数组的最前面传入新的元素
// console.log(arr);
// arr.shift();//拿出数组中第一个元素，并且原数组中第一个元素被干掉
// console.log(arr);
// arr.pop();//拿出数组中最后一个元素，并且原数组中最后一个元素被干掉
// console.log(arr);
// arr.splice(0,1,"hjk");//从索引位置为0的元素开始删除，删除一个元素，并插入元素“hjk”
// console.log(arr);//splice可以做到增删改
//以上方法会改变原数组



// var arr3=arr.slice(1,5);//复制数组从索引位置为1的开始到索引位置为5的结束，索引位置为5的不取。
// console.log(arr3);
// var arr4=arr.concat(arr2,arr3);//新建一个数组 把arr,arr2，arr3都放进去，concat用做连接数组
// console.log(arr4);
// var a="wq@163.com;gp@163.com;xl@163.com";//以;为分隔符把字符串拆分成数组
// var b=a.split(";");
// console.log(b);
// var c=b.join(";");//把数组转换成字符串并用;分隔
// console.log(c);




//forEach方法
// var a=[10,20,30,40,50];//定义一个数组
// var b=[];//定义一个新的空数组
// var adda=function(item){    //给分数加5并把返回值push进新的空数组
// 	b.push(item+5);
// };
// a.forEach(adda);//遍历数组 每找到一个元素执行一边函数
// console.log(b);


//map方法
var a=[10,20,30,40,50];//定义一个数组
var adda=function(item){    //给分数加5并返回一个新的值
	return item+5;
};
var c=a.map(adda);
console.log(c);

var sum=function(periousRsult,item){
	return periousRsult*item;
};
var d=c.reduce(sum,1);
console.log(d);