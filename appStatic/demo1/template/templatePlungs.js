function templateStaticSrc() {}

templateStaticSrc.prototype.apply = function(compiler) {
    compiler.plugin('compilation', function(compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
            if(htmlPluginData && htmlPluginData.plugin && htmlPluginData.plugin.options && typeof htmlPluginData.plugin.options.beforeSrc == "string"){
                var _src = htmlPluginData.plugin.options.beforeSrc
                if(htmlPluginData.assets && htmlPluginData.assets.js && htmlPluginData.assets.js.length > 0){
                    var _len = htmlPluginData.assets.js.length
                    for (var i = 0; i < _len; i++) {
                        htmlPluginData.assets.js[i] = _src + htmlPluginData.assets.js[i]
                    }
                }
            }
            callback(null, htmlPluginData);
        })
    })
}

module.exports = {
	templateStaticSrc : templateStaticSrc
}
