Vue.component('radar-chart', {
  template: '<canvas width="400" height="400" ref="radar"></canvas>',
  props: ['data'],
  mixins: [mixin],
  methods: {
    render: function () {
      var ctx = this.$refs.radar.getContext('2d');
      this.myChart = new Chart(ctx, {
        type: 'radar',
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
          scale: {
            ticks: {
              beginAtZero: true,
              max: 300
            }
          }
        }
      });
    }
  }
});
