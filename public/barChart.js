Vue.component('bar-chart', {
  template: '<canvas width="400" height="400" ref="bar"></canvas>',
  props: ['data'],
  data: function () {
    return {
      myChart: null // chart instance
    };
  },
  methods: {
    render: function () {
      var ctx = this.$refs.bar.getContext('2d');
      this.myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ["Red", "Green", "Blue"],
              datasets: [{
                  label: 'Color Value',
                  data: [],
                  backgroundColor: [
                      'rgba(255, 0, 0, 0.5)',
                      'rgba(0, 255, 0, 0.5)',
                      'rgba(0, 0, 255, 0.5)',
                  ],
                  borderColor: [
                      'rgba(255,0,0,1)',
                      'rgba(0, 255, 0, 1)',
                      'rgba(0, 0, 255, 1)',
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      });
    }
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
});
