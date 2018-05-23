var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const INTERVAL = 1000;
const NUM_OF_COLUMNS = 8;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  let i = 0;
  socket.on('start', function(){
    setInterval(function () {
      const data = [];
      for (let i = 0; i < NUM_OF_COLUMNS; i++) {
        let n = Math.floor(Math.random() * 100);
        data.push({
          index: i,
          data: n
        });
      }
      io.emit('i', data);
    }, INTERVAL);
  });
  socket.on('stop', function () {

  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
