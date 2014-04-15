var app= require("http")
	, io = require('socket.io').listen(8090)
	, fs = require('fs')
	, five = require("johnny-five"),
	button;

var board = new five.Board();

board.on("ready", function(){
	bTop = new five.Button({pin: 4});
	bBottom = new five.Button({pin: 5});
	bRight = new five.Button({pin: 6});
	bLeft = new five.Button({pin: 7});
	var browser = io.of("/johnny5").on('connection', function (socket){
		var hs = socket.handshake;
		
		bTop.on("press", function() {
			socket.emit('button', {text : 1});
		});
		bBottom.on("press", function() {
			socket.emit('button', {text : 2});
		});
		bRight.on("press", function() {
			socket.emit('button', {text : 3});
		});
		bLeft.on("press", function() {
			socket.emit('button', {text : 4});
		});
		
	});
}); 