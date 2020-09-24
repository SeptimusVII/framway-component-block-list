module.exports = function(app){
    var BlockList = Object.getPrototypeOf(app).BlockList = new app.Component("block-list");
    //BlockList.debug = true;
    BlockList.createdAt      = "2.0.0";
    BlockList.lastUpdate     = "2.0.0";
    BlockList.version        = "1";
    // BlockList.factoryExclude = true;
    BlockList.loadingMsg     = "[Deprecated]";
    // BlockList.requires       = [];

    BlockList.prototype.onCreate = function(){
        var block = this;
        if(block.$el.hasClass('content--inline') && !block.$el.find('.block-list__wrapper__inner').length){
            block.$el.find('.block-list__headline,.block-list__content,.block-list__footer').wrapAll('<div class="block-list__wrapper__inner"></div>')
        }
    }
    return BlockList;
}