App.BlogController = Ember.Controller.extend({
	catagory: function(){
		return this.store.findAll('catagory').filterProperty('blog', blog.id);
	},
	// edit catagory
	isEditable: false,
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
		deleteCat: function(catname){
			catname.destroyRecord();
		},
		editToggle: function(){
			this.toggleProperty('isEditable');
		},
		editBlog: function(){
			_this = this;
			this.get('model').save().then(function(){
				_this.send('editToggle');
			});
		},
		deleteBlog: function(){
			var model = this.get('model');
			_this = this;
			if(confirm("Are you sure you want to delete " + model.get('title'))){
				model.destroyRecord();
				_this.send('editToggle');
				_this.transitionTo('index');
			}
		}
	}
});