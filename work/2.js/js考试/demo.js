// var a=0;
// var b=true&&a++;
// console.log(a);
// console.log(b);
// var a=(function (){
//  return f();
//   function f(){
// 	return 3
// }
// 	 var f;
//   f=2;
// })();
// var a=1||0;
// console.log(a);
// var a="name=tom&age=20".split("&");
// console.log(a);
// var obj = {}, count = 0;
// function logArray(value, index, array) {
// count++;
// obj[count] = value;
// }
// [1, 2, , 4].forEach(logArray);
// console.log(obj);
// console.log(count);
// function plusplus(num){
// 	return ++num;
// }
// var a = 0;
// var b = plusplus(a);
// console.log(a);
// console.log(b);
// var a=(function (value) {
//                 if (value > 1)
//                     return value *arguments.callee(value - 1);
//                 return value;
// 	})(20);
// console.log(a);
// var str= "micromajor";
// str = str.slice(1,-1);
// console.log(str);
// var a={
// 	name:lye,
// 	age:12,

// };
// var a=1+"1"-true;
// console.log(a);
// 函数myType用于根据输入参数返回相应的类型信息
// 方法一
function myType(param) {
    if (typeof param == "object") {
        if ((Object.prototype.toString.call(param).slice(8, -1)) == "Object") { 
        	return "object" ;
        } else { 
        	return Object.prototype.toString.call(param).slice(8, -1); 
        }
    } else {
     return typeof param; 
 		}
}
//方法二
function myType(param){
	if(typeof param !== "object"){
		return typeof param;
	} else if((Object.prototype.toString.call(param).slice(8,-1)) !== "Object"){
			return Object.prototype.toString.call(param).slice(8,-1);
		} else {
			return "object";
		}
	}
// 函数search用于在一个已排序的数字数组中查找指定数字。
function search(arr,dst){
	var i = 0,length = arr.length-1;
	while(i<=length){
		var m = Math.floor((i+length)/2);
		if(dst<arr[m]){
			length=m-1;
		} else if (arr[m]<dst){
			length = m+1;
		}else {
			if(arr[m-1]==dst){
				return m-1;
			}
			return m;
		}
	}
	return -1;
}
var arr= [1, 2, 4, 6, 7, 9, 19,20, 30, 40, 45, 47],
	a=search(arr, 4);
console.log(a);
// // 函数formatDate的实现代码
// function formatDate (date,pattern){
// 	var time = pattern;
// 	time = time.replace(/yyyy/,date.getFullYear());
// 	time = time.replace(/MM/,date.getMonth()+1);
// 	time = time.replace(/dd/,date.getDate());
// 	time = time.replace(/HH/,date.getHours());
// 	time = time.replace(/mm/,date.getMinutes());
// 	time = time.replace(/ss/,date.getSeconds());
	
// 	return time;
// }
// var date = new Date(2013,8,13,14,30,25);
// var b = formatDate(date,"MM-dd HH");
// console.log(b);

// function formatDate(date, pattern) { 
// 	var date = date,
// 		y = date.getFullYear(), 
// 		m = date.getMonth() + 1,
// 		d = date.getDate(),
// 		h = date.getHours(),
// 		min = date.getMinutes(),
// 		s = date.getSeconds();
//     if(m < 10)  {
//     	m = '0' + m;
//     }
//     if(d < 10){
//     	d = '0' + d;
// 	}
//     if(h < 10){
//     	h = '0' + h;
//     }
//     if(min < 10){
//     	min = '0' + min;
//     }
//     if(s < 10){
//     	s = '0' + s; 
//     }
//     switch (pattern) {
//         case 'yyyy':
//             date = y; 
//             break;
//         case 'yyyy-MM':
//         	date = y + '-' + m;
//         	break;
//         case 'yyyy-MM-dd':
//             date = y + '-' + m + '-' + d; 
//             break;
//         case 'yyyy-MM-dd HH':
//             date = y + '-' + m + '-' + d + ' ' + h; 
//             break;
//         case 'yyyy-MM-dd HH:mm:ss':
//             date = y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s; 
//             break;
//         case 'HH:mm':
//             date =h + ':' + min; 
//             break;
//         case 'HH:mm:ss':
//             date =h + ':' + min + ':' + s; 
//             break;
//         default:
//             date = date; 
//         } 
//         return date.toString(); 
//     }
// var date = new Date(2001, 8, 11, 8, 6, 8);
// var time = formatDate(date, 'yyyy-MM-dd');
// console.log(time);
// 方法二
// function formatDate (date,pattern){
// 	var date = date;
// 	var y = date.getFullYear();
// 	var m = date.getMonth()+1;
// 	var d = date.getDate();
// 	var h = date.getHours();
// 	var min = date.getMinutes();
// 	var s = date.getSeconds();
// 	if(m<10){
// 		m = '0'+m;
// 	}
// 	if(d<10){
// 		d = '0'+d;
// 	}
// 	if(h<10){
// 		h = '0'+h;
// 	}
// 	if(min<10){
// 		min = '0'+min;
// 	}
// 	if(s<10){
// 		s = '0'+s;
// 	}

// }
// var date = new Date(2013,8,13,14,30,25);
// var b = formatDate(date,"MM");
// console.log(b);