var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  let i = 0;
  socket.on('start', function(){
    setInterval(function () {
      io.emit('i', i++);
      console.log(i);
    }, 1000);
  });
  socket.on('stop', function () {

  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
