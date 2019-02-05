var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static('public'))

const INTERVAL = 1000;

app.get('/', function(req, res){
  res.sendFile(path.resolve('public/dashboard/index.html'));
});

app.get('/404', function(req, res){
  res.sendFile(path.resolve('public/animation/index.html'));
});

app.get('/gallery', function(req, res){
  res.sendFile(path.resolve('public/gallery/index.html'));
});

app.get('/react', function(req, res){
  res.sendFile(path.resolve('public/react/index.html'));
});

app.get('/funicon', function(req, res){
  res.sendFile(path.resolve('public/funicon/index.html'));
});

// global interval
let interval;

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('start', function(){
    if(interval) return;
    interval = setInterval(function () {

      // data represent primary colors from 0 to 255 in {'red', 'green', 'blue'}
      const data = {
        r: rdmValue(),
        g: rdmValue(),
        b: rdmValue()
      };
      io.emit('i', data);
    }, INTERVAL);
  });
  socket.on('stop', function () {
    clearInterval(interval);
    interval = null;
  });
});

function rdmValue () {
  return Math.floor(Math.random() * 256);
}

http.listen(3000, function(){
  console.log('listening on *:3000');
});
