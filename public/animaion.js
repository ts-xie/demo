new Vue({
  el: '#app',
  data: function(){
    return {
      // theme: 'success',
      themes: ['white', 'black', 'light', 'dark', 'primary', 'link', 'info', 'success', 'warning', 'danger']
    };
  },
  computed: {
    theme: function(){
      let n = Math.floor(Math.random() * this.themes.length);
      return this.themes[n];
    }
  },
  methods: {
    rdmTheme: function(){
      return Math.floor(Math.random() * this.themes.length);
    }
  },
  mounted: function() {

  }
});
