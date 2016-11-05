import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scroll-top', 'Integration | Component | Scroll Top', {
  integration: true
});

test('display with block', function(assert) {
  this.render(hbs`
    {{#scroll-top}}
      <span class='item'></span>
    {{/scroll-top}}
  `);
  assert.equal(this.$('.ember-scroll-to-top').length, 1,  'element injected into DOM');
  assert.equal(this.$('.item').length, 1,  'element inside injected into DOM');
});

test('display withouth block', function(assert) {
  this.render(hbs`{{scroll-top}}`);
  assert.equal(this.$('.ember-scroll-to-top').length, 1,  'element injected into DOM');
  assert.equal(this.$('.btn__scroll-to-top').length, 1,  'element injected into DOM');
});

// test('display with block and can react to external action', function(assert) {
//   assert.expect(1);
//
//   this.set('externalAction', () => {
//     assert.ok(true, 'external action is hooked');
//   });
//
//   this.render(hbs`
//     {{#scroll-top onScrollToTop=(action externalAction)}}
//       <div class='button'></div>
//     {{/scroll-top}}
//   `);
//
//   this.$('.button').click();
// });
