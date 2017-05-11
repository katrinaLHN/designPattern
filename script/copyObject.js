// 通过返回一个对象实现，功能的复制
var checkObject=function(){
	return{
			checkName : function() {
				console.log("验证姓名");
			},
			checkPassword : function() {
				console.log("验证密码");
			},
			checkEmail : function() {
				console.log("验证邮箱");
			}
		};
};
var a=checkObject();
a.checkPassword();

