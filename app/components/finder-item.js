export default Em.Component.extend({
    contentSelected : [],
    actions:{
        itemClicked(content){
            this.set("newContent", []);
            if(content.type == "directory"){
                this.set('fileSelected', 0);
                this.set('fileContent', "");
                this.set('contentSelected', content.content);
            }else{
                this.set('fileSelected', 1);
                this.set('contentSelected', []);
                this.set('fileContent', content.content);
            }
        }
    }
})