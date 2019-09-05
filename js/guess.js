
var tar = parseInt(Math.random() * 100);

function downFunc() {
	//获取元素
	
	document.getElementById("btnImg").src = "img/empty.png";
}
function upFunc() {
	document.getElementById("btnImg").src = "img/button.png";
}
/* 鼠标抬起 */
function upFunc() {
	
	/* 鼠标抬起，更换图片 */
	document.getElementById("btnImg").src = "img/button.png";
	
	/* 获取输入框的值 */
	var num = document.getElementById("num").value;
	
	/* 首先判断用户输入的内容是否是数字  is Not a Number*/
	if (isNaN(num)) {
		alert("请输入正确的数字");
	} else {
		/* 开始比较用户输入数值与目标数值 */
		if (num > tar) {
			/* 猜大了 */
			document.getElementById("msgImg").src = "img/big.png";
		} else if (num < tar) {
			/* 猜小了 */
			document.getElementById("msgImg").src = "img/small.png";
		} else {
			/* 猜中了 */
			document.getElementById("msgImg").src = "img/win.png";
		}
	}

}