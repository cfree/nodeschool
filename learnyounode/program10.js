var net = require('net');

function addZeroIfNecessary(time) {
	return (time < 10 ? '0' + time : time);
}

function getTimestamp() {
	// YYYY-MM-DD hh:mm
	var curTime = new Date();

	return curTime.getFullYear()
		+ '-' + addZeroIfNecessary(curTime.getMonth() + 1)
		+ '-' + addZeroIfNecessary(curTime.getDate())
		+ ' ' + addZeroIfNecessary(curTime.getHours())
		+ ':' + addZeroIfNecessary(curTime.getMinutes());
}

var server = net.createServer(function(socket) {
	socket.end(getTimestamp() + '\n');
});

server.listen(process.argv[2]);