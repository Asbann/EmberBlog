App.Blog = DS.Model.extend({
	title: DS.attr('string'),
	text: DS.attr('string'),
	publishedAt: DS.attr('date'),
	catagories: DS.hasMany('catagory', {async: true})
});