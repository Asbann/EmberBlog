App.BcreateRoute = Ember.Route.extend({
	model: function(){
		return this.store.createRecord('blog');
	}
});