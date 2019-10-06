export default Ember.Route.extend({
    model() {
        return $.getJSON("/data.json");
    },
    setupController: function(controller, context){
        var model = {};
        model.data = context;
        model.contentSelected = [];
        controller.set('model', model);
    }
});