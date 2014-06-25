App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function(){
	this.resource('archive', function() {
		this.resource('blog', { path: '/:blog_id' });
		this.resource('bcreate');
	});
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();