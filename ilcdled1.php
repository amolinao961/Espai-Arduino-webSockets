<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Arduino+Node</title>
	<script>
	var ip = '192.168.10.145';	
	</script>
	<link rel="stylesheet" href="stylesheets/screen.css">
	<script src="http://192.168.10.145:8090/socket.io/socket.io.js"></script>
	  <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

</head>
<body>
	<div class="section-container" id="lcdleds">
		<ul>
			<li class="led"> <a class="led1" href="#">1</a></li>
			<li class="led"> <a class="led2" href="#">2</a></li>
			<li class="led"> <a class="led3" href="#">3</a></li>
			<li class="led"> <a class="led4" href="#">4</a></li>
			<li class="led"> <a class="led5" href="#">5</a></li>
		</ul>
	</div>
	<script>
		var arduino= io.connect ('http://'+ip+':8090/johnny5');
		$(document).ready (function(){
			arduino.on('connect', function(data){
				arduino.emit("ip", {ip : "<?php print($_SERVER['REMOTE_ADDR']); ?>"});
				$(".led1").click(function(){
					arduino.emit("led1");
				})
				$(".led2").click(function(){
					arduino.emit("led2");
				})
				$(".led3").click(function(){
					arduino.emit("led3");
				})
				$(".led4").click(function(){
					arduino.emit("led4");
				})
				$(".led5").click(function(){
					arduino.emit("led5");
				})
			})
		});




	</script>
</body>
</html>