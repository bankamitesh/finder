export default Em.Component.extend({
    isFile : function(){
        var type = this.get('content.type');
        return type == "file";
    }.property('content.type')
})