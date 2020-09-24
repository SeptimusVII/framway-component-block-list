module.exports = function(app){
    var BlockList = Object.getPrototypeOf(app).BlockList = new app.Component("block-list");
    //BlockList.debug = true;
    BlockList.createdAt      = "2.0.0";
    BlockList.lastUpdate     = "2.0.0";
    BlockList.version        = "1";
    // BlockList.factoryExclude = true;
    // BlockList.loadingMsg     = "This message will display in the console when component will be loaded.";
    // BlockList.requires       = [];

    // BlockList.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return BlockList;
}