App.IndexController = Ember.ArrayController.extend({
	isNew: function(){
		return this.filterBy('publishedAt').slice(0,5);
	}.property('@each.publishedAt')
});
