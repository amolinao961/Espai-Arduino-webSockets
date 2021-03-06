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
	<script>
		
		var arduino= io.connect ('http://'+ip+':8090/johnny5');
		$(document).ready (function(){
			arduino.on('connect', function(text){
				$(".onG").click(function(){
					arduino.emit("led", {text: 1});
				})
				$(".onY").click(function(){
					arduino.emit("led", {text: 2});
				})
				$(".onR").click(function(){
					arduino.emit("led", {text: 3});
				})
				$(".off").click(function(){
					arduino.emit("led", {text: 0});
				})
			})

		});
	</script>
</head>
<body>
	<div class="section-container" id="chat">
		<div class="box onG"></div>
		<div class="box onY"></div>
		<div class="box onR"></div>
		<div class="box off"></div>
	</div>
</body>
</html>