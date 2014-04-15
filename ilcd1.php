<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Arduino+Node</title>
	<script>
	var ip = '192.168.10.143';	
	</script>
	<link rel="stylesheet" href="stylesheets/screen.css">
	<script src="http://192.168.10.143:8090/socket.io/socket.io.js"></script>
	  <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script>
		
		var arduino= io.connect ('http://'+ip+':8090/johnny5');
		$(document).ready (function(){
			arduino.on('connect', function(text){
				$("#submit").click(function(){
					arduino.emit("lcd", {text: $("#text").val()});
					console.log($("#text").val())
				})
			})
		});
	</script>
</head>
<body>
	<div class="section-container" id="chat">
		<input type="text" id="text">
		<input type="button" id="submit" value="Enviar">
	</div>
</body>
</html>