// classname兼容
/*
 *特性侦测
 *优先使用W3C规范
 *获取所有后代元素
 *选择包含类名的元素
 *
 */
function getElementByClassName(root,className){
	if(root.getElementByClassName){		//特性侦测
		return root.getElementByClassName(className);
	} else {
		var elements = root.getElementByClassName('*');
		var result = [];
		var element,
			classNameStr,
			flag;
		names = names.split(' ');
		for(var i=0;element=elements[i];i++){
			classNameStr = " "+element.className;
			flag = true;
			for(var j=0,name;name=names[j];j++){
				if(classNameStr.indexOf(' '+name+' ')== -1){
					flag = false;
					break;
				}
			}
			if(flag){
				result.push(element);
			}
		}
		return result;
	}
}
















































