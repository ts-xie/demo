var curPage = 0;

var app = new Vue({
  el: '#app',
  router: router,
  data: function () {
    return {
      dir: 'left'
    };
  },
  mounted: function () {
    var vm = this;
    window.addEventListener('keyup', function (e) {
      curPage = _.findIndex(routes, ['path', '/' + vm.$route.matched[0].props.default.name]);
      if (e.keyCode === 37) {
        vm.dir = 'left';
        curPage = Math.max(0, curPage - 1)
        vm.$router.push({ path: routes[curPage].path });
      } else if (e.keyCode === 39) {
        vm.dir = 'right';
        // routes.length - 2 because we have a default route `/`
        curPage = Math.min(routes.length - 2, curPage + 1);
        vm.$router.push({ path: routes[curPage].path });
      }
    });
  }
});
