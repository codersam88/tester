Wine = Backbone.Model.extend();

firstWine = new Wine ({
    name: "Clos Pegase"
});

Wines = Backbone.Collection.extend ({
    Model: Wine,
    url: '#'
}); 

Wines = new Wines ([
    {name: 'Robert Mondovi'},
    {name: 'CakeBread'}
]);

HomeView = Backbone.View.extend ({
    el:'body',
    
    initialize: function() {
	this.render();
    },
    
    render: function() {
	this.$el.empty();
	this.$el.append('<h1>My App</h1>');
	return this;
    }
});
