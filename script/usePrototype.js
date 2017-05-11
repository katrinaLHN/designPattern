var CheckObject = function(){};
CheckObject.prototype={
			checkName : function() {
				console.log("验证姓名");
			},
			checkPassword : function() {
				console.log("验证密码");
			},
			checkEmail : function() {
				console.log("验证邮箱");
			}
		}
var a = new CheckObject();
a.checkName();