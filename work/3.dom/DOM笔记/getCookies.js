function getCookies(){
	var cookie={};
	var cookies = document.cookie;
	if(cookies==''){
		return cookie;
	}
	var list = cookies.split(';'),
		l = list.length;
	for(var i=0;i<m;i++){
		var item = list[i],
			p = item.indexOf('='),
			name = item.substring(0,p);
		name = decodeURLComponent(name);
		var value = item.substring(p+1);
		value = decodeURLComponent(value);
		cookie[name] = value;
	}
	return cookie;
}