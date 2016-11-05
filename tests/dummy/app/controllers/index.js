import Controller from 'ember-controller';

export default Controller.extend({
  actions: {
    onScroll() {
      console.log('scrolling window');
    },

    onScrollToTop() {
      console.log('finished scrolling to top');
    }
  }
});
