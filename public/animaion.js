new Vue({
  el: '#app',
  data: function(){
    return {
      themes: ['white', 'black', 'light', 'dark', 'primary', 'link', 'info', 'success', 'warning', 'danger'],
      isShaking: false,
    };
  },
  computed: {
    theme: function(){
      let n = Math.floor(Math.random() * this.themes.length);
      return this.themes[n];
    }
  }
});
