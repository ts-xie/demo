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
    data: [],
    columns: [
      {
        field: '0',
        label: '0',
        numeric: true
      },
      {
        field: '1',
        label: '1',
        numeric: true
      },
      {
        field: '2',
        label: '2',
        numeric: true
      },
      {
        field: '3',
        label: '3',
        numeric: true
      },
      {
        field: '4',
        label: '4',
        numeric: true
      },
      {
        field: '5',
        label: '5',
        numeric: true
      },
      {
        field: '6',
        label: '6',
        numeric: true
      }
    ]
  },
  mounted: function () {
    // client socket
    let that = this;
    socket.on('i', function(msg){
      that.data.push(msg);
    });
  }
});
