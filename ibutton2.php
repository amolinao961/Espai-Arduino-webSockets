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
			arduino.on('button', function(data){
				if(data.text == 1){
					$( '.ball' ).css( 'top', '+=10px' );
				}
				if(data.text == 2){
					$( '.ball' ).css( 'top', '-=10px' );
				}
				if(data.text == 3){
					$( '.ball' ).css( 'left', '+=10px' );
				}
				if(data.text == 4){
					$( '.ball' ).css( 'left', '-=10px' );
				}

			});
		});
	</script>
<body>
 <div class="ball" style="height:100px; width:100px;
 background-color:blue; position:absolute; top:0; left:0"></div>
</body>
</html>