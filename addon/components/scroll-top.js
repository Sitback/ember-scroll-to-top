import Component from 'ember-component';
import $ from 'jquery';
import on from 'ember-evented/on';

export default Component.extend({
  classNames: 'ember-scroll-to-top',
  animate: false,
  toggleWhenScroll: null,
  toggleStartOffset: 100,
  effectToToggle: 'default',
  shouldShowElement: true,

  _effectToToggleFuncs: {
    'default': {
      show: 'show',
      hide: 'hide'
    },
    'fade': {
      show: 'fadeIn',
      hide: 'fadeOut'
    }
  },

  setup: on('didInsertElement',  function() {
    $(document).on('scroll', (e) => {
      if(this.get('onScroll')) {
        this.get('onScroll')(e);
      }
      this._onWindowScroll.call(this);
    });

    this._onWindowScroll({ initial: true });
  }),

  _onWindowScroll(options = {}) {
    if (this.get('toggleWhenScroll')) {
      const {
        element,
        _effectToToggleFuncs,
        effectToToggle
      } = this.getProperties('element', '_effectToToggleFuncs', 'effectToToggle');
      const { initial } = options;
      const effectFuncs = initial ?
        _effectToToggleFuncs['default'] :
        _effectToToggleFuncs[effectToToggle] || _effectToToggleFuncs['default'];

      if ($(window).scrollTop() > this.get('toggleStartOffset')) {
        $(element)[effectFuncs['show']]();
      } else {
        $(element)[effectFuncs['hide']]();
      }
    }
  },

  actions: {
    scrollToTop() {
      const target = $('html, body');
      const animate = this.get('animate');
      if (animate) {
        target.animate({scrollTop : 0}, parseFloat(animate), () => {
          if(this.get('onScrollToTop')) {
            this.get('onScrollToTop')();
          }
        });
      } else {
        target.scrollTop(0);
        if(this.get('onScrollToTop')) {
          this.get('onScrollToTop')();
        }
      }
    }
  }
});
