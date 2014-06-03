var RadioView = Ember.View.extend({
  tagName: 'input',
  type: 'radio',
  attributeBindings: ['type', 'checked', 'value', 'name']
});

export default RadioView;
