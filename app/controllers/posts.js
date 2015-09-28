import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [
    'page',
  ],
  page: 1,
  metaData: Ember.computed('model', function() {
    let metadata = this.store.metadataFor('post');
    return Ember.get(metadata, 'pagination');
  }),

  actions: {
    nextPage() {
      let page = this.get('page');
      this.set('page', page + 1);
    },

    prevPage() {
      let page = this.get('page');
      this.set('page', page - 1);
    }
  }
});
