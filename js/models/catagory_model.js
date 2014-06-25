App.Catagory = DS.Model.extend({
	blog: DS.belongsTo('blog'),
	name: DS.attr('string')
});