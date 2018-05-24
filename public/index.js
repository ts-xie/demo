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
    dataPoint: {
      r: 0,
      g: 0,
      b: 0
    },
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
  computed: {
    tableData: function () {
      return this.data.slice(-5);
    },
    hexValue: function () {
      return "#" + this.componentToHex(this.dataPoint.r) + this.componentToHex(this.dataPoint.g) + this.componentToHex(this.dataPoint.b);
    }
  },
  methods: {
    componentToHex: function(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    },
    hexToRgb: function(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    },
    updateOnInput: function (e) {
      this.dataPoint = this.hexToRgb(e.target.value);
    }
  },
  mounted: function () {
    // client socket
    let that = this;
    socket.on('i', function(msg){
      that.data.push(msg);
      that.dataPoint = msg;
    });
  }
});
