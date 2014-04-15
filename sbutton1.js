var app= require("http")
	, io = require('socket.io').listen(8090)
	, fs = require('fs')
	, five = require("johnny-five"),
	button;

var board = new five.Board();

board.on("ready", function(){
	button = new five.Button({pin: 2});
	var browser = io.of("/johnny5").on('connection', function (socket){
		var hs = socket.handshake;
		
		button.on("press", function() {
			socket.emit('button', {text : 1});
		});
	});
}); 