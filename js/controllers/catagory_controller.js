App.CatagoryController = Ember.Controller.extend({
	model: function(){
		return this.store.find('catagory').filterProperty('blog', blog.id);
	},
	//if someone removes a catagory but dosent save the page it will still be missing
	//a possible sulution would be to simply copy the catagories,
	 //then when save is pressed it would delete all the catagories belonging to the post
	 //and then save the new ones still in the tempArray
		// outcome would be:
		//copy accociated catagory -> to tempArray -> if delete -> remove from tempArray -> when saving -> remove all orginal catagories -> save everything in tempArray
	isEditable: false,
	tempArray: [],
	fillTempArray:
		function(){
			//fills tempArray with a copy of the current catagories
			this.set('tempArray', this.get('model').slice(0));
		}
	,
	valname: '',
	actions: {
		addCatagory: function(){
			//add blog and name
			var catagory = {
				blog: this.get('model').get('blog'),
				name: this.get('valname')
			};

			//clean input name
			this.set('valname', '');

			//add catagory to tempArray
			this.get('tempArray').push(catagory);
		},
		removeCatagory: function(catagory){
			//remove this catagory from temp array
			var index = this.get('tempArray').indexOf(catagory.get('id'));
			this.get('tempArray').splice(index, 1);
		},
		publish: function(){
			//delete orginal catagories
			//destroy all
			this.get('model').destroyRecord();

			//loop through temp array
				//set catagory to the current post of temp array
				//save catagory
				//clean catagory
				//incriment temp array
				//return true when done

			_this = this;
			for(var i = 0; this.get('tempArray').length; i++){
				var tempObject = _this.get('tempArray')[i];
				var catagory = _this.store.createRecord('catagory', {
					blog: tempObject.get('blog'),
					name: tempObject.get('name')
				});
				catagory.save();
			};
			
			//clean temp array
			this.set('tempArray', []);
			
			//set isEditable to false
			this.set('isEditable', false);
		}
	}
});