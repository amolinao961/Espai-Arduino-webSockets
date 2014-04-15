var app= require("http")
	, io = require('socket.io').listen(8090)
	, fs = require('fs')
	, five = require("johnny-five"),
	led13;

var board = new five.Board();
board.on("ready", function(){
	led13 = new five.Led({pin: 13});
});

var data = {};

var browser = io.of("/johnny5").on('connection', function (socket){
	var hs = socket.handshake;

	socket.on("led", function(data){
		if(data.text == 1){led13.on();}
		if (data.text == 0){led13.off();}
	});	
	
	socket.on('disconnect', function(){
		console.log("id".error)
		console.log(socket.id)
		delete data[socket.id];
	});
});
