var namebtn = document.getElementById("J_name");
var emailbtn = document.getElementById("J_email");
var passwordbtn = document.getElementById("J_password");

var checkName = function() {
	console.log("验证姓名");
};
var checkPassword = function() {
	console.log("验证密码");
};
var checkEmail = function() {
	console.log("验证邮箱");
};

namebtn.onclick = checkName;
emailbtn.onclick = checkEmail;
passwordbtn.onclick = checkPassword;

// 该方法把函数通过var来声明功能，就可以有效的把全局变量变成局部声明出来的了。
// 但是缺点也很明显，功能容易被覆盖。