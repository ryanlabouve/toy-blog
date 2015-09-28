import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  isDraft: DS.attr('boolean'),
  createdAt: DS.attr('date')
});
