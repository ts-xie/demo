var mixin = {
  data: function () {
    return {
      myChart: null // chart instance
    };
  },
  watch: {
    data: function (d) {
      this.myChart.data.datasets[0].data = d;
      this.myChart.update();
    }
  },
  mounted: function () {
    this.render();
  }
}
