app.factory('socket',function(socketFactory){

	var hostname = "192.168.10.1";
	var myIoSocket = io.connect("http://"+hostname+":3000/");

	mySocket = socketFactory({
		ioSocket: myIoSocket
	});

	console.log("socket init");
	return mySocket;
})