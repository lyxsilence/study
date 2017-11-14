// var students1=[
// 	{name:'张三',gender:1},
// 	{name:'李四',gender:1},
// 	{name:'王五',gender:0}
// ];
// var students2=[
// 	{name: '赵六',gender:0},
// 	{name:'张四',gender:1},
// 	{name:'旺五',gender:0}
// ];
// var students3=[
// 	{name:'李三',gender:0},
// 	{name:'张尼',gender:1},
// 	{name:'你猜',gender:1}
// ];
// var maleCount1=0,
// 	femaleCount1=0,
// 	length1=students1.length,
// 	gender=students1[gender],
// 	students1,
// 	ratiol;
// for (var i = 0; i < length1; i++) {
// 	students1=students1[i];
// 	if (gender===1) {
// 		//如果是男生，男生数量加1
// 		maleCount1++;
// 	}else{
// 		//如果是女生，女生数量加1
// 		femaleCount1++;
// 	}
// }
// ratiol=maleCount1/femaleCount1;
// console.log(students1[1]);
// function add(){
// 	var length=arguments.length,
// 	sum=1,
// 	num;
// 	for (var i = 0; i < length; i++) {
// 		num=arguments[i];
// 		sum = sum*num;
// 	}
// 	return sum;
// }
// var a=add(2,3,4,5,6);
// console.log(a);



// 函数参数 当参数为原始类型时：值传递
function increment(number){
	number += number;
	return number;
}
var a = 1;
var x= increment(a);
console.log(a);//a=1
console.log(x);//x=2

//函数参数 当参数为对象时：引用传递.当函数修改了对象时，参数也被修改
function increment(number){
	number.age += number.age;
	return number;
}
var a = {name: 'zhangsan',age:1};
var x= increment(a);
console.log(a);//{ name: 'zhangsan', age: 2 }
console.log(x);//{ name: 'zhangsan', age: 2 }
