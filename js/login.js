$(function () {


	$("#submit").click(login);
	function login() {
		var uid;
		var pwd;
		uid = $("#uid").val();
		pwd = $("#pwd").val();
		$.post("api/login.php",{uid,pwd},function(result){
			$("#message").html(result.html);
			if (result.jump === 1) {
				alert("按理 应该跳转了");// window.location.href = "./index.html";
			} else {
				alert("当然是验证失败啦");
			}
			console.log(typeof(result));
			console.log(result);
		});
	}
});

