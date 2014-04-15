var app= require("http")
	, io = require('socket.io').listen(8090)
	, fs = require('fs')
	, five = require("johnny-five"),
	lcd;

var board = new five.Board();
var data = {
	"total" : 0,
	"led1" : 0,
	"led2" : 0,
	"led3" : 0,
	"led4" : 0,
	"led5" : 0
};
board.on("ready", function(){
	led1 = new five.Led({pin: 6});
	led2 = new five.Led({pin: 5});
	led3 = new five.Led({pin: 4});
	led4 = new five.Led({pin: 3});
	led5 = new five.Led({pin: 2});
	lcd = new five.LCD({pins: [7, 8, 9, 10, 11, 12]});
	lcd.on("ready", function() {
		var browser = io.of("/johnny5").on('connection', function (socket){
			var hs = socket.handshake;
			data.total +=1;
			lcd.cursor(0, 0);
			lcd.clear().print("Users: "+data.total);
			socket.on("ip", function(data){
				lcd.cursor(0, 14);
				lcd.print("UP");
				lcd.cursor(1, 0);
				lcd.print(data.ip);
			});	
			//lcd.cursor(1, 0);
			//lcd.print(socket.id);
			//socket.emit('connect', data);
			socket.on("led1", function(){
				if(data.led1 % 2 == 0){led1.on();data.led1+=1;} else {led1.off();data.led1+=1;}
			});	
			socket.on("led2", function(){
				if (data.led2 % 2 == 0){led2.on();data.led2+=1;} else {led2.off();data.led2+=1;}
			});	
			socket.on("led3", function(){
				if (data.led3 % 2 == 0){led3.on();data.led3+=1;} else {led3.off();data.led3+=1;}
			});	
			socket.on("led4", function(){
				if (data.led4 % 2 == 0){led4.on();data.led4+=1;} else {led4.off();data.led4+=1;}
			});	
			socket.on("led5", function(){
				if (data.led5 % 2 == 0){led5.on();data.led5+=1;} else {led5.off();data.led5+=1;}
			});	
			
			socket.on('disconnect', function(){
				console.log("id".error)
				console.log(socket.id)
				console.log(socket)
				data.total -=1;
				lcd.clear().print("Users: "+data.total)
				delete socket.id;
			});
		});	
		
	});
}); 
