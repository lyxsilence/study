// Element.children()方法低版本IE兼容
(function(constructor){
	if(constructor && constructor.prototype && constructor.prototype.children == null){
		Object.defineProperty(constructor.prototype,'children',{
			get:function(){
				var i = 0,nodes = element.childNodes,children = [];
				for(var i ; i < childNodes.length; i++) {
					if(Object.prototype.toString.call(nodes[i]) === "[object Element]"){
						children.push(nodes);
					}
				}
				return children;
			}
		});
	}
}) ( window.Node || window.Element );
// 实现浏览器兼容版的element.dataset
function dataset(element){
	var obj = {};
	if(element.dataset){
		return element.dataset;		//测试浏览器是否支持element.dataset，如果支持则直接返回
	} else {
		var att = element.attributes;
			length = att.length;
			for(var i =0; i < length; i++){		
				var key = att[i].nodeName;
				if(/^data-\w+$/.test(key)){		//判断属性名好似否以data-开头
					var value = att[i].nodeValue,
						keyName=key.match(/^data-(\w+)/);
					obj.keyName=value;
				}
			}
	}
	return obj;
}
// 实现浏览器兼容版的window.getComputedStyle	
function getStyle(element){
	if(window.getComputedStyle){
		return window.ComputedStyle(element);
	} else {
		return element.currentStyle;
	}
}
// 实现浏览器兼容版的window.getStyle
function getStyle(element,attr){
	if(window.getComputedStyle){
		return window.ComputedStyle(element)[attr];
	} else {
		return element.currentStyle[attr];
	}
}





























