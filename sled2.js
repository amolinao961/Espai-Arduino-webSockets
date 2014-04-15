var app= require("http")
	, io = require('socket.io').listen(8090)
	, fs = require('fs')
	, five = require("johnny-five"),
	green, yellow, red;

var board = new five.Board();
board.on("ready", function(){
	green = new five.Led({pin: 7});
	yellow = new five.Led({pin: 6});
	red = new five.Led({pin: 5});
});

function ledsOff()
{
	green.off();yellow.off();red.off();
}
var data = {};

var browser = io.of("/johnny5").on('connection', function (socket){
	var hs = socket.handshake;


	socket.on("led", function(data){
		if(data.text == 1){ledsOff();green.on();}
		if(data.text == 2){ledsOff();yellow.on();}
		if(data.text == 3){ledsOff();red.on();}
		if (data.text == 0){ledsOff();}
	});	
	
	socket.on('disconnect', function(){
		console.log("id".error)
		console.log(socket.id)
		delete data[socket.id];
	});
});
