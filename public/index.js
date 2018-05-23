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
    data: [{
      r: 0,
      g: 0,
      b: 0
    }],
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
  computed: {
    tableData: function () {
      return this.data.slice(-5);
    }
  },
  mounted: function () {
    // client socket
    let that = this;
    socket.on('i', function(msg){
      that.data.push(msg);
      that.dataPoint = [msg.r, msg.g, msg.b];
    });
    socket.on('id', function (id) {
      this.$toast.open({
        duration: 5000,
        message: `User ${id} has stoped streaming`,
        position: 'is-top',
        type: 'is-danger'
      })
    });
  }
});
