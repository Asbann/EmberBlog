App.ArchiveIndexRoute = Ember.Route.extend({
	model: function(){
		return this.store.findAll('blog');
	}
});