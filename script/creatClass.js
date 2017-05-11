// 创建一个类实现功能的继承
var CheckObject=function(){
	this.checkName = function() {
		console.log("验证姓名");
	};
	this.checkPassword = function() {
		console.log("验证密码");
	};
	this.checkEmail = function() {
		console.log("验证邮箱");
	};
};
var a = new CheckObject();
a.checkEmail();

