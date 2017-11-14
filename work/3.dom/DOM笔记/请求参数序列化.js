function serialize(data){  //对发送数据序列化
	if(!data) return '';
	var pairs = [];
	for(var name in data){
		if(!data.hasOwnProperty(name)) continue;//排除嵌套对象
		if(typeof data[name]==='function') continue;//排除操作数是函数
		var value=data[name].toString();
		//encodeURLComponent对同一资源表符（URL）编码
		name=encodeURLComponent(name);
		value=encodeURLComponent(value);
		pairs.push(name+'='+value);
	}
	return pairs.join('&');
}
//get方法封装
function get(url,options,callback){
	// if(window.XMLHttpRequest){
		var xhr = new XMLHttpRequest();
	// } else if(window.ActiveXobject){//兼容IE7及以前版本
	// 	var xhr = new ActiveXobject('Microft.XMLHttp');
	// }
	xhr.onreadystatechange=function(callback){
		if (xhr.readyState==4) {
			if (xhr.status>=200&&xhr.status<300||xhr.status==304) {
				callback(xhr.responseText);
			} else {
				console.log('连接失败'+xhr.status);
			}
		}
	};
	url=url+'?'+serialize(options);
	xhr.open('get',url,true);//开启请求，readyState状态为1
	xhr.send(null);//正式向服务器发送请求，readyState状态为2
}
//post方法封装
function post(url,options,callback){
	// if(window.XMLHttpRequest){
		var xhr=new XMLHttpRequest();
    // }else if(window.ActiveXobject){//兼容IE7及以前版本
    // 	var xhr=new ActiveXobject('Microft.XMLHttp');
    // }
    xhr.onreadystatechange=function(callback){
     if(xhr.readyState==4){//请求结束时，readyState状态为4
     	if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
     		callback(xhr.responseText);
     	}else{
     		console.log('POST请求连接失败:'+xhr.status);
     	}
     }
 };
    xhr.open('post',url,true);//开启请求，readyState状态为1
    xhr.send(serialize(options));//正式像服务器发送请求，readyState状态为2
}
