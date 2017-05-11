var CheckObject = function(){};
CheckObject.prototype={
			checkName : function() {
				console.log("验证姓名");
				return this;
			},
			checkPassword : function() {
				console.log("验证密码");
				return this;
			},
			checkEmail : function() {
				console.log("验证邮箱");
				return this;
			}
		}
var a = new CheckObject();
a.checkName().checkEmail().checkPassword();
//通过return this实现，方法的链式调用;