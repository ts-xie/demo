Vue.component('line-chart', {
  template: '<canvas width="800" height="400" ref="bar"></canvas>',
  props: {
    data: {
      type: Array,
      default: []
    },
    selected: {
      type: Array,
      default: []
    }
  },
  watch: {
    data() {
      this.render();
    }
  },
  data() {
    return {
      myChart: null, // chart instance,
      newData: this.data,
    };
  },
  mounted() {
    this.render();
  },
  methods: {
    render: function () {
      var ctx = this.$refs.bar.getContext('2d');
      this.myChart = new Chart(ctx, {
          type: 'line',
          data: {
              datasets: this.data
          },
          options: {
            responsive: false,
            scales: {
              xAxes: [{
                type: "time",
                time: {
                  displayFormats: {
                    second: "YYYY/MM/DD"
                  }
                },
              }]
            }
          }
      });
    }
  }
});

new Vue({
  el: '#app',
  data: {
    tabs: [
      {
        name: 'Both',
        selected: true,
        filterBy(sel) {
          return (d) => {
            return d['Home/Neutral'] === sel || d['Visitor/Neutral'] === sel;
          }
        }
      },
      {
        name: 'Home',
        selected: false,
        filterBy(sel) {
          return (d) => {
            return d['Home/Neutral'] === sel;
          }
        }
      },
      {
        name: 'Visitor',
        selected: false,
        filterBy(sel) {
          return (d) => {
            return d['Visitor/Neutral'] === sel;
          }
        }
      },
    ],
    activeTabIndex: 0,
    chartData: [],
    selected: [],
    colors: d3.schemeAccent,
  },
  computed: {
    teams() {
      const set = new Set();
      this.chartData.forEach((d) => {
        set.add(d['Visitor/Neutral']);
        set.add(d['Home/Neutral']);
      });
      return Array.from(set);
    },
    datasets() {
      return this.selected.map((sel, i) => {
        const filterFunc = this.tabs.filter(t => t.selected)[0].filterBy(sel);
        const filtered = this.chartData.filter(filterFunc);

        const formated = filtered.map((datum) => {
          return {
            x: moment(datum.Date),
            y: datum.PTS
          }
        });
        return {
            label: sel,
            data: formated,
            fill: false,
            borderColor: this.colors[i % this.colors.length],
            backgroundColor: this.colors[i % this.colors.length],
            lineTension: 0,
        }
      });
    }
  },
  methods: {
    updateChart() {
      try {
         this.chartData = d3.csvParse(this.$refs.textarea.value);
      } catch(e) {
        alert(e);
      }
    },
    updateTab(i) {
      this.tabs[this.activeTabIndex].selected = false;
      this.tabs[i].selected = true;
      this.activeTabIndex = i;
    },
  },
  mounted: function () {
    d3.csv('/data/nba.csv').then((d) => {
      this.chartData = d;
    });
  }
});
