import Component from 'ember-component';
import $ from 'jquery';
import on from 'ember-evented/on';

export default Component.extend({
  classNames: 'ember-scroll-to-top',

  toggleWhenScroll: null,

  setup: on('init',  function() {
    $(document).on('scroll', this.onWindowScroll.bind(this));
  }),

  onWindowScroll() {
    if(this.get('toggleWhenScroll')) {
      const element = this.get('element');
      if ($(this).scrollTop() > 100) {
  			$(element).show();
  		} else {
  			$(element).hide();
  		}
    }
  },

  actions: {
    backToTop() {
      console.log('here');
    }
  }
});
