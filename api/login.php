			<?php 
			header('Content-Type:application/json; charset=utf-8');
			$ispostuid =0;
			$ispostpwd =0;
			$html = "";
			$script = "";
			$jump = 0;
			if(isset($_POST['uid'])){
				$GLOBALS['uuid']=$_POST['uid'];
				$ispostuid=1;
			}
			if(isset($_POST['pwd'])){
				$ispostpwd=1;
				$GLOBALS['password']=$_POST['pwd'];
			}
			if($ispostuid==1 && $ispostpwd==1){
				$html .= "<p>提交成功<br />";
				$html .= "提交的内容如下：<br/>";
				$html .= "username= ".$uuid."<br/>";
				$html .= "password= ".$password."<br/></p>";
			}
			?>
			<?php
			$servernamesql = "localhost";
			$usernamesql = "longalong";
			$passwordsql = "longalong";
			$sql = "";
			//$username=null;
			//$password=null;
			$dbname="bigb";
			$aa=null;
			$sql = "select pwd,name,sex,age from user where ID = '".$uuid."';";
			//创建连接
			$conn= new mysqli($servernamesql,$usernamesql,$passwordsql,$dbname);
			
			//检测连接
			if ($conn->connect_error){
				die("connection failed:n".$conn->connect_error);
			}
			$html .= "connect succeed <br/>";
			
			//{// echo "fail to connect: ".mysql_connect_error();}
			$result = mysqli_query($conn,$sql);
			while($row = mysqli_fetch_array($result)){
			// echo "this is password0: ".$row['password']."<br/>";
			//验证密码
				if ($row[0] == $password){
					$html .= "密码验证成功<br /><br />";
					$script .= "<script> alert('Yahoo !\\n\\nWelcome! master');</script>";
					$jump = 1;
					$html .= "内容为：$row[0],$row[1],$row[2]";
				}else {
					$html .= "密码验证错误<br/><br />";
					$script .= "<script> alert('Ooooops !\\n\\n密码错误！');</script>";
				}
			}

			//用完关闭连接
			mysqli_close($conn);
			
			//返回JSON
			//'html'=>$html,'script'=>$script,'jump'=>$jump
			echo json_encode(array('html'=>$html,'script'=>$script,'jump'=>$jump));

			?>