//兼容JSON
if(!window.JSON){
	window.JSON={
		parse:function(sJSON){
			return eval('('+sJSON+')');
		}
	};
};
//兼容JSON.stringify
/** 
 * JSON 值可以是： 
 * 数字（整数或浮点数） 
 * 字符串（在双引号中） 
 * 逻辑值（true 或 false） 
 * 数组（在方括号中） 
 * 对象（在花括号中） 
 * null 
 */  
  
var json = {  
    stringify: function (val) {  
        var stringify = '',  
            curVal;  
  
        if (val === null) {     // null  
            return String(val);  
        }  
          
        switch (typeof val) {  
            case 'number': // number  
            case 'boolean': // boolean  
                return String(val);  
      
            case 'string': // string  
                return '"' + val + '"';  
              
            case 'undefined': // undefined  
            case 'function': // function  
                return undefined;  
        }  
      
        switch (Object.prototype.toString.call(val)) {  
            case '[object Array]': // array  
                stringify += '[';  
      
                for (var i = 0, len = val.length - 1; i < len; i++) {  
                    curVal = json.stringify(val[i]);  
                    stringify += (curVal === undefined ? null : curVal) + ",";  
                }  
                stringify += json.stringify(val[i]);  
      
                stringify += ']';  
                return stringify;  
                  
            case '[object Date]': // date  
                return '"' + (val.toJSON ? val.toJSON() : val.toString()) + '"';  
      
            case '[object RegExp]': // regular expression  
                return "{}";  
      
            case '[object Object]': // object  
                stringify += '{';  
      
                for (var i in val) {  
                    if (val.hasOwnProperty(i)) {  
                        curVal = json.stringify(val[i]);  
                        if (curVal !== undefined) {  
                            stringify += '"' + i + '":' + curVal + ',';  
                        }  
                    }  
                }  
      
                stringify = stringify.slice(0, -1);  
                stringify += '}';  
                return stringify;  
        }  
    }  
};  
  
// 测试代码  
console.log('Number');  
var number = json.stringify(8);  
console.log('stringify:', typeof number, number);  
//console.log(JSON.parse(number));  
//console.log(number === JSON.stringify(8));  
console.log('-----------------------');  
  
console.log('Boolean');  
var boolean = json.stringify(true);  
console.log('stringify:', typeof boolean, boolean);  
//console.log(JSON.parse(boolean));  
//console.log(boolean === JSON.stringify(true));  
console.log('-----------------------');  
  
console.log('Null');  
var _null = json.stringify(null);  
console.log('stringify:', typeof _null, _null);  
//console.log(JSON.parse(_null));  
//console.log(_null === JSON.stringify(null));  
console.log('-----------------------');  
  
console.log('Undefined');  
var _undefined = json.stringify(undefined);  
console.log('stringify:', typeof _undefined, _undefined);  
//console.log(JSON.parse(_undefined));  
//console.log(_undefined === JSON.stringify(undefined));  
console.log('-----------------------');  
  
console.log('String');  
var string = json.stringify('abc123');  
console.log('stringify:', typeof string, string);  
//console.log(JSON.parse(string));  
//console.log(string === JSON.stringify('abc123'));  
console.log('-----------------------');  
  
console.log('Array');  
var theArray = [1, undefined, function () {}, 'a'];  
var array = json.stringify(theArray);  
console.log('stringify:', typeof array, array);  
//console.log(JSON.parse(array));  
//console.log(array === JSON.stringify(theArray));  
console.log('-----------------------');  
  
console.log('Function');  
  
function fnTest() {  
    console.log('function stringify');  
}  
var func = json.stringify(fnTest);  
console.log('stringify:', typeof func, func);  
//  console.log(JSON.parse(func));  
//console.log(func === JSON.stringify(fnTest));  
console.log('-----------------------');  
  
console.log('Object');  
var objTest = json.stringify({  
    a: 1  
});  
console.log('stringify', typeof objTest, objTest);  
//console.log(objTest === JSON.stringify({  
//  a: 1  
//}));  
console.log('-----------------------');  
  
console.log('RegExp');  
var RegExp = json.stringify(/^a$/g);  
console.log('stringify', typeof RegExp, RegExp);  
//console.log(RegExp === JSON.stringify(/^a$/g));  
console.log('-----------------------');  
  
console.log('Date');  
var theDate = new Date();  
var date = json.stringify(theDate);  
console.log('stringify', typeof date, date);  
//console.log(date === JSON.stringify(theDate));  
console.log('-----------------------');  