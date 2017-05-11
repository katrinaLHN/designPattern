/***********************
1.如何实现方法的链式调用
	通过在方法中return this，可以实现方法的链式调用
2.试着定义一个可以为函数添加多个方法的addMethod
***********************/
Function.prototype.addMethod=function(name,fn){
	for(var i=0;i<name.length;i++){
			this[name[i]]=fn[i];
	}
};
var methods =function(){};
methods.addMethod(['checkEmail','checkName'],[
	function(){
		console.log("验证邮箱");
		return this;
	},function(){
		console.log("验证姓名");
		return this;
	}]);
methods.checkName().checkEmail();