// Function.prototype.checkEmail=function() {
//  	console.log("驗證郵箱");
// };

// var f=function(){};
// f.checkEmail();
//这样会污染了原生对象Function，别人创建的函数也会被你创建的函数所污染
Function.prototype.addMethod=function(name,fn){
	console.log(this);
	this[name]=fn;
};
var methods =function(){};
methods.addMethod('checkEmail',function() {
	console.log("驗證郵箱");
});
methods.checkEmail();