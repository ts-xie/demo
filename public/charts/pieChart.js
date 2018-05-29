Vue.component('pie-chart', {
  template: '<canvas width="400" height="400" ref="pie"></canvas>',
  props: ['data'],
  data: function () {
    return {
      myChart: null // chart instance
    };
  },
  mixins: [mixin],
  methods: {
    render: function () {
      var ctx = this.$refs.pie.getContext('2d');
      this.myChart = new Chart(ctx, {
          type: 'pie',
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
  }
});
