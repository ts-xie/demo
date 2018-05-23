Vue.use(Buefy.default);

// global socket variable
var socket = io();

function start() {
  socket.emit('start');
}
function stop () {
  socket.emit('stop');
}

new Vue({
  el: '#app',
  data: {
    dataPoint: [0,0,0],
    data: [],
    columns: [
      {
        field: 'r',
        label: 'RED',
        numeric: true
      },
      {
        field: 'g',
        label: 'GREEN',
        numeric: true
      },
      {
        field: 'b',
        label: 'BLUE',
        numeric: true
      },
    ]
  },
  mounted: function () {
    // client socket
    let that = this;
    socket.on('i', function(msg){
      that.data.push(msg);
      that.dataPoint = [msg.r, msg.g, msg.b];
    });
  }
});
