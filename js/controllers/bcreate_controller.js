App.BcreateController = Ember.Controller.extend({
	// when a new blog is created it should add the new catagory to the list of existing catagorys
	valname: '',
	actions: {
		createCatagory: function(){
			var _this = this;
			var catagory = this.store.createRecord('catagory',{
				blog: _this.get('model'),
				name: _this.get('valname')
			});
			catagory.save().then(function(){
				_this.set('valname', '');
			});
		},
		publishBlog: function(){
			var _this = this;
			this.get('model').set('publishedAt', new Date());
			this.get('model').save().then(function(){
				_this.transitionToRoute('index');
			});
		}
	}
});