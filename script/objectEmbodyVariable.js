// 用对象收编变量
// var checkObject={
// 	checkName : function() {
// 		console.log("验证姓名");
// 	},
// 	checkPassword : function() {
// 		console.log("验证密码");
// 	},
// 	checkEmail : function() {
// 		console.log("验证邮箱");
// 	}
// };

// checkObject.checkName();
// checkObject.checkEmail();
// checkObject.checkPassword();

//用函数对象收编变量
var checkObject=function(){};

checkObject.checkName = function() {
	console.log("验证姓名");
};
checkObject.checkPassword = function() {
	console.log("验证密码");
};
checkObject.checkEmail = function() {
	console.log("验证邮箱");
};


checkObject.checkName();
checkObject.checkEmail();
checkObject.checkPassword();