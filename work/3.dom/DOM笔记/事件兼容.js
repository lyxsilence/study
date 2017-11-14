//attch事件注册兼容实现
var addEvent = document.addEventLisener ?
	function(elem,type,listener,useCapture) {
		elem.addEventLisener(type,listener,useCapture);
	} :
	function(elem,type,listener,useCapture) {
		elem.attachEvent('on'+type,listener);
	};
//detachEvent事件取消兼容
var delEvent = document.removeEventListener ?
	function(elem,type,listener,useCapture) {
		elem.removeEventListener(type,listener,useCapture);
	} :
	function(elem,type,listener,useCapture) {
		elem.detachEvent('on'+type,listener);
	};