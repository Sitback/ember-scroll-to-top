import Ember from 'ember';
import Controller from 'ember-controller';

const { Logger } = Ember;

export default Controller.extend({
  actions: {
    onScroll() {
      Logger.log('scrolling window');
    },

    onScrollToTop() {
      Logger.log('finished scrolling to top');
    }
  }
});
