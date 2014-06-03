var RadioView = Ember.View.extend({
  tagName: 'input',
  type: 'radio',
  attributeBindings: ['type', 'htmlChecked:checked', 'value', 'checked:name'],


  change: function(){
    this.set('selectedValue', this.get('value'));
  },

  htmlChecked: function(){
    return this.get('value') === this.get('selectedValue');
  }.property('value', 'selectedValue'),

  setupBindings: function() {
    if (this.binding) this.binding.disconnect(this);
    this.binding = Em.Binding.from("context." + this.get('checked')).to('selectedValue');
    this.binding.connect(this);
  }.on('init').observes('checked', 'context')

});

export default RadioView;
