var app= require("http")
	, io = require('socket.io').listen(8090)
	, fs = require('fs')
	, five = require("johnny-five"),
	lcd;

var board = new five.Board();
var data = {};
var clients = [];
board.on("ready", function(){
	lcd = new five.LCD({pins: [7, 8, 9, 10, 11, 12]});
	lcd.on("ready", function() {
		var browser = io.of("/johnny5").on('connection', function (socket){
			clients.push(socket.id);
			var hs = socket.handshake;
			lcd.cursor(0, 0);
			//socket.on("lcd", function(data){
				lcd.clear().print("Users: "+clients.length)
			//});
			socket.on('disconnect', function(){
				console.log("id".error)
				console.log(socket.id)
				clients.splice(clients.indexOf(socket.id), 1);
				lcd.clear().print("Users: "+clients.length)
				delete data[socket.id];
			});
		});	
		
	});
}); 
