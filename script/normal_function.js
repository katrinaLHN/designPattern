var namebtn = document.getElementById("J_name");
var emailbtn = document.getElementById("J_email");
var passwordbtn = document.getElementById("J_password");

namebtn.onclick=function checkName(){
	console.log("验证姓名");
}
emailbtn.onclick=function checkEmail(){
	console.log("验证邮箱");
}
passwordbtn.onclick=function checkPassword(){
	console.log("验证密码");
}

// 该方法创建了全局变量      请看==>normal_function2